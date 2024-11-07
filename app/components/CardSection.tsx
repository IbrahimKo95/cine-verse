import {Movie} from "@/type";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Card from "@/app/components/Card";


export default function CardSection(props: {sectionTitle: string, data: Movie[]}) {
    return (
        <div className="px-20 mb-5">
            <h2 className="text-2xl font-bold mb-5">{props.sectionTitle}</h2>
            <Carousel opts={{
                align: "start",
                dragFree: true,
            }}>
                <CarouselContent className="">
                    {props.data.map((movie) => (
                        <CarouselItem className="basis-1/5 -mr-32 max-md:basis-1/2 max-md:-mr-0">
                            <Card data={movie} key={movie.id} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

    );

}