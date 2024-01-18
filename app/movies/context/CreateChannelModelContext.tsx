"use client";

import { createContext , useState } from "react";

type ModalState={
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}


export const CreateChannelModelContext = createContext<ModalState | null >(null);

const CreateChannelModelProvider :React.FC<React.PropsWithChildren>=({children}) => {
    const [isOpen,setIsOpen] = useState(false);
    return <CreateChannelModelContext.Provider value={{isOpen,onOpen:}}>
        {children}
    </CreateChannelModelContext.Provider>
}