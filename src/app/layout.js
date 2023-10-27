import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: 'Animelist',
  description: 'Belajar Next js Dea afrizal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
