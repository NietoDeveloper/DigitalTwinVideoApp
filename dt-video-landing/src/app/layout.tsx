import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Twin Video | Software DT',
  description: 'Industrial Grade Video Reconstruction',
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
        className="antialiased overflow-x-hidden bg-black text-white selection:bg-gold selection:text-black"
        style={{ backgroundColor: '#000000' }}
      >
        {children}
      </body>
    </html>
  )
}