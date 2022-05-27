import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { AuthContextType ,LayoutPropType,UserType} from "../types";
import {auth,db} from "../firebase"
import { useNavigate } from "react-router-dom";
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider=({children}:LayoutPropType)=>{
    const navigate=useNavigate();
    const localStorageToken=JSON.parse(localStorage.getItem("auth") || '{}' );
    const [token,setToken]= useState<string>(localStorageToken?.token);
    const [userId,setUserId] = useState<string>(localStorageToken?.userId);
    const [user,setUser]= useState<UserType>({
        name:'',
        email:''
    })

    const loginHandler=async(email:string,password:string)=>{
        try{
           const response= await signInWithEmailAndPassword(auth,email,password);
            const user:any= response?.user;
            setToken(user?.accessToken);
            setUserId(user?.uid);
            localStorage.setItem("auth", JSON.stringify({token:user?.accessToken,userId:user?.uid}))
            navigate("/");
        }
        catch(err){
            console.error(err);
        }
    }
    const signupHandler=async(name:string,email:string,password:string)=>{
        try{
            const response= await createUserWithEmailAndPassword(auth,email,password);
            const user:any= response?.user;
            setToken(user?.accessToken);
            setUserId(user?.uid);
            localStorage.setItem("auth", JSON.stringify({token:user?.accessToken,userId:user?.uid}))
            navigate("/");
        }
        catch(err){
            console.error(err)
        }
    }
    const logoutHandler=()=>{
        try{
            signOut(auth);
            localStorage.removeItem("auth");
            setToken('');
            setUserId('');
            navigate("/");
        }
        catch(err){
            console.error(err);
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