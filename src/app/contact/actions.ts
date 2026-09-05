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

    const to = process.env.MANUFACTURER_EMAIL;
    if (!to) {
      throw new Error('MANUFACTURER_EMAIL is not configured.');
    }

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to,
      subject: `New Inquiry from ${parsed.name}`,
      text: `Name: ${parsed.name}\nPhone: ${parsed.phone}\nDescription: ${parsed.description}`,
    });

    if (error) {
      throw new Error(`${error.name}: ${error.message}`);
    }

    return { message: 'Inquiry submitted successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { message: 'Failed to submit inquiry.' };
  }
}
