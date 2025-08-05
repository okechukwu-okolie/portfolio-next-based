import React from 'react'

export default function FullstackLayout({children,}:Readonly<{children:React.ReactNode}>) {
  return (
    <div>
      {children}
    </div>
  )
}
