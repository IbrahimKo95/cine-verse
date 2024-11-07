import {Movie} from "@/type";



export default function Card(props: {data: Movie}) {
    return (
        <a href="/movie/">
            <div className="w-52">
                <img src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} alt={props.data.title}
                     className="w-full h-auto mb-3"/>
            </div>
        </a>

    );

}