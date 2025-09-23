import { Link, Outlet, useNavigate } from "react-router";
// import { ModeToggle } from "./mode.toggle";
import Logo from "@/assets/icons/Logo.png"
import { useLogoutMutation } from "@/Redux/features/auth/auth.api";
import { useDispatch } from "react-redux";
import { baseApi } from "@/Redux/baseApi";

export default function ReceiverLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout({}).unwrap();
      dispatch(baseApi.util.resetApiState());
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r shadow-sm flex flex-col">
        <div className="p-6 flex items-center gap-2 border-b">
          <img className="w-12 h-12" src={Logo} alt="" />
        </div>

        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/receiver/parcel/history"
                className="block px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                Delivery History
              </Link>
            </li>
            <li>
              <Link
                to="/receiver/parcels"
                className="block px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                My Parcels
              </Link>
            </li>
            <li>
              <Link
                to="/receiver/track"
                className="block px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                Track Parcel
              </Link>
            </li>
            <li>
              <Link
                to="/receiver/profile"
                className="block px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/receiver/settings"
                className="block px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                Settings
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/"
                className="block px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-6 border-t flex flex-col gap-2">
          <button
            disabled={isLoading}
            onClick={handleLogout}
            className="bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-primary/90 disabled:opacity-50"
          >
            {isLoading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex justify-between items-center px-6 py-4 border-b bg-muted text-foreground">
          <h1 className="text-xl font-semibold">
            Receiver Dashboard
          </h1>
          <div className="flex items-center gap-4">
            {/* <ModeToggle /> */}
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}