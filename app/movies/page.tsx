"use client"
import Card from "@/app/components/Card";
import fetchTMDB from "@/app/services/tmdb-api";
import {useEffect, useState} from "react";
import {Movie} from "@/type";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";


export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);

    // Charger les films initialement
    useEffect(() => {
        const loadMovies = async () => {
            const res = await fetchTMDB(`/discover/movie?page=${page}`);
            setMovies(res.results);
        };
        loadMovies();
    }, [page]);


    const changePage = (number: any) => {
        setPage(number);
    };

    return (
        <div className="px-20 max-md:px-5">
            <h1 className="text-4xl font-bold py-10">Films</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7">
                {movies.map((movie: Movie) => {
                    if (movie.poster_path) {
                        return (
                            <Card key={movie.id} data={movie}/>
                        )
                    }
                })}
            </div>
            <Pagination className="mt-5 mb-5">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => changePage(page === 1 ? page : page-1)} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink isActive={page === 1} onClick={() => changePage(page === 1 ? page : page-1)}>{page === 1 ? page : page-1}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink isActive={page !== 1} onClick={() => changePage(page === 1 ? page+1 : page)}>{page === 1 ? page+1 : page}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => changePage(page === 1 ? page+2 : page+1)}>{page === 1 ? page+2 : page+1}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={() => changePage(page+1)} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}