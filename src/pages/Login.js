import React from "react";
import { FaGoogle } from "react-icons/fa";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/khenSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      dispatch(
        addUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
      );
      setTimeout(() => {
        navigate("/");
      }, 100);
    });
  };
  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast.success("Log Out Succesfully");
      dispatch(removeUser());
    });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img
            className="w-8"
            src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <span className="text-sm text-gray-900">Sign in with Google </span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out{" "}
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
