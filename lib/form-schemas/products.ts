import { z } from 'zod';

export const ProductSchema = z.object({
  name: z.string(),
  price: z.string(),
  image_url: z.string(),
  stock: z.number(),
  available_at: z.string()
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
