import './globals.css'
import { ibm, yeseva, montserrat } from './fonts'
import Header from './components/Header'

export const metadata = {
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} ${yeseva.className} ${ibm.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
