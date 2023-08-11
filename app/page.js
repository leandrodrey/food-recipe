import Link from "next/link";
import Search from "@/components/Search";

export default function Home() {
    return (
        <main>
            <Search />
            <br />
            <br />
            <Link href={'/rating'}>Recipes</Link>
            <br />
            <br />
            TAbla
        </main>
    )
}
