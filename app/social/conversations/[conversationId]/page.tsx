import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState1 from "../../(site)/components/EmptyState1";

import Body from "./component/Body";
import Form from "./component/Form";
import Header1 from "./component/Header1";


interface IParams {
    conversationId:string;
}
const ConversationId = async ({ params } : { params : IParams}) => {
    const conversation=await getConversationById(params.conversationId);
    const messages= await getMessages(params.conversationId);
    if(!conversation){
        return (
            <div className="lg:pl-80 h-full">
                <div className="h-full flex flex-col">
                    <EmptyState1 />
                </div>
            </div>
        );
    }
    return (
        <div className="lg:pl-80  h-full">
             <div className="h-full flex flex-col">
                 <Header1 conversation={conversation}/>
                 <Body initialMessages={messages}/>
                 <Form />
             </div>
        </div>
    );
};
export default ConversationId;