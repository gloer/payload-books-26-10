import config from "@payload-config";
import { getPayload } from "payload";
import "./Header.css";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Header() {
    const payload = await getPayload({ config });
    const queryResults = await payload.find({
        collection: "navlinks",
        limit: 8,
    });

    if (!queryResults || queryResults.docs.length === 0) {
        notFound()
    }

    const linker = queryResults.docs;

    return (
        <header className="header">
            <Link href="/">Home</Link>
            <nav>
                {
                    linker.map(link => (
                        <Link key={link.slug} href={link.href}>
                            {link.linkname}
                        </Link>
                    ))
                }
            </nav>
        </header>
    );
}