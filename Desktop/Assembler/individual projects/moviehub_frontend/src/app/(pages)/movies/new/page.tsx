// src/app/movies/new/page.tsx

'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { createMovie } from './action';
import { Movie } from '@/utils/Interfaces/Movies';


export default function NewMovie() {
  const [name, setName] = useState<string>('');
  const [sinopsis, setSinopsis] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [genre, setGenre] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const movie: Movie = { name, sinopsis, image, score, genre };

    try {
      await createMovie(movie);
      router.push('/movies');
    } catch (error) {
      console.error("Failed to create movie:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Sinopsis:
          <textarea
            value={sinopsis}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSinopsis(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Score:
          <input
            type="number"
            value={score}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setScore(parseInt(e.target.value))}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setGenre(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Create Movie</button>
    </form>
  );
}