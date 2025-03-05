import type React from "react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
    <div className="admin-layout">
      {/* You can add admin-specific layout elements here */}
      {children}
    </div>
    </body>
    </html>
  )
}