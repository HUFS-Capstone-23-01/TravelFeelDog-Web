import React, { useEffect, useState } from "react";
import { auth } from "../auth/firebaseAuth";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext( null );
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
        if(firebaseUser) {
            const token = await firebaseUser.getIdToken();
            const nickname = await firebaseUser.displayName;
            sessionStorage.setItem('token',token);
            sessionStorage.setItem('nickname',nickname);
            axios.get(`/api/member`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                const user = res.data.body;
                if(res.data.header.status === 200) {
                    setUser(user);
                    navigate("/");
                } else if (res.data.header.status === 500) {
                    navigate("/RegisterForm");
                }
                
            })
            .catch((err) => {
                console.log(err);
                alert("로그인 실패");
            }) 
            
        } else {
            setUser(null);
        } 
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
  );
};