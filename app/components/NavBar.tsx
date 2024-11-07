import {Button} from "@/components/ui/button";


export default function NavBar() {
    return (
        <nav className="px-20 top-0 sticky flex z-50 py-4 items-center justify-between bg-secondary bg-opacity-10">
            <h1 className="text-2xl font-bold">Cine<span className="text-primary">Verse</span></h1>
            <ul className="flex">
                <li>
                    <Button className="font-semibold" variant="ghost">Films</Button>
                </li>
                <li>
                    <Button className="font-semibold" variant="ghost">Séries</Button>
                </li>
                <li>
                    <Button className="font-semibold" variant="ghost">Movies</Button>
                </li>
            </ul>
        </nav>
    )
}