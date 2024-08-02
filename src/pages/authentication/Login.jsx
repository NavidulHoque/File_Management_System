import Lottie from "lottie-react";
import LoginAnimation from "../../animation/LoginAnimation.json";
import SignIn from "../../components/authentication/SignIn";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast  } from "react-toastify";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <ToastContainer />

            <div className="flex justify-center items-center h-screen">

                <div className="flex gap-x-7 w-[700px]">

                    <div className="w-[48%]">

                        <Lottie animationData={LoginAnimation} loop={true} />

                    </div>

                    <div className="w-[48%] flex items-center">

                        <SignIn toast={toast} />

                    </div>

                </div>

            </div>
        </>
    );
};

export default Login;
