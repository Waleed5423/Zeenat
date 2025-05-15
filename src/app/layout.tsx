import './globals.css'
import { Poppins, Noto_Nastaliq_Urdu } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const notoUrdu = Noto_Nastaliq_Urdu({
  weight: ['400', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-noto-urdu',
})

export const metadata = {
  title: 'Zeenat - A Safe Marketplace for Women Entrepreneurs',
  description: 'A verified space for women to sell and grow their businesses online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${notoUrdu.variable}`}>
      <body className="bg-off-white m-0 p-0">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}