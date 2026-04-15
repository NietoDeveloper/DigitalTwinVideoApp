import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Twin Video | Software DT',
  description: 'Industrial Grade Video Reconstruction',
  // Esto ayuda a que el branding se vea impecable en buscadores
  icons: {
    icon: '/favicon.ico', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className="antialiased overflow-x-hidden bg-main"
        // bg-main asegura que si hay un delay en la carga, 
        // el fondo sea el Gainsboro (#DCDCDC) que definiste.
      >
        {children}
      </body>
    </html>
  )
}