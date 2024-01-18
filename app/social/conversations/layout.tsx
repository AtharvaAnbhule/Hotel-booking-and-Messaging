import Sidebar1 from "@/app/components/Sidebar1"
import ConversationList from "./components/ConversationList"
import getConversations from "@/app/actions/getConversations"
import getUsers from "@/app/actions/getUsers";

export default async function ConversationsLayout({
    children
}:{
    children:React.ReactNode
}){
    const conversations = await getConversations();
    const Users=await getUsers();
    return (
        <Sidebar1>
            <div className="h-full">
                <ConversationList initialItems={conversations} users={Users}/>
                {children}
            </div>
        </Sidebar1>
    )
}