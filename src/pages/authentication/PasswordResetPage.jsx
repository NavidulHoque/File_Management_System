/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Bounce } from 'react-toastify';

const PasswordReset = ({ toast }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const handlePasswordReset = (e) => {
    e.preventDefault()
    setLoading(true)

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!", {
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
      })
      .catch((error) => {
        toast.error("Error sending password reset email. Please try again.", {
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
  };

  return (
    <form onSubmit={handlePasswordReset} className="flex flex-col gap-y-4 w-full font-robotoRegular">
      <h2 className="text-[20px] font-robotoBold">Reset Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        className="border-black border-[2px] outline-none px-[5px] py-2 text-[18px] rounded-md w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button
        type="submit"
        className="hover:bg-black bg-[rgb(50,50,50)] text-white rounded-md py-2"
        disabled={loading}
      >
        {loading ? <BeatLoader color="#fff" size={5} /> : "Send Password Reset Email"}
      </button>
    </form>
  );
};

export default PasswordReset;
