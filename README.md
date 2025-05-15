# CyberShield Security Solutions Website

A modern, responsive website for a cybersecurity firm built with Next.js and Tailwind CSS.

## Features

- Fully responsive design optimized for all devices
- Modern UI with a professional look and feel
- Interactive components and animations
- Optimized for performance and SEO
- Comprehensive pages including:
  - Home page with key service offerings
  - Detailed services page
  - About page with company information
  - Contact page with form

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Hero Icons and custom SVGs
- **Deployment**: Ready for deployment on Vercel or similar platforms

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd cybersec-firm
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website

## Project Structure

- `/src` - Contains all source code
  - `/app` - Next.js app router structure
  - `/components` - Reusable UI components
    - `/layout` - Layout components (Header, Footer, etc.)
    - `/home` - Components used on the home page
  - `/styles` - Global styles and Tailwind configuration

## Customization

### Changing Colors

The primary color scheme can be adjusted in the globals.css file. The current theme uses blue tones which can be modified to match your brand.

### Adding Content

Add or modify content in the respective page components or create new pages by adding files to the `/app` directory.

## Deployment

This website can be easily deployed on Vercel or other hosting platforms that support Next.js applications.

```bash
npm run build
# then
npm run start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Hero Icons](https://heroicons.com/) 