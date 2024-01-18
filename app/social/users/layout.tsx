import getUsers from "@/app/actions/getUsers";
import  Sidebar1  from "@/app/components/Sidebar1";
import UserList from "./components/UserList";

export default async function UsersLayout({
    children
}:{
    children:React.ReactNode;
}){
    const users = await getUsers();
    return (
        <Sidebar1>
        <div className="h-full">
            <UserList items={users}/>
            {children}
        </div>
        </Sidebar1>
    )
}