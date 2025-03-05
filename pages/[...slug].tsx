import Link from "next/link"
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const { slug } = context.params as { slug: string | string[] }

    console.log("slug", slug)

    // Ensure slug is always an array
    const slugArray = Array.isArray(slug) ? slug : [slug]

    // Check if slug array exactly matches ["about"] or ["contact"]
    const isValidPath = slugArray.length === 1 && (slugArray[0] === "about" || slugArray[0] === "contact")

    if (!isValidPath) {
        console.log("NOT VALID PATH")
        return {
            notFound: true
        }
    }

    return {
        props: {
            slugArray
        }
    }
}

interface PagesRouterCatchAllProps {
    slugArray: string[]
}

export default function PagesRouterCatchAll({ slugArray }: PagesRouterCatchAllProps) {
    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Pages Router Catch-All Route</h1>
            <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <p className="font-mono">Caught path: /{slugArray.join("/")}</p>
            </div>
            <p className="mb-6">This page catches all undefined routes in the Pages Router (except /admin).</p>
            <Link href="/" className="text-blue-600 hover:underline">
                Back to Home
            </Link>
        </>
    )
}