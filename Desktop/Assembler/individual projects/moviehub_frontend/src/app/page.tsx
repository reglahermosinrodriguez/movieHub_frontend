import Link from 'next/link';
import React from 'react';


export default async function Page() {

  return (
    <>
      <h1 className='title'>WELCOME</h1>

      <Link href="/api/auth/login">
        <button className="title-button">Login</button>
      </Link>

      <Link href="/movies">
        <button className="title-button">movies</button>
      </Link>

      <div className="title-button"><Link href="/api/auth/logout"><button>Log out</button></Link>
    </div>
    </>
  );
}