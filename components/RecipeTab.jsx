import React from 'react'
import Link from "next/link";

const links =
    [
        {
            label: 'Ingredients',
            href: '/recipe'
        },
        {
            label: 'Steps',
            href: '/steps'
        }
    ]

const RecipeTab = ({current}) => {
    return (
        <>
            {links.map((link) => (
                <Link className={current === link.label && "current"} href={link.href} key={link.href}>{link.label}</Link>
            ))}
        </>
    )
}
export default RecipeTab
