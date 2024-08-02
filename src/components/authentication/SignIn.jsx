/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { signIn } from "../../validation/validation";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Bounce } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../features/slices/userLoginSlice";
import { storeID } from "../../features/slices/setTimeOutSlice";

const SignIn = ({ toast }) => {
  const email = useSelector((state) => state.UserLogin.user.email);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const navigate = useNavigate();
  const auth = getAuth();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => signInCurrentUser(),
    validationSchema: signIn,
  });

  function signInCurrentUser() {
    setLoading(true);

    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(({ user }) => {
        if (user.emailVerified) {
          toast.success("Successfully Logged In", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

          setLoading(false);

          dispatch(
            LogIn({
              id: user.uid,
              email: user.email,
              displayName: user.displayName,
            })
          );

          const timeOutID = setTimeout(() => {
            navigate("/");
          }, 2500);

          dispatch(storeID(timeOutID));
        } else {
          toast.error("Verify your email first", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

          setLoading(false);
        }
      })

      .catch(() => {
        toast.error("Invalid email or password", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        setLoading(false);
      });
  }

  function handleSendPasswordResetEmail() {
    setLoading2(true)

    sendPasswordResetEmail(auth, email)
      .then(() => {

        toast.success("Password reset email sent", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        setLoading2(false)
      })

      .catch(() => {

        toast.error("Password reset email sending failed", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        setLoading2(false)
      })
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-start gap-y-4 w-full font-robotoRegular"
    >
      <h2 className="text-[20px] font-robotoBold">
        Sign In and Explore the System
      </h2>

      <input
        type="email"
        placeholder="enter your email"
        className="border-black border-[2px] outline-none px-[5px] py-2 text-[18px] rounded-md w-full"
        value={formik.values.email}
        onChange={formik.handleChange}
        name="email"
      />

      {formik.errors.email && formik.touched.email && (
        <p className="text-red-500">{formik.errors.email}</p>
      )}

      <input
        type="password"
        placeholder="enter your password"
        className="border-black border-[2px] outline-none px-[5px] py-2 text-[18px] rounded-md w-full"
        value={formik.values.password}
        onChange={formik.handleChange}
        name="password"
      />

      {formik.errors.password && formik.touched.password && (
        <p className="text-red-500">{formik.errors.password}</p>
      )}

      <span
        onClick={handleSendPasswordResetEmail}
        className="text-blue-600 underline cursor-pointer justify-self-start"
        disabled={loading2}
      >
        {loading2 ? <BeatLoader className="text-blue-600" size={5} /> : "Forget Password?"}
      </span>

      <button
        type="submit"
        className="hover:bg-black bg-[rgb(50,50,50)] text-white rounded-md py-2 w-full"
        disabled={loading}
      >
        {loading ? <BeatLoader color="#fff" size={5} /> : "Sign In"}
      </button>

      <p className="text-slate-500">
        Don't have an account?
        <Link to="/registration" className="text-blue-600 underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
