import { getMovie } from '@/utils/api'
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
      <h1>{movie.name}</h1>
      <img src={movie.image} alt="Hola" />
      <p>Sinopsis: {movie.sinopsis}</p>
      <p>Score: {movie.score}</p>
    </div>
    
  )

} catch (error) {
  console.error("Failed to fetch movie", error)
  return (
    <div>Error fetching movie data</div>
  )
}

}