import type { Metadata } from 'next'
import './css/globals.css';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import "slick-carousel/slick/slick.css";
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: "ecommerce_shop",
    default: "Flippy - All in One Place"
  }
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
          <Footer />
        </Layout>
      </body>
    </html>
  )
}
