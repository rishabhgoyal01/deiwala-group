Story 003: Mandatory Inquiry Form & Email Automation
Description: Implement a validated inquiry form that securely sends user requirements to the administrator's email using Resend.

Acceptance Criteria:

[ ] Form Fields: Create a form with three mandatory fields: Full Name, Contact Number, and Description.

[ ] Mandatory Validation: Use HTML5 required attributes and server-side validation (e.g., Zod) to ensure no field is empty before submission.

[ ] Server Action Implementation: Develop a Next.js Server Action using the "use server" directive to process the form data securely.

[ ] Resend Email Integration: Configure the Server Action to send an email to deiwalag04@gmail.com using the Resend API.

[ ] Submission Feedback: Display a "Success" message or a loading spinner once the user clicks "Submit" so they know the inquiry was sent.