import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { pathname } = useLocation();

  const navLinkClasses = (path) =>
    `btn btn-ghost btn-sm gap-2 px-3 rounded-lg ${
      pathname === path ? "bg-primary text-white" : "hover:bg-base-300"
    } transition-colors transition-all duration-[300ms] ease-in-out`;

  return (
    <header className="border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/60 shadow-sm">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-primary hover:opacity-90 transition-all"
          >
            <div className="size-9 rounded-lg bg-primary/20 flex items-center justify-center shadow-sm">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold tracking-wide">Chatty</h1>
          </Link>

          {/* Right Side Nav */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/settings" className={navLinkClasses("/settings")}>
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser ? (
              <>
                <Link to="/profile" className={navLinkClasses("/profile")}>
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  onClick={logout}
                  className="btn btn-error btn-sm gap-2 px-3 hover:scale-102 transition-transform"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>

                {/* Optional Avatar */}
                <Link to="/profile">
                  <img
                    src={authUser?.profilePic || "/avatar.png"}
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover hover:scale-103 transition-transform"
                  />
                </Link>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary btn-sm">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
