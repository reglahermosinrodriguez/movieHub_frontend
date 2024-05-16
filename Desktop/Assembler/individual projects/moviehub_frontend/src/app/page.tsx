import Link from 'next/link'
import React from 'react'



export default function Page() {
  return (
    <div>
        <h1>YOUR MOVIES APP</h1>
        <Link href="/movies"><button>Go to movies</button></Link>



    </div>
  )
}