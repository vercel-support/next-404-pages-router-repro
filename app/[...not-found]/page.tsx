import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found - Served from App Router notfound.tsx file</h1>
      <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Return to Admin Home
      </Link>
    </div>
  )
}

