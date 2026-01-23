'use client';

import { useFormState } from 'react-dom';
import { sendInquiry } from './actions';
import { useState } from 'react';

export default function ContactPage() {
  const gmapIframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0982782934525!2d75.8675803!3d25.166159200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f859478ad1387%3A0x508d97916a17fd1!2sDeiwala%20plastic%20products!5e0!3m2!1sen!2sin!4v1769070875610!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  const [state, formAction] = useFormState(sendInquiry, null);
  const [showPhoneHint, setShowPhoneHint] = useState(false);

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) {
      setShowPhoneHint(true);
    } else {
      setShowPhoneHint(false);
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch with us for a quote or any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center space-y-6 md:pr-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Our Address</h3>
              <p className="mt-2 text-gray-600">
                <strong className="font-bold">Deiwala Plastic Products</strong><br />
                F-23, Chambal Industrial Area, <br />
                Kota, Rajasthan
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
              <p className="mt-2 text-gray-600">
                Tel: <a href="tel:+919829037230" className="text-blue-600 hover:text-blue-700">
                  +91 9829037230
                </a>
              </p>
              <p className="mt-1 text-gray-600">
                Email: <a href="mailto:deiwalag04@gmail.com" className="text-blue-600 hover:text-blue-700">
                  deiwalag04@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="relative h-96 md:h-full min-h-[300px]" dangerouslySetInnerHTML={{ __html: gmapIframe }}>
          </div>
        </div>

        <div className="mt-24 max-w-lg mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Inquiry Now</h2>
          <form action={formAction} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="name" id="name" autoComplete="name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" placeholder="Full name" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                type="text" 
                name="phone" 
                id="phone" 
                autoComplete="tel" 
                required 
                pattern="[0-9]*" 
                inputMode="numeric"
                onInput={handlePhoneInput}
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" 
                placeholder="Phone" 
              />
              {showPhoneHint && <p className="mt-1 text-xs text-red-600">Please enter only numbers.</p>}
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea id="description" name="description" rows={4} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md" placeholder="Description"></textarea>
            </div>
            <div>
              <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Submit
              </button>
            </div>
            {state?.message && <p className="mt-4 text-green-600">{state.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
