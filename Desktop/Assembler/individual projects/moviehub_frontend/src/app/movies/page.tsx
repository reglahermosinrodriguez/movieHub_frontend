import { getData } from "@/utils/function";
import { Movies } from "@/utils/interface/interfaces";
import Link from "next/link";

export default async function movies() {
    const getMovies = await getData()
   
return (
<>

<h1 className="title">MOVIES</h1>
<div className="card-movie">
<div className="title-button"><Link href="/api/auth/logout"><button>Log out</button></Link>
    </div>
    {getMovies?.data.map((event:Movies) => (
        <div className="card" key={event.id}>
        <div><h2 className="movie-name">{event.name}</h2>
        <Link href={String(event.id)}><p className="button-id">{event.id}</p></Link>
        </div>
        <img className="movie-img" src={event.image} alt={`Cartel de ${event.name}`}/>
        <p>Genre:{" "}{event.genre.map((genre) => genre.genre.name).join(", ")}</p>
        <p>Sinopsis: {event.sinopsis}</p>
        <p>Score: {event.score}</p>
        
        </div>



))}

</div>

</>



)
}