import ThemeRegistry from "@/app/ThemeRegistry";
import RecipeProvider from "@/src/frontend/context/RecipeProvider";

export const metadata = {
    title: 'Recipes APP',
    description: 'Challenge for Frontend Developer',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <ThemeRegistry options={{key: 'mui'}}>
            <RecipeProvider>
                {children}
            </RecipeProvider>
        </ThemeRegistry>
        </body>
        </html>
    )
}
