import { ReactNode } from "react"

import Banner from "./Banner"
import Header from "./Header"
import Footer from "./Footer"


export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans+Thai:wght@100..800&display=swap" rel="stylesheet" />

            <Banner />
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
        </div>
    )
}
