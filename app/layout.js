import '../styles/globals.css'
import { Navigation } from "../components/Navigation";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
];

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
      <header>
        <Navigation />
      </header>
        {children}
      </body>
    </html>
  );
}
