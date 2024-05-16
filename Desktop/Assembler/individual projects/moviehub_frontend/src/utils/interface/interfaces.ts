export interface Movies {
    id: number,
    name: string,
    image: string,
    score: number,
    genre: MovieGenre[],
    sinopsis: string
  }

export interface MovieGenre {
    movieId: number,
    genreId: number,
    movie: Movies,
    genre: Genres
  }

export interface Genres{

    id:     number, 
    name:    string, 
    movie:   MovieGenre[]
}
    