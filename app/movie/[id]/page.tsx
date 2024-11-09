import fetchTMDB from "@/app/services/tmdb-api";
import {Badge} from "@/components/ui/badge";
import CastSection from "@/app/components/CastSection";
import CardSection from "@/app/components/CardSection";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";


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
                <div className="flex flex-col items-center -mt-40 col-span-1 max-md:col-span-5">
                    <img
                        className="w-80"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className="mt-2">
                        <Dialog>
                            <DialogTrigger className="p-3 hover:bg-secondary transition-all">
                                Regarder le trailer
                            </DialogTrigger>
                            <DialogContent className="w-full max-w-3xl">
                                <DialogHeader>
                                    <DialogTitle>Trailer</DialogTitle>
                                    <DialogDescription>
                                        <iframe
                                            className="w-full h-[60vh] rounded-lg"
                                            src="https://www.youtube.com/embed/AAWJ21wLN4A"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className="col-span-4 flex flex-col gap-y-8 max-md:col-span-5">
                    <div className="max-md:text-center max-md:flex items-center flex-col justify-center">
                        <h1 className="max-md:text-4xl text-5xl font-bold mb-5">{movie.title}</h1>
                        <div>
                            {movie.genres.map((genre: any) => (
                                <Badge variant="secondary" key={genre.id} className="text-sm mr-2 rounded-full font-normal bg-opacity-75">{genre.name}</Badge>
                            ))}
                        </div>
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
                <CardSection sectionTitle={"Recommandations"} data={recommendedMovies.results}/>
            </div>
        </div>
    )
}