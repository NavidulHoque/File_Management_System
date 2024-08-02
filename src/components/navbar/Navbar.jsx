import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import { LogOut } from "../../features/slices/userLoginSlice";

const Navbar = () => {
  const user = useSelector((state) => state.UserLogin.user);
  const dispatch = useDispatch();
  const auth = getAuth();
  const location = useLocation()
  console.log(location)

  function handleLogOut() {
    signOut(auth)
      .then(() => {
        toast.success("Successfully logged out", {
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

        dispatch(LogOut())
      })
      .catch(() => {
        toast.error("Try again to log out", {
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
      });
  }

  return (
    <nav className="bg-[rgb(40,40,40)] text-white h-[20vh] sm:h-[12vh]">

      <div className="w-[90vw] mx-auto flex sm:flex-row flex-col items-center justify-center sm:justify-between h-full gap-y-3">

        <h1 className="font-semibold text-[24px]">File Management System</h1>

        {user ? (

          <div className="flex items-center gap-x-3">

            <p className="text-[20px] pr-[10px]">

              Hello <span className="text-amber-400">{user.displayName}</span>

            </p>

            {location.pathname === "/dashboard" ? (

              <Link
                to="/"
                className="rounded-md p-[10px] bg-[#9b59b6] hover:bg-[#8e44ad]"
              >
                Home
              </Link>

            ) : (

              <Link
                to="/dashboard"
                className="rounded-md p-[10px] bg-[#9b59b6] hover:bg-[#8e44ad]"
              >
                Dashboard
              </Link>

            )}

            <button
              onClick={handleLogOut}
              className="rounded-md p-[10px] bg-[#1abc9c] hover:bg-[#16a085]"
            >
              Log Out
            </button>

          </div>

        ) : (

          <div className="flex gap-x-3">

            <Link
              to="/login"
              className="rounded-md p-[10px] bg-[#9b59b6] hover:bg-[#8e44ad]"
            >
              Login
            </Link>

            <Link
              to="/registration"
              className="rounded-md p-[10px] bg-[#1abc9c] hover:bg-[#16a085]"
            >
              Register
            </Link>

          </div>

        )}

      </div>

    </nav>
  )
}

export default Navbar;
