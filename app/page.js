import Link from "next/link";
import {Search, RecipesTable} from "@/components";

export default function Home() {
    return (
        <main>
            <Search />
            <br />
            <br />
            <Link href={'/rating'}>Rating</Link>
            <br />
            <br />
            <RecipesTable />
        </main>
    )
}
