import { getMovie } from '@/utils/function'
import { Movies } from '@/utils/interface/interfaces'
import React from 'react'

type Props = {
  params: {id: string}
}


export default async function OneMovie({params}:Props) {

const id = params.id

try {
  const response = await getMovie(id)
  const movie:Movies = response

  if(!movie) {
    return <div>MOVIE NOT FOUND</div>
  }
  
  return (
    
    <div>
      <h1 className="title">{movie.name}</h1>
      <img className="movie-id" src={movie.image} alt={`cartel de ${movie.name}`} />
      <p>Sinopsis:</p> {movie.sinopsis}
      <p>Score:</p> {movie.score}
    </div>
    
  )

} catch (error) {
  console.error("Failed to fetch movie", error)
  return (
    <div>Error fetching movie data</div>
  )
}

}