import { getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link'
import React from 'react'



export default async function Page() 

{
  console.log('Page function is running');
  const session = await getSession();

  console.log(session)


  return (
    <>
    <h1 className="title">YOUR MOVIES APP</h1>   
   
    <div className="title-button"><Link href="/api/auth/login"><button>Log in</button></Link>
    </div>

    </>


  )
}