import MainHeader from '@/components/main-header/main-header';
import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import ReduxProvider from '@/redux/ReduxProvider';

export const metadata: Metadata = {
  title: 'Rotten Potato',
  description: 'Search for all your favorite movies.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <MainHeader />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
