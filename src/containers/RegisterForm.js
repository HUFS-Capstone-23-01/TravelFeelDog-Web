import { useContext } from "react";
import { UserContext } from "./AuthProvider";
import axios from "axios";

const RegisterForm =  ({ setRegisterFormOpen }) => {
  const { setUser } = useContext(UserContext);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`nickname :${event.target.nickname.value}`);
    
    axios.post(`/api/member`, {
        "nickName" : event.target.nickname.value,
        "firebaseToken" : sessionStorage.getItem('token')
    })
    .then((res) => {
        if(res.status === 200) {
            const user = res.body;
            setUser(user);
            console.log(user);
        } else if (res.status === 500) {
            const data = res.body;
            if(data === null) {
                console.log("닉네임 양식 오류");
            } 
        } 
    })
    .catch((err) => {
        console.log(err);
        alert("회원가입 실패");
    })

    setRegisterFormOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='nickname'>
             Enter your nickname
        </label>
        <input className='nickname' type="text" name="nickname" />
        <input className='signup' type="submit" value="Sign up" />
      </form>
    </div>
  );
}

export default RegisterForm;