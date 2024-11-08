import { Movie } from "@/type";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Card from "@/app/components/Card";

export default function CardSection(props: { sectionTitle: string, data: Movie[] }) {
    return (
        <div className="px-5 md:px-10 lg:px-20 mb-5">
            <h2 className="text-lg md:text-2xl font-bold mb-5">{props.sectionTitle}</h2>
            <Carousel
                opts={{
                    align: "start",
                    dragFree: true,
                }}
            >
                <CarouselContent className="flex max-xl:gap-4">
                    {props.data.map((movie) => (
                        <CarouselItem
                            key={movie.id}
                            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/5 2xl:-mr-32"
                        >
                            <Card data={movie} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
