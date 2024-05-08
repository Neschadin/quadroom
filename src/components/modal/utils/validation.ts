import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const formSchema = zfd.formData({
  name: zfd.text(z.string().min(2).max(30).optional()),
  mobile: zfd.text(z.string().regex(/^\+\d{3} \(\d{2}\) \d{3} \d{2} \d{2}$/)),
  email: zfd.text(z.string().email().optional()),
  comment: zfd.text(z.string().min(2).max(300).optional()),
});
