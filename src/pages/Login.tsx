import React from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";
import { githubLogo, googleLogo } from "../assets";

interface User {
  _id: string;
  name: string | null;
  email: string | null;
  image: string | null;
}

const Login: React.FC = () => {
  const userInfo = useSelector((state: any) => state.bazar.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider.setCustomParameters({ prompt: "select_account" }))
      .then((result) => {
        const user = result.user as User;
        dispatch(
          addUser({
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const githubLogin = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    // Implement GitHub login logic here
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 hover:bg-orange-100 cursor-pointer duration-300"
        >
          <img className="w-8" src={googleLogo} alt="googleLogo" />
          <span className="text-sm text-gray-900"> Sign in with Google</span>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={githubLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 hover:bg-orange-100 cursor-pointer duration-300"
        >
          <img className="w-8" src={githubLogo} alt="githubLogo" />
          <span className="text-sm text-gray-900"> Sign in with Github</span>
        </div>
      </div>

      {userInfo && (
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base w-60 h-12 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      )}

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
        theme="dark"
      />
    </div>
  );
};

export default Login;
