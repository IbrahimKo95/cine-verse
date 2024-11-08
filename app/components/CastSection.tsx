import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {Card} from "@/components/ui/card";


export default function CastSection(props: {data: any}){
    return (
        <Carousel
            opts={{
                align: "start",
                dragFree: true,
            }}
        >
            <CarouselContent className="flex max-xl:gap-4">
                {props.data.cast.map((cast: any) => (
                    <CarouselItem key={cast.id} className="basis-1/6">
                        <Card key={cast.id} className="flex flex-col w-52 overflow-hidden">
                            <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name}
                                 className="w-full h-48 object-cover"/>
                            <div className="p-2">
                                <h3 className="text-lg font-bold line-clamp-1">{cast.name}</h3>
                                <p className="text-muted-foreground line-clamp-1">{cast.character}</p>
                            </div>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}