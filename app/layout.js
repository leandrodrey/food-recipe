import ThemeRegistry from "@/app/ThemeRegistry";

export const metadata = {
    title: 'Recipes APP',
    description: 'Challenge for Frontend Developer',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <ThemeRegistry options={{key: 'mui'}}>{children}</ThemeRegistry>
        </body>
        </html>
    )
}
