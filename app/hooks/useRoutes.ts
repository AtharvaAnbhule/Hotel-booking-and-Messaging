import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle , HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();
    const routes= useMemo(() => [
        {
            label:"Chat",
            href:"/social/conversations",
            icon:HiChat,
            active:pathname  === "/social/conversations" || !!conversationId
        },
        {
            label:"Users",
            href:"/social/users",
            icon:HiUsers,
            active:pathname  === "/social/users"
        },
        {
            label:"Logout",
            href:"#",
            onClick:() => signOut(),
            icon:HiArrowLeftOnRectangle
        }
    ],[pathname,conversationId]);

    return routes;
}
export default useRoutes;