"use client";
import clsx from "clsx";
import useConversation from "@/app/hooks/useConversation";
import EmptyState1 from "../(site)/components/EmptyState1";
const Home = () => {
    const { isOpen } = useConversation();
    return (
        <div className={clsx("lg:pl-80 h-full lg:block",
        isOpen ? "block" : "hidden"
        )}>
            <EmptyState1 />
        </div>
    );
};
export default Home;