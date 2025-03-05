import Link from "next/link"
import { notFound } from "next/navigation"

export default function AdminCatchAllPage({ params }: { params: { slug: string[] } }) {

  if (params.slug.length >= 3) {
    notFound()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Catch-All Route (App Router)</h1>
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <p className="font-mono">Caught path: /admin/{params.slug.join("/")}</p>
      </div>
      <p className="mb-6">This page catches all undefined routes under /admin in the App Router.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  )
}