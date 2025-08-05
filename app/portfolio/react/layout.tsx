import React from 'react'

export default function ReactLayout({children,}:Readonly<{children:React.ReactNode}>) {
  return (
    <div>
      {children}
    </div>
  )
}
