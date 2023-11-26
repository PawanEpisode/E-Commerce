import type { Metadata } from 'next'
import './css/globals.css';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import "slick-carousel/slick/slick.css";

export const metadata: Metadata = {
  title: 'Flippy',
  description: 'A E-Commerce Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-bodyFont w-full bg-main-bg text-darkText'>
        <Layout>
          <Header />
          {children}
        </Layout>
      </body>
    </html>
  )
}
