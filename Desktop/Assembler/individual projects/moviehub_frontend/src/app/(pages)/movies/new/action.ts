// src/app/(pages)/new-movie/actions.ts
// src/app/(pages)/new/actions.ts
'use server';

import { revalidatePath } from 'next/cache';

interface Movie {
  name: string;
  image: string;
  score: number;
  sinopsis: string;
}

const URL: string = process.env.URL|| "ERROR";

export async function createMovie(movie: Movie, userId: string) {
  const response = await fetch(URL + "/movie" + userId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie, userId),
  });

  if (!response.ok) {
    throw new Error("Failed to create movie");
  }

  revalidatePath('/movie');
}
