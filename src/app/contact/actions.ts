'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string(),
  phone: z.string().regex(/^\d+$/, "Phone number must contain only digits."),
  description: z.string(),
});

export async function sendInquiry(prevState: any, formData: FormData) {
  try {
    const parsed = schema.parse({
      name: formData.get('name'),
      phone: formData.get('phone'),
      description: formData.get('description'),
    });

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'deiwalag04@gmail.com',
      subject: 'New Inquiry from your Website',
      text: `Name: ${parsed.name}\nPhone: ${parsed.phone}\nDescription: ${parsed.description}`,
    });

    return { message: 'Inquiry submitted successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { message: 'Failed to submit inquiry.' };
  }
}
