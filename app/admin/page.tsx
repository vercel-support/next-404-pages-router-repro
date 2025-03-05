import Link from "next/link"

export default function AdminHomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
  <h1 className="text-4xl font-bold mb-8">/admin Page (App Router)</h1>
      <p className="text-xl mb-8">This page is using the App Router under /admin</p>
      <Link href="/" className="mt-8 text-blue-600 hover:underline">
        Back to Main Home
      </Link>
    </div>
  )
}