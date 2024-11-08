"use client"
import Card from "@/app/components/Card";
import fetchTMDB from "@/app/services/tmdb-api";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Movie} from "@/type";


export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);

    // Charger les films initialement
    useEffect(() => {
        const loadMovies = async () => {
            const response = await fetchTMDB(`/discover/movie?page=${page}`);
            setMovies((prevMovies : Movie[]) => [...prevMovies, ...response.results]);
        };
        loadMovies();
    }, [page]);

    // Fonction pour charger les films


    // Gestionnaire pour le bouton "Voir plus"
    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="px-20 max-md:px-5">
            <h1 className="text-4xl font-bold py-10">Films</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7">
                {movies.map((movie: Movie) => (
                    <Card key={movie.id} data={movie} />
                ))}
            </div>
            <div className="flex items-center justify-center mt-10 mb-10">
                <Button onClick={() => handleLoadMore()}>Voir plus</Button>
            </div>
        </div>
    )
}