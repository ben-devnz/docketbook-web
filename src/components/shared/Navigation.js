import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useUserData } from "../../hooks/useUserData";
import { Link } from "react-router-dom";
function Navigation() {
  const [user] = useAuthState(auth);
  const { userData, loading } = useUserData(user?.uid);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // if loading is true show the load div
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    // Up to here, need to render the navigation component
    <nav className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Left side brand */}
          <div className='flex items-center'>
            <Link to='/dashboard' className='text-2xl font-bold text-gray-800'>
              DocketBook
            </Link>
          </div>

          {/* Right side links */}
          <div className='flex items-center space-x-6'>
            <Link
              to='/dashboard'
              className='text-gray-600 hover:text-gray-900 font-medium'
            >
              Dashboard
            </Link>
            <Link
              to='/orders'
              className='text-gray-600 hover:text-gray-900 font-medium'
            >
              Orders
            </Link>
            <Link
              to='/profile'
              className='text-gray-600 hover:text-gray-900 font-medium'
            >
              Profile
            </Link>

            {/* User info + logout */}
            <div className='flex items-center gap-3'>
              <span className='text-gray-600'>
                {userData?.name || user?.email}
              </span>
              <button
                onClick={handleLogout}
                className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
