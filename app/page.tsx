import fetchTMDB from "@/app/services/tmdb-api";
import CardSection from "@/app/components/CardSection";
import Hero from "@/app/components/Hero";

export default async function Home() {

    const [popular, topRated, nowPlaying, upcoming] = await Promise.all([
        fetchTMDB('/movie/popular'),
        fetchTMDB('/movie/top_rated'),
        fetchTMDB('/movie/now_playing'),
        fetchTMDB('/movie/upcoming'),
    ])
    return (
        <div className="">
            <Hero data={popular.results}/>
            <div className="mt-10">
                <CardSection sectionTitle={"Films Populaires"} data={popular.results}/>
                <CardSection sectionTitle={"Films les mieux notés"} data={topRated.results}/>
                <CardSection sectionTitle={"Actuellement au cinéma"} data={nowPlaying.results}/>
                <CardSection sectionTitle={"Prochaine sortie"} data={upcoming.results}/>
            </div>
        </div>
    );
}
