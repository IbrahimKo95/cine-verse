"use client";
import { Movie } from "@/type";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Hero(props: { data: Movie[] }) {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
        >
            <CarouselContent className="">
                {props.data.map((movie) => (
                    <CarouselItem className="w-full relative" key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            alt={movie.title}
                            className="w-full h-[80vh] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"/>
                        <div className="absolute bottom-0 left-0 mb-56 max-md:ml-5 max-md:mr-5 ml-20 bg-black bg-opacity-60 text-white p-4 rounded-lg">
                            <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
                            <p className="max-w-xl line-clamp-3">{movie.overview}</p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
