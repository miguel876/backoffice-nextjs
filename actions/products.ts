'use server';

import { SelectProduct, addProduct } from '@/lib/db';
import { ProductFormState, ProductSchema } from '@/lib/form-schemas/products';
import validateFormData from '@/lib/validate-form-data';

export const createProduct = async (
  state: ProductFormState,
  formData: FormData
) => {
  console.log('FormData', formData);

  const validationResult = validateFormData(
    ProductSchema,
    ['name', 'price', 'image_url', 'stock', 'available_at'],
    formData
  );

  console.log(validationResult.errors);

  if (validationResult.errors) return validationResult;

  try {
    //addProduct(product);

    return { success: true };
  } catch (e) {
    return { success: false };
  }
};
