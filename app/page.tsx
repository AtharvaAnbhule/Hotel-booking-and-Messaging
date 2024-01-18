


import Image from "next/image";
import AuthForm from "./social/(site)/components/AuthForm";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";


export default async function Home(){
 
    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
           <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image alt="Logo" height="48" width="48" className="mx-auto w-auto" src="/images/l.png"/>
            
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your Account</h2>
           </div>
          <AuthForm />
        </div>
    )
}

/** 


import {useState,useEffect,useCallback} from "react";
import {IoIosMusicalNotes, IoMdClose} from "react-icons/io";
import Button from "./components/Button";
import { useRouter } from "next/navigation";
import { FiNavigation } from "react-icons/fi";
import { BiHotel } from "react-icons/bi";

import useLoginModal from "./hooks/useLoginModal";
import useRegisterModal from "./hooks/useRegisterModal";








const Modal = () => {

 
   const router= useRouter();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

   const toggle=useCallback( () => {
       
    

    registerModal.onOpen();

  },[loginModal,registerModal])
    
    return (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
            <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                <div className={`
                translate
                duration-300 
                h-full 
                
                `}>
                    <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-center p-6 rounded-1 justify-center relative border-b-[1px]">
                           

                           
                           <div className="text-lg font-semibold">
                             Navigating Panel
                           </div>
                        </div>
                        <div className="relative p-6  flex-col font-bold text-2xl">
                           Welcome Back User
                        </div>
                        
                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex flex-col items-center gap-4 w-full">
                            <Button  onClick={() => router.push("/social/users")} outline icon={FiNavigation}  label="Social"  />
                           <Button onClick={() => router.push("/movies")} outline icon={IoIosMusicalNotes} label="Movies"  />
                            <Button onClick={() => router.push("/hotels")} outline icon={BiHotel} label="Hotels"  />
                            <Button onClick={() => router.push("/hotels")}  icon={BiHotel} label="Log In or Sign Up"  />
                            

                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>

        </>
    );
};

export default Modal;
*/

/** 
import axios from "axios";
import { signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import  { useCallback,useState} from "react";
import {FieldValues,SubmitHandler,useForm} from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";


import { toast } from "react-hot-toast/headless";


import {useRouter } from "next/navigation";
import Modal from "./components/modals/Modal";
import Heading from "./components/Heading";
import Input from "./components/inputs/Input";


import { FiNavigation } from "react-icons/fi";
import { IoIosMusicalNotes } from "react-icons/io";
import { BiHotel } from "react-icons/bi";
import useLoginModal from "./hooks/useLoginModal";
import Button from "./components/Button";




const PageModal = () => {
    const router=useRouter();
    const registerModal=useRegisterModal();
    const loginModal=useLoginModal();
    const [isLoading,setIsLoading]= useState(false);

    const handleOnClose = () => {
      router.push("/");
    }

 
    const toggle=useCallback( () => {
       
      loginModal.onClose();

      registerModal.onOpen();

    },[loginModal,registerModal])

    const bodyContent=(
        <div className="flex flex-col gap-4">
             <Heading
             title="Welcome Back"
             
             />
               <Button onClick={() => router.push("/social/users")} outline icon={FiNavigation}  label="Social"  />
               <Button onClick={() => router.push("/movies")} outline icon={IoIosMusicalNotes} label="Movies"  />
               <Button onClick={() => router.push("/hotels")} outline icon={BiHotel} label="Hotels"  />
        </div>


    );

    const footerContent= (
      <div className="flex flex-col gap-4 mt-3">
          <hr />
          <Button
          outline label="Continue with Google" icon={FcGoogle} onClick={ () => signIn("google")} />
            <Button
          outline label="Continue with Github" icon={AiFillGithub} onClick={ () => signIn("github")} />

          <div className="text-neutral-500 text-center mt-4 font-light">          
            <div className="justify-center flex flex-row items-center gap-2">
              <div>
              First time using Airbnb
              </div>
              <div onClick={toggle} className="text-neutral-800 cursor-pointer hover:underline">
              Create an account
              </div>
            </div>
          </div>
      </div>
    )
    return (
        <Modal 
        disabled={isLoading}
        actionLabel="Log In"
        isOpen
        onClose={handleOnClose}
        title="Navigating Panel"
        onSubmit={loginModal.onOpen}
        body={bodyContent}
        />
    );
};


export default PageModal;*/