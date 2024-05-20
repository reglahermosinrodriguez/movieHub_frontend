import Link from 'next/link'
import React from 'react'



export default function Page() {
  return (
    <>
    <h1 className="title">YOUR MOVIES APP</h1>   
   
    <div className="title-button"><Link href="/movies" ><button>Go to movies</button></Link>
    </div>

    </>


  )
}