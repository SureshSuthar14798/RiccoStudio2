import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import FloatingButtons from '../components/FloatingButtons'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Ricco - Future Digital Experiences',
  description: 'Premium tech company providing Web Apps, Blockchain Wallets, AI Solutions, and Software Development with cutting-edge technology.',
  keywords: 'Web Development, Blockchain, AI Solutions, Software Development, Tech Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
