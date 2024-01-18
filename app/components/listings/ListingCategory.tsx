"use client";

import { IconType } from "react-icons";

interface ListingCategoryProps {
    icon:IconType;
    label:string;
    description:string;

}

const ListingCategory:React.FC<ListingCategoryProps> = ({
    icon:Icon,
    label,
    description
}) => {
    return (
       
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col">
                <Icon size={28} />
                <div className="text-lg font-semibold">
                    {label}
                </div>

                
              </div>

            </div>
        </div>
        
    );
};
export default ListingCategory;