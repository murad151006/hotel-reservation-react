import React from 'react'

export default function Hero({children, hero}) {
    return (
    <header className={hero}>{children}</header>
    )
}

// this is for default image fro Home pages
Hero.defaultProps = {
    hero: "defaultHero"
}