import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType ,LayoutPropType,UserType} from "../types";
import {auth,db} from "../firebase"
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useData } from "./data-context";
import { async } from "@firebase/util";
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider=({children}:LayoutPropType)=>{
    const navigate=useNavigate();
    const {setLoader} = useData();
    const localStorageToken=JSON.parse(localStorage.getItem("auth") || '{}' );
    const [token,setToken]= useState<string>(localStorageToken?.token);
    const [userId,setUserId] = useState<string>(localStorageToken?.userId);
    const [user,setUser]= useState<UserType>(localStorageToken?.user);

    const loginHandler=async(email:string,password:string)=>{
        setLoader(true);
        try{
           const response= await signInWithEmailAndPassword(auth,email,password);
            const user:any= response?.user;
            localStorage.setItem("auth", JSON.stringify({token:user?.accessToken,userId:user?.uid,
                user:{name:user?.displayName,email:user?.email}}));
            setToken(user?.accessToken);
            setUserId(user?.uid);
            setUser({name:user?.displayName,email:user?.email});
            navigate("/");
        }
        catch(err){
            console.error(err);
        }
        finally{
            setLoader(false);
        }
    }
    const signupHandler=async(name:string,email:string,password:string)=>{
        setLoader(true);
        try{
            const response= await createUserWithEmailAndPassword(auth,email,password);
            const user:any= response?.user;
            await updateProfile(user,{displayName:name});
            setToken(user?.accessToken);
            setUserId(user?.uid);
            setUser({name:user?.displayName,email:user?.email});
            localStorage.setItem("auth", JSON.stringify({token:user?.accessToken,userId:user?.uid,
                user:{name:user?.displayName,email:user?.email}}))
            navigate("/");
        }
        catch(err){
            console.error(err)
        }
        finally{
            setLoader(false);
        }
    }
    const logoutHandler=async()=>{
        setLoader(true);
        try{
            await signOut(auth);
            localStorage.removeItem("auth");
            setToken('');
            setUserId('');
            setUser({name:'',email:''});
            navigate("/");
        }
        catch(err){
            console.error(err);
        }
        finally{
            setTimeout(()=>setLoader(false),1000);
        }
    }

    return(
        <AuthContext.Provider value={{token,setToken,user,setUser,loginHandler,signupHandler,logoutHandler,userId,setUserId}}>
        {children}
        </AuthContext.Provider>
    );
}

const useAuth=()=>useContext(AuthContext);

export {AuthProvider,useAuth}