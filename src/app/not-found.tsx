import Link from "next/link";
import { Arrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section pt-[calc(var(--nav)+64px)]">
      <div className="wrap">
        <p className="t-label">Error 404</p>
        <h1 className="t-h1-page mt-4">This page does not exist</h1>
        <p className="t-lead mt-4 text-muted">The address may be mistyped, or the page was moved.</p>
        <p className="mt-8">
          <Link href="/" className="btn btn--secondary">
            Go to the start page <Arrow />
          </Link>
        </p>
      </div>
    </section>
  );
}
