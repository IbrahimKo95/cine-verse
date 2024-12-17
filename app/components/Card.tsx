"use client"
import {Movie} from "@/type";
import {Badge} from "@/components/ui/badge";
import {useEffect, useState} from "react";



export default function Card(props: {data: Movie}) {
    const [dataType, setDataType] = useState("")
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        props.data.title ? setDataType("movie") : setDataType("serie");
    }, [props.data]);
    return (
        <a href={`/${dataType}/${props.data.id}`}>
            <div className="relative w-52 transition-all duration-300 group rounded-xl">
                <img src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} alt={props.data.title}
                     className="w-full h-auto mb-3 group-hover:brightness-50 rounded-xl"/>
                <div className="absolute top-5 left-5">
                    <Badge className={`rounded-full text-sm ${dataType === "serie" ? "bg-purple-800" : ""}`}>{dataType === "movie" ? "FILM" : "SERIE"}</Badge>
                </div>
                <div className="opacity-0 absolute left-[-5px] bottom-5 group-hover:left-5 group-hover:opacity-100 text-lg transition-all duration-300 delay-100">
                    <p className="font-bold">{props.data.title}</p>
                    <div className="flex gap-x-3">
                        {props.data.release_date ? (
                            <Badge>{props.data.release_date}</Badge>
                        ) : (
                            <Badge>Inconnu</Badge>
                        )}
                        {props.data.vote_average ? (
                            <Badge className="">{props.data.vote_average.toFixed(1)}</Badge>
                        ): (
                            <Badge>Non noté</Badge>
                        )}

                    </div>
                </div>
            </div>
        </a>

    );

}