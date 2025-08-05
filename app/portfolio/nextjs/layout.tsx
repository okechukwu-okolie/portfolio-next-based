import React from 'react'

export default function NextjsLayout({children,}:Readonly<{children:React.ReactNode}>) {
  return (
    <div>
      {children}
    </div>
  )
}
