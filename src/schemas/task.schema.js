import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Description must be at string",
    }),
    description: z
    .string({
        required_error:"Descriptiopn must be a string"
    }),
    date: z.string().datetime().optional(),
});