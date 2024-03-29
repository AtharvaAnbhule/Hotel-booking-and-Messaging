import getCurrentUser from "../actions/getCurrentUser";
import DekstopSidebar from "./DekstopSidebar";
import MobileFooter from "./MobileFooter";

 async function Sidebar1({children}:{children:React.ReactNode}){
    const currentUser=await getCurrentUser();
    return (
        <div className="h-full">
            <DekstopSidebar currentUser={currentUser!}/>
            <MobileFooter />
            <main className="lg:pl-20 h-full">
             {children}
            </main>
        </div>
    );
};
export default Sidebar1;