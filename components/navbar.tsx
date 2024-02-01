import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" >
                    <ul className="font-medium flex flex-col p-4 border  mt-4 rounded-lg hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <li>
                            <div className="block py-2 px-3 text-black rounded bg-transparent md:p-0 dark:text-white " aria-current="page">Home</div>
                        </li>
                    </ul>
                </Link>
            </div>
        </nav>
    )
}
