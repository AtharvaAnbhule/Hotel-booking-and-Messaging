"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import   LiistingCategory  from "./ListCategory";
import { IconBase } from "react-icons";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"),{
    ssr:false
})



interface ListingInfoProps {
    user:SafeUser;
    description:string;
    guestCount:number;
    roomCount:number;
    bathroomCount:number;
   category : {
    icon:any;
    label:string;
   description:string;
} | undefined;
    locationValue:string;

}

const ListingInfo:React.FC<ListingInfoProps> = ({
    user,
    description,
    guestCount,
    roomCount,
    bathroomCount,
    category,
    locationValue,
}) => {
    const { getByValue } = useCountries();
    const coordinates = getByValue(locationValue)?.latlng;
    return (
        <div className="col-span-4  flex flex-col gap-4">
         <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold flex flex-row items-center gap-2">
                <div>Hosted by {user?.name}</div>
                <Avatar 
                src={user?.image}
                />
            </div>
            <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                <div>{guestCount} guests</div>
                <div>{roomCount} rooms</div>
                <div>{bathroomCount} bathrooms</div>
            </div>

         </div>
         <hr />
         {category && (
           
          
               
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-4">
                      <div className="flex flex-col">
                        {category.icon}
                        <div className="text-lg font-semibold">
                            {category.label}
                        </div>
                        <div className="text-neutral-500 font-light">
                           {category.description}
                        </div>
        
                        
                      </div>
        
                    </div>
                </div>
                
          )}
          <hr/>
          <div className="text-lg font-light text-neutral-500">
            {description}
          </div>
          <hr />

      <Map center={coordinates} />
         
        </div>
    );
};



export default ListingInfo;