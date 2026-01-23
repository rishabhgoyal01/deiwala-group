# System Architecture

## Technology Stack
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS (Utility-first)
* **Icons:** Lucide-React
* **Email Service:** Resend API (Server-side implementation)
* **State Management:** Static data fetching from local JSON

## Project Structure
```text
/src
  /app
    /products
      /[category]/page.tsx  <-- Dynamic category routing
    /contact
      /page.tsx             <-- Resend Form integration
  /components
    /ProductCard.tsx        <-- Reusable UI for catalog items
  /data
    /products.json          <-- Source of truth for product specs