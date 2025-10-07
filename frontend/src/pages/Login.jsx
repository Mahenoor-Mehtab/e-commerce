import React, { useState  ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup} from 'firebase/auth';
import { userDataContext } from "../context/UserContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {serverUrl} = useContext(authDataContext)
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const {getCurrentUser} = useContext(userDataContext)

const handleSignup =async (e)=>{
  e.preventDefault();
  try{
    const result = await axios.post(serverUrl+"/api/auth/login",{
       email , password
    }, {withCredentials:true})
    getCurrentUser();
    navigate('/')
    // console.log(result);
  }catch(error){
      console.log(error.response.data);
  }
}

//! google authentication:
const googleSignup = async ()=>{
  try{
    const response = await signInWithPopup(auth, provider)
    console.log(response);
    const user = response.user;
    let name = user.displayName;
    let email = user.email;
    console.log(name , email);
   const result =  await axios.post(serverUrl+'/api/auth/googlelogin',{
      name , email
    },{withCredentials:true})
    console.log("name and email:",name , email);
    console.log(result);
     getCurrentUser();
    navigate('/')
  }catch(error){

      console.log(error);
  }
}

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      {/* Header */}
      <div
        className="w-full p-4 flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={
            "https://imgs.search.brave.com/nXo8FNCynTGMsn4qgDa0CVStKIkyAkWlwzbeJ4ZF1AA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM2Lzdm/L2NiLzM2N2ZjYmM2/YzM4YTM1OTUzYmZk/M2FiZWY0OTBkNjFk/LmpwZw"
          }
          className="w-[40px]"
          alt="Logo"
        />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>

      {/* Login Heading */}
      <div className="w-full h-[100px] flex flex-col items-center justify-center gap-[10px]">
        <span className="text-[25px] font-semibold">Login</span>
        <span className="text-[16px]">Welcome back to OneCart</span>
      </div>

      {/* Form Container */}
      <div className="max-w-[600px] w-[90%] bg-[#00000025] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center py-8">
        <form className="w-[80%] flex flex-col items-center justify-start gap-[20px]" onSubmit={handleSignup}>
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-[#1f2a2d] border border-[#96969635] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#42656c]"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />

          {/* Password with Eye Toggle */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 pr-10 rounded-lg bg-[#1f2a2d] border border-[#96969635] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#42656c]"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#42656c] hover:bg-[#355056] rounded-lg shadow-md font-semibold"
          >
            Login
          </button>

          {/* Registration link */}
          <div className="text-sm text-gray-300 mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-indigo-400 cursor-pointer hover:underline"
            >
              Register
            </span>

          </div>

           <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer" onClick={googleSignup}>
            <img
              src="https://imgs.search.brave.com/5P06ztng4nUai3vDoY5y6euh1Dhx0-bAS_VePJ_-iSA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZ29vZ2xlLWlj/b25fMTI3MzM3NS0x/MzMwLmpwZz9zZW10/PWFpc19pbmNvbWlu/ZyZ3PTc0MCZxPTgw"
              alt="Google"
              className="h-[40px] w-[30px] rounded-xl m-2"
            />
            Login with Google
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
