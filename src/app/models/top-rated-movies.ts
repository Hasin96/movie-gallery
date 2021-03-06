import { Genre } from "./genres";


export interface results extends Genre {
    vote_count: number,
    id: number,
    video: boolean,
    vote_average: number,
    title: string,
    popularity: number,
    poster_path: string,
    original_language: string,
    original_title: string,
    genre_ids: number[],
    backdrop_path: string,
    adult: boolean,
    overview: string,
    release_date: string
    name: string
}

export interface TopRatedMovies {
    page: number,
    total_results: number,
    total_pages: number,
    results: results[]
    
}

