"use client";

import Container from "../Container";
import { TbBeach,TbMountain,TbPool } from "react-icons/tb";
import { GiWindmill , GiIsland , GiBoatFishing , GiCastle , GiForestCamp , GiCaveEntrance , GiCactus , GiBarn } from "react-icons/gi";  
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";


export const categories = [
    {
        label:"Beach",
        icon:TbBeach,
        description:"This property is close to beach"
    },
    {
        label:"Windmills",
        icon:GiWindmill,
        description:"This property has Windmills"
    },
    {
        label:"Modern",
        icon:MdOutlineVilla,
        description:"This Property is modern!"
    },
    {
        label:"CountrySide",
        icon:TbMountain,
        description:"This Property is in the CountrySide"
    },
    {
        label:"Pools",
        icon:TbPool,
        description:"This Property has a Pool!"
    },
    {
        label:"Islands",
        icon:GiIsland,
        description:"This Property is on an island"
    },
    {
        label:"Lake",
        icon:GiBoatFishing,
        description:"This Property is close to a Lake"
    },
    {
        label:"Skiing",
        icon:FaSkiing,
        description:"This Property has Skiing activities"
    },
    {
        label:"Castles",
        icon:GiCastle,
        description:"This Property is in a castle!"
    },
    {
        label:"Camping",
        icon:GiForestCamp,
        description:"This Property has Camping activities"
    },
    {
        label:"Arctic",
        icon:BsSnow,
        description:"This Property is in the Arctic"
    },
    {
        label:"Cave",
        icon: GiCaveEntrance ,
        description:"This Property is in a Cave"
    },
    {
        label:"Desert",
        icon: GiCactus ,
        description:"This Property is in the desert!"
    },
    {
        label:"Barns",
        icon: GiBarn ,
        description:" This Property is in the barn"
    },
    {
        label:"Lux",
        icon: IoDiamond ,
        description:"This Property is Luxurious!"
    }
]

const Categories = () => {
    const params= useSearchParams();
    
    const category = params?.get("category");

    const pathname = usePathname();

    const isMainPage = pathname === "/hotels";

    if(!isMainPage) {
        return null;
    }



    return (
       <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((item) => (
                <CategoryBox key={item.label} label={item.label} selected={category === item.label} icon={item.icon}/>
            ))}

        </div>

       </Container>
    );
};

export default Categories;