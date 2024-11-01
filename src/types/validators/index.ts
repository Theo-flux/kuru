import { z } from 'zod';

export const LinkSchema = z.object({
  link: z
    .string({ required_error: 'Enter a url here.' })
    .url({ message: 'Link is not valid!' })
    .trim()
    .refine((val) => val != '', { message: "Url can't be empty" }),
});

export type TLinkSchema = z.infer<typeof LinkSchema>;
