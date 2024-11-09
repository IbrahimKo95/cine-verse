import fetchTMDB from "@/app/services/tmdb-api";
import {Movie} from "@/type";
import Card from "@/app/components/Card";


export default async function SearchResult(props: any) {
    const query = await props.params.id;
    const [movies] = await Promise.all([
        fetchTMDB('/search/multi?query='+query),
    ])

    return (
        <div className="max-md:px-5 px-20">
            <h1 className="text-4xl font-bold py-10">Résultat de la recherche pour "{query}"</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7">
                {movies.results.map((movie: Movie) => (
                    <Card key={movie.id} data={movie}/>
                ))}
            </div>
        </div>
    )
}