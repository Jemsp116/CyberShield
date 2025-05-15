import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import MatrixRain from '@/components/layout/MatrixRain';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CyberShield Security Solutions',
  description: 'Advanced cybersecurity solutions to protect your business from evolving digital threats.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-300`}>
        <MatrixRain />
        <AnimatedBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 