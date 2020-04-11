import React from 'react'
import Link from 'next/link'

export default () => (
    <div>
        <h2>Index page</h2>

        <Link href="/form" as="/form">
            form page
        </Link>
    </div>
)
