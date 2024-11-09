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
    const [series, setSeries] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadSeries = async () => {
            const res = await fetchTMDB(`/discover/tv?page=${page}`);
            setSeries(res.results);
        };
        loadSeries();
    }, [page]);

    const changePage = (number: any) => {
        setPage(number);
    };

    return (
        <div className="px-20 max-md:px-5">
            <h1 className="text-4xl max-md:text-2xl font-bold py-10 max-sm:text-center">Séries</h1>
            <div className="flex items-center flex-col lg:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
                {series.map((serie: Movie) => {
                    if (serie.poster_path) {
                        return (
                            <Card key={serie.id} data={serie}/>
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