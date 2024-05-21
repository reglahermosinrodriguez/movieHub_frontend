import dotenv from "dotenv"
import { Movies } from "../interface/interfaces"

dotenv.config()

const URL = process.env.URL || "error"

export async function getData() {
    const data = await fetch(URL + "/movie")
    const JSONdata = await data.json()
    return JSONdata
}

// export async function getMovie(id: string) {
//     const data = await fetch(URL + "/movie" + id)
//     const JSONdata = data.json()
//     return JSONdata
// }

export async function getMovie(id: string): Promise<Movies> {
    const url = `${URL}/movie/${id}`;
    console.log("URL para obtener la película:", url);
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data)
      return data.data;
    } catch (error) {
      console.error("Error fetching movie:", error);
      throw error;
    }
  }

