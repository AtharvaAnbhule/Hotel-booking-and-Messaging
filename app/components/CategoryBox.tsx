"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
    icon:IconType;
    label:string;
    selected?:boolean
}


const CategoryBox:React.FC<CategoryBoxProps> = ({
    icon:Icon,
    label,
    selected
}) => {

    const router=useRouter();
    const params=useSearchParams();

    const handleClick = useCallback (() => {
                 let currentQuery = {};

                 if(params){
                    currentQuery = qs.parse(params.toString()); // combine all the kind of parameters
                 }

                 const updatedQuery : any = {
                    ...currentQuery,
                    category:label, // this goes in url
                 }

                 if(params?.get("category") === label){
                    delete updatedQuery.category; // if after selecting again click on it it deselects it
                 }

                 const url = qs.stringifyUrl({
                    url:"/hotels/",
                    query:updatedQuery
                 },{skipNull:true});

                 router.push(url);

    },[label,params,router])

    return (
        <div 
        onClick={handleClick}
        className={` flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}

        `}>
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}

            </div>


        </div>
    );
};





export default CategoryBox;