import '../styles/globals.css'
import { Navigation } from '../components/Navigation'
import { Space_Grotesk } from '@next/font/google'
import Link from 'next/link'

const font = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className={font.className}>
        <Link href='/signup'>Signup</Link>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  )
}
