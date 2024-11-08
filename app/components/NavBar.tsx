import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ClapperboardIcon, HomeIcon, PopcornIcon} from "lucide-react";


export default function NavBar() {
    return (
        <nav className="px-20 top-0 sticky flex z-50 py-4 items-center justify-between bg-secondary bg-opacity-10">
            <h1 className="text-2xl font-bold">Cine<span className="text-primary">Verse</span></h1>
            <ul className="flex">
                <li className="mr-2">
                    <Input placeholder="Recherche..."></Input>
                </li>
                <li>
                    <a href="/">
                        <Button className="" variant="ghost"><HomeIcon/> Accueil</Button>
                    </a>
                </li>
                <li>
                    <Button className="" variant="ghost"><PopcornIcon/> Films</Button>
                </li>
                <li>
                    <Button className="" variant="ghost"><ClapperboardIcon/> Séries</Button>
                </li>
            </ul>
        </nav>
    )
}