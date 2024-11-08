import {Movie} from "@/type";
import {Badge} from "@/components/ui/badge";



export default function Card(props: {data: Movie}) {
    return (
        <a href={`/movie/${props.data.id}`}>
            <div className="relative w-52 transition-all duration-300 group">
                <img src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} alt={props.data.title}
                     className="w-full h-auto mb-3 group-hover:brightness-50 "/>
                <div className="opacity-0 absolute left-[-5px] bottom-5 group-hover:left-5 group-hover:opacity-100 text-lg transition-all duration-300 delay-100">
                    <p>{props.data.title}</p>
                    <div className="flex gap-x-3">
                        <Badge >{props.data.release_date}</Badge>
                        <Badge className="">{props.data.vote_average.toFixed(1)}</Badge>
                    </div>
                </div>
            </div>
        </a>

    );

}