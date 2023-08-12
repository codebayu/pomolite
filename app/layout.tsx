import './globals.css';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const Modal = dynamic(() => import('@/common/components/modal/index'));

export const metadata: Metadata = {
  title: 'Pomolite - Pomodoro Timer',
  description:
    'A simple Pomodoro Timer app that works on a desktop &amp; mobile browser. Pomolite will help you manage your time and let you focus on any tasks such as study, writing, or coding.',
  icons: {
    icon: './favicon.ico',
  },
  openGraph: {
    title: 'Pomolite - Pomodoro Timer',
    description:
      'A simple Pomodoro Timer app that works on a desktop &amp; mobile browser. Pomolite will help you manage your time and let you focus on any tasks such as study, writing, or coding.',
    type: 'website',
    images: '/favicon.ico',
    url: 'https://pomolite.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Modal />
        {children}
      </body>
    </html>
  );
}
