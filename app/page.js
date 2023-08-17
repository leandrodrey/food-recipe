import Link from "next/link";
import {Search, RecipesTable} from "src/frontend/components";

const recipes = () => {
}

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
