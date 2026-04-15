import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Twin Video | Software DT',
  description: 'Industrial Grade Video Reconstruction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}