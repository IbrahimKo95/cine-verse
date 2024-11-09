"use client"
import Card from "@/app/components/Card";
import fetchTMDB from "@/app/services/tmdb-api";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Movie} from "@/type";


export default function MovieList() {
    const [series, setSeries] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadSeries = async () => {
            const response = await fetchTMDB(`/discover/tv?page=${page}`);
            setSeries((prevSeries) => {
                const newSeries = response.results.filter(
                    (newItem: Movie) => !prevSeries.some((item) => item.id === newItem.id)
                );
                return [...prevSeries, ...newSeries];
            });
        };
        loadSeries();
    }, [page]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="px-20 max-md:px-5">
            <h1 className="text-4xl font-bold py-10">Séries</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7">
                {series.map((serie: Movie) => {
                    if (serie.poster_path) {
                        return (
                            <Card key={serie.id} data={serie}/>
                        )
                    }
                })}
            </div>
            <div className="flex items-center justify-center mt-10 mb-10">
                <Button onClick={() => handleLoadMore()}>Voir plus</Button>
            </div>
        </div>
    )
}