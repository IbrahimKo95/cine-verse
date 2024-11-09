"use client"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ClapperboardIcon, HomeIcon, PopcornIcon} from "lucide-react";
import {useState} from "react";

export default function NavBar() {
    const [query, setQuery] = useState<string>("");
    return (
        <nav className="px-20 top-0 sticky flex z-50 py-4 items-center justify-between bg-secondary bg-opacity-10">
            <h1 className="text-2xl font-bold">Cine<span className="text-primary">Verse</span></h1>
            <ul className="flex">
                <li className="mr-2">
                    <form action={"/search/"+query}>
                        <Input onChange={(e) => setQuery(e.target.value)} placeholder="Recherche..."></Input>
                    </form>
                </li>
                <li>
                    <a href="/">
                        <Button className="" variant="ghost"><HomeIcon/> Accueil</Button>
                    </a>
                </li>
                <li>
                    <a href="/movies">
                        <Button className="" variant="ghost"><PopcornIcon/> Films</Button>
                    </a>
                </li>
                <li>
                    <a href="/series">
                        <Button className="" variant="ghost"><ClapperboardIcon/> Séries</Button>
                    </a>
                </li>
            </ul>
        </nav>
    )
}