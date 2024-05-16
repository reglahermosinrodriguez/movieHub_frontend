import { getData } from "@/utils/api";
import { Movies } from "@/utils/interface/interfaces";
import Link from "next/link";

export default async function movies() {
    const getMovies = await getData()
   
return(
<>

<h1>MOVIES</h1>
<div>
    {getMovies?.data.map((event:Movies) => (
        <div key={event.id}>
        <h2>{event.name}</h2>
        <img src={event.image} alt={`Cartel de ${event.name}`}/>
        <p>Genre: {event.genre.join(', ')}</p>
        <p>Sinopsis: {event.sinopsis}</p>
        <p>Score: {event.score}</p>
        <Link href={String(event.id)}><button>{event.id}</button></Link>
        </div>



))}

</div>

</>



)
}