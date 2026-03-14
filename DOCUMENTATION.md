# PrimeCut Barbershop Template

PrimeCut is a premium barbershop website template built with React and Tailwind CSS.

## Installation

1. Install dependencies

npm install

2. Start development server

npm start

3. Build for production

npm run build

## Customization

### Change Logo
Edit the Navbar component.

### Change Colors
Primary color is configured inside:

tailwind.config.js

### Update Services
Edit:

src/data/services.js

### Update Images
Replace images inside:

src/assets/images

### Booking Form Email
Configure EmailJS inside:

src/config/emailConfig.js

Replace:
SERVICE_ID
TEMPLATE_ID
PUBLIC_KEY

with your EmailJS credentials.

## WhatsApp Integration

Update the WhatsApp number inside:

src/components/WhatsAppButton.jsx

Example:

https://wa.me/2348012345678

## Notes

Images are included for demo purposes only.
Replace them with your own for production use.
