import '../styles/globals.css'
import { Navigation } from "../components/Navigation";
import {Space_Grotesk} from '@next/font/google'

const font = Space_Grotesk({
  weight: ['400', '700']
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={font.className}>
      <header>
        <Navigation />
      </header>
        {children}
      </body>
    </html>
  );
}
