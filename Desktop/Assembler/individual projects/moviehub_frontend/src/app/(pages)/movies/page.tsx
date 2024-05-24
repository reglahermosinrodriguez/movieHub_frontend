import { getData } from "@/utils/function";
import { Movies } from "@/utils/interface/interfaces";
import Link from "next/link";
import { BsCameraReelsFill } from "react-icons/bs";

export default async function movies() {
    const getMovies = await getData()
   
return (
<>

<div className="title"><h1>MOVIES</h1></div>
<div className="card-movie">
{/* <div className="title-button"><Link href="/api/auth/logout"><button>Log out</button></Link>
    </div> */}
    {getMovies?.data.map((event:Movies) => (
        <div className="card"> <BsCameraReelsFill key={event.id} />
        <div><h2 className="movie-name">{event.name}</h2>
        <Link href={String(event.id)}><p className="button-id">{event.id}</p></Link>
        </div>
        <img className="movie-img" src={event.image} alt={`Cartel de ${event.name}`}/>
        <p>Genre:</p>{" "}{event.genre.map((genre) => genre.genre.name).join(", ")}
        <p>Sinopsis:</p> {event.sinopsis}
        <p>Score:</p> {event.score}
        
        </div>



))}

</div>

</>



)
}