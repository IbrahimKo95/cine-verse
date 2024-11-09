"use client"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ClapperboardIcon, HomeIcon, MenuIcon, PopcornIcon} from "lucide-react";
import React, {useRef, useState} from "react";

export default function NavBar() {
    const [query, setQuery] = useState<string>("");
    const [menuStyle, setMenuStyle] = useState("max-md:hidden")
    function openMenu() {
        if (menuStyle === "max-md:hidden") {
            setMenuStyle("max-md:flex")
        } else {
            setMenuStyle("max-md:hidden")
        }
    }
    return (
        <nav className="px-20 max-md:px-5 top-0 sticky flex flex-col z-50 py-4 bg-secondary bg-opacity-10">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold"><a href="/">Cine<span className="text-primary">Verse</span></a></h1>
                <ul className="flex">
                    <li className="mr-2">
                        <form action={"/search/" + query}>
                            <Input onChange={(e) => setQuery(e.target.value)} placeholder="Recherche..."></Input>
                        </form>
                    </li>
                    <div className="max-md:hidden flex">
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
                    </div>
                </ul>
                <Button onClick={() => {openMenu()}} variant="outline" className="hidden max-md:block bg-secondary"><MenuIcon/></Button>
            </div>
            <ul className={`hidden ${menuStyle} items-center mt-10`}>
                <li className="w-full text-left">
                    <a href="/">
                        <Button className="w-full text-sm py-5 flex justify-start items-center" variant="ghost"><HomeIcon/> Accueil</Button>
                    </a>
                </li>
                <li className="w-full">
                    <a href="/movies">
                        <Button className="w-full text-sm py-5 flex justify-start items-center" variant="ghost"><PopcornIcon/> Films</Button>
                    </a>
                </li>
                <li className="w-full">
                    <a href="/series">
                        <Button className="w-full text-sm py-5 flex justify-start items-center" variant="ghost"><ClapperboardIcon/> Séries</Button>
                    </a>
                </li>
            </ul>

        </nav>
    )
}