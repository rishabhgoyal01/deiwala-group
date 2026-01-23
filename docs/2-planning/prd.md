# Product Requirements Document (PRD)

## Product Overview
**Name:** Deiwala Plastic Products Web Catalog  
**Stack:** Next.js, Tailwind CSS, Lucide Icons  

## Functional Requirements
### 1. Dynamic Product Catalog
* **Data Source:** Pull information from a central `products.json` file.
* **Categories:** 4 primary sections (PET Jar, PET Bottle, HDPE Jar, HDPE Bottle).
* **Sorting:** Automatically sort items by volume (e.g., 1L before 5L).

### 2. Inquiry System
* **Fields:** Name (Text), Contact Number (Tel), Description (Textarea).
* **Action:** Send a structured email to the administrator on submission.

## User Interactions
* **Discovery:** Users navigate via a sticky header to specific material categories.
* **Technical Review:** Users click products to view specs like Neck Size and Material type.
* **Contact:** Users use the embedded Google Map for location or the form for quotes.

## Non-Functional Requirements
* **Performance:** Optimized image loading for industrial product galleries.
* **Branding:** Professional industrial aesthetic using a Blue/White color scheme.
* **Responsibility:** Fully mobile-responsive for on-site field buyers.