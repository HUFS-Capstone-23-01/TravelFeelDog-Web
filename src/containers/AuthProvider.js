import React, { useEffect, useState } from "react";
import { auth } from "../auth/firebaseAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext( null );
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
        if(firebaseUser) {
            const token = await firebaseUser.uid;
            sessionStorage.setItem('token',token);
            axios.get(`/api/member`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                const user = res.data.body;
                console.log("로그인 성공");
                if(res.data.header.status === 200) {
                    setUser(user);
                    navigate("/");
                } else if (res.data.header.status === 500) {
                    navigate("../pages/RegisterPage");
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