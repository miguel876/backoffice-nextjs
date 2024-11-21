import { ZodSchema } from "zod";

type FormDataObject = { [key: string]: any };

export default function validateFormData(
  Schema: ZodSchema,
  fields: string[],
  formData: FormData,
) {
  const formDataObject = fields.reduce((acc, field) => {
    acc[field] = formData.get(field);
    return acc;
  }, {} as FormDataObject);

  const validationResult = Schema.safeParse(formDataObject);

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  return validationResult.data;
}
