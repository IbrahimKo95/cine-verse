import fetchTMDB from "@/app/services/tmdb-api";
import {Badge} from "@/components/ui/badge";
import CastSection from "@/app/components/CastSection";
import CardSection from "@/app/components/CardSection";


export default async function MoviePage(props: any) {
    const movieId = props.params.id
    const [movie, casts, similarMovies, recommendedMovies] = await Promise.all([
        fetchTMDB('/movie/'+movieId),
        fetchTMDB('/movie/'+movieId+"/credits"),
        fetchTMDB('/movie/'+movieId+"/similar"),
        fetchTMDB('/movie/'+movieId+"/recommendations"),
    ])
    return (
        <div className="relative z-10">
            <div className="relative">
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                    className="w-full h-[50vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"/>
            </div>
            <div className="relative z-50 px-20 max-md:px-5 grid grid-cols-5 max-md:grid-cols-1 gap-x-10">
                <div className="flex flex-col items-center -mt-40 col-span-1">
                    <img className="w-80" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <div className="mt-2">

                    </div>
                </div>
                <div className="col-span-4 flex flex-col gap-y-5">
                    <div>
                        <h1 className="text-5xl font-bold mb-5">{movie.title}</h1>
                        {movie.genres.map((genre: any) => (
                            <Badge variant="secondary" key={genre.id} className="text-sm mr-2 rounded-full font-normal bg-opacity-75">{genre.name}</Badge>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-2xl mb-3">Synopsis</h2>
                        <p className="text-muted-foreground">{movie.overview}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-3">Distribution</h2>
                        <CastSection data={casts}/>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <CardSection sectionTitle={"Similaires"} data={similarMovies.results}/>
                <CardSection sectionTitle={"Recommendations"} data={recommendedMovies.results}/>
            </div>
        </div>
    )
}