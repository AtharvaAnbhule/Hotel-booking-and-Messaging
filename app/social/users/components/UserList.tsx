
"use client";
import { User } from "@prisma/client";
import UserBox from "./UserBox";
import Input1 from "@/app/components/Input1";
import Input from "@/app/components/inputs/Input";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";



interface UserListProps{
    items:User[]
}
const UserList:React.FC<UserListProps> = ({items}) => {
   const [query,setQuery]= useState("");
   
   const filtereditems= getFilteredItems(query,items);
    return (
        <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
            <div className="px-5">
                <div className="flex-col">
                    <div className="text-2xl font-bold text-neutral-800 py-4">
                       Users All Around
                    </div>
                    <div className="text-black">
                    <input onChange={e => setQuery(e.target.value)}  type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border-none" placeholder="Search" />
                    </div>
                </div>
                {!query? <>{items.map((item) => (
                    <UserBox key={item.id} data={item}/>
                ))}</>
                : <>{filtereditems.map((value:any) =><UserBox key={value.key} data={value}/>)}</>}
            </div>
        </aside>
    );
};
const getFilteredItems = (query:any,items:any)  =>{
    if(!query){
        return items;
    }
    return items.filter((song:any) => song.name.include(query))
}
export default UserList;