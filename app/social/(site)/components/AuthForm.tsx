"use client";
import Button2 from "@/app/components/Button2";
import Input1 from "@/app/components/Input1";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import Button from "@/app/components/Button";
import { FiNavigation } from "react-icons/fi";
import { IoIosMusicalNotes } from "react-icons/io";
import { User } from "@prisma/client";




type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
    const session=useSession();
    const [variant,setVariant] = useState<Variant>("LOGIN");
    const loginModal = useLoginModal();
    const router=useRouter();
   
    const [isLoading,setIsLoading] =useState(false);
    useEffect(() => {
          if(session?.status === "authenticated"){
            router.push("/");
          }
    },[session?.status,router]);
    const toggleVariant= useCallback(() => {
      if(variant === "LOGIN"){
        setVariant("REGISTER");
      }else{
        setVariant("LOGIN");
      }
    },[variant]);
    const {register,handleSubmit,formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:"",
        }
    });
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if(variant === "REGISTER"){
            axios.post("/api/register",data)
            .then(() => signIn("credentials",data))
            .catch(() => toast.error("Something went Wrong!"))
            .finally( () => setIsLoading(false))
        }
        if(variant === "LOGIN"){
            signIn("credentials",{
                ...data,
                redirect:false
            })
            .then( (callback) => {
                if(callback?.error){
                    toast.error("Invalid credentials");
                }
                if(callback?.ok && !callback?.error){
                    toast.success("Logged In");
                    router.push("/");
                }
            })
            .finally( () => setIsLoading(false));
        }
    }
    const socialAction = (action:string) => {
        setIsLoading(true);
        signIn(action,{redirect:false})
        .then( (callback) => {
             if(callback?.error){
                toast.error("Invalid credentials");
             }
             if(callback?.ok && !callback?.error){
                toast.success("Logged in");
             }
        })
        .finally ( () => setIsLoading(false));
    }
     return ( 
        
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"> 
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}/** to get data from react hook form */>
                 {variant === "REGISTER" && (
                   <Input1 id="name" label="Name" register={register} errors={errors} disabled={isLoading}/>
                 )}
                 <Input1 id="email" label="Email address" type="email" register={register} errors={errors} disabled={isLoading} />
                 <Input1 id="password" label="Password" type="password" register={register} errors={errors} disabled={isLoading} />
                 <div>
                    <Button2 disabled={isLoading} fullWidth type="submit">{variant === "LOGIN" ? "Sign in" : "Register"}</Button2>
                </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                           <div
                            className="w-full
                             border-t 
                             border-gray-300"
                            />
                        </div>
                        <div className="relative flex justify-center text-sm">
                             <span className="bg-white px-2 text-gray-500">
                                Or continue with
                             </span>
                        </div>
                    </div>
                 <div className="mt-6 flex gap-2">
                    <AuthSocialButton icon={BsGithub} onClick={() => socialAction("github")}/>
                    <AuthSocialButton icon={BsGoogle} onClick={() => socialAction("google")}/>
                 </div>

                </div>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <div>
                        {variant === "LOGIN" ? "New to Messenger!" : "Already have an account"}
                    </div>
                    <div onClick={toggleVariant} className="underline cursor-pointer">
                        {variant === "LOGIN" ? "Create an account" : "Login"}
                    </div>
                </div>
                <div className="relative m-4">
                        <div className="absolute inset-0 flex items-center ">
                           <div
                            className="w-full
                             border-t 
                             border-gray-300 "
                            />
                        </div>
                        <div className="relative flex justify-center text-sm">
                             <span className="bg-white px-2 text-gray-500">
                               Navigate to
                             </span>
                        </div>
                    </div>
                <div className="mt-6 flex gap-2">
                    <AuthSocialButton icon={FiNavigation}  onClick={() => router.push("/social/users")}/>
                    <AuthSocialButton icon={IoIosMusicalNotes} onClick={()=>router.push("/movies")}/>
                 </div>

            </div>
        </div>
        
       
       
     );
};
export default AuthForm;