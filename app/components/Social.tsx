import { useRouter } from "next/navigation";
import Button from "./Button";
import { FiNavigation } from "react-icons/fi";
import { IoIosMusicalNotes } from "react-icons/io";
import "./Social.css";


const Social = () => {
    const router=useRouter();
    return (
        <div className="h z-index-inherit sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <div className="h">
            <Button onClick={() => router.push("/social/users")} outline icon={FiNavigation}  label="Social"  />
            <Button onClick={() => router.push("/movies")} outline icon={IoIosMusicalNotes} label="Movies"  />
            </div>
        </div>
    );
};

export default Social;