'use server';

import { addProduct } from '@/lib/db';
import { ProductFormState, ProductSchema } from '@/lib/form-schemas/products';
import validateFormData from '@/lib/validate-form-data';
import { CreateProduct } from 'interfaces/product';

import { revalidatePath } from 'next/cache';

export const createProduct = async (
  state: ProductFormState,
  formData: FormData
) => {
  const validationResult = validateFormData(
    ProductSchema,
    ['name', 'price', 'image_url', 'stock', 'available_at'],
    formData
  );

  if (validationResult.errors) return validationResult;

  try {
    const payloadData: CreateProduct = {
      imageUrl: validationResult.image_url,
      name: validationResult.name,
      status: 'active',
      price: validationResult.price,
      stock: parseInt(validationResult.stock),
      availableAt: new Date(validationResult.available_at)
    };

    addProduct(payloadData);

    revalidatePath('/');

    return { success: true, message: 'The product was created successfully' };
  } catch (e) {
    return {
      success: false,
      message: 'There was an error creating the product'
    };
  }
};
