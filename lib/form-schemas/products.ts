import { z } from 'zod';

const requiredError = 'The field is required';

export const ProductSchema = z.object({
  name: z.string().min(1, requiredError),
  price: z.string().min(1, requiredError),
  image_url: z.string().min(1, requiredError),
  stock: z.string().min(1, requiredError),
  available_at: z.string().min(1, requiredError)
});

export type ProductFormState =
  | {
      errors?: {
        name?: string[];
        price?: string[];
        image_url?: string[];
        stock?: string[];
        available_at?: string[];
      };
      message?: string;
    }
  | undefined;
