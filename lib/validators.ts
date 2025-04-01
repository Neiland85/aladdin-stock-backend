import { z } from 'zod';

export const productFilterSchema = z.object({
  category: z.string().optional(),
  available: z.coerce.boolean().optional(),
});

