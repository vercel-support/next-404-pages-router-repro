import Link from "next/link"
import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Next.js Dual Router Example</title>
        <meta name="description" content="An example of using both App Router and Pages Router in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex flex-col items-center justify-center min-h-screen p-8"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#333" }}>
          Next.js Dual Router Example
        </h1>
        <p className="text-xl mb-8" style={{ color: "#666" }}>
          This page is using the Pages Router (Root Route)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <div className="border rounded-lg p-6 shadow-md" style={{ backgroundColor: "#f8f8f8" }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#444" }}>
              App Router (Admin) Pages
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/admin" className="text-blue-600 hover:underline">
                  Admin Home (App Router)
                </Link>
              </li>
              <li>
                <Link href="/admin/test" className="text-blue-600 hover:underline">
                  catch-all Admin Page (App Router)
                </Link>
              </li>
              <li>
                <Link href="/admin/test/test/test" className="text-blue-600 hover:underline">
                  Non-existent Admin Page (will show not-found)
                </Link>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-6 shadow-md" style={{ backgroundColor: "#f8f8f8" }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "#444" }}>
              Pages Router Pages
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/test" className="text-blue-600 hover:underline">
                  Non-existent Page 
                </Link>
                <Link href="/about" className="text-blue-600 hover:underline">
                  About Page 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

