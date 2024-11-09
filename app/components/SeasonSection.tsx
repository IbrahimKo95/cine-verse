import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {Card} from "@/components/ui/card";

export default function SeasonSection(props: {data: any}){
    return (
        <Carousel
            opts={{
                align: "start",
                dragFree: true,
            }}
        >
            <CarouselContent className="flex max-xl:gap-4">
                {props.data.seasons.map((season: any) => (
                    <CarouselItem key={season.id} className="basis-1/4">
                        <Card key={season.id} className="flex flex-col w-[20rem] overflow-hidden">
                            <img src={`https://image.tmdb.org/t/p/w500${season.poster_path}`} alt={season.name}
                                 className="w-full h-48 object-cover"/>
                            <div className="py-2 px-5">
                                <h3 className="text-lg font-bold">{season.name}</h3>
                                <p className="text-muted-foreground">{season.episode_count} episodes</p>
                            </div>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
