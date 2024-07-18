import '@/app/ui/global.css';
import { robotoCondensed } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('hi')
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className} antialiased`}>{children}</body>
    </html>
  );
}
