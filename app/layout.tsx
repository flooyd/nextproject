import '@/app/ui/global.css';
import { robotoCondensed } from '@/app/ui/fonts';
import ContextProvider from './ui/context-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className} antialiased`}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
