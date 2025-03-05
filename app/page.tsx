/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Rename `layout.tsx` and `page.tsx` to `_layout.tsx` and `_page.tsx`, then rebuild the app (pnpm build) and
        `_not-found` will not be included! The 404 from pages router will be used instead, which is what we want.
      </p>

      <p>
        Even with just a `layout.tsx`, and no `page.tsx`, `_not-found` will still be compiled and the 404 from pages
        router is overridden.
      </p>
    </div>
  )
}
