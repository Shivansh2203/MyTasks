import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center  sm:justify-evenly max-sm:flex-col">
      <div
        className="w-full max-w-md rounded-xl
  border border-white/30
  bg-[#F5F5DC]/60
  p-8 shadow-2xl
  backdrop-blur-xl"
      >
        <h2
          className="mb-6 text-center text-2xl font-semibold  bg-linear-to-r from-green-400 to-green-700
 bg-clip-text text-transparent"
        >
          Login
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-white/20 px-4 py-2 text-gray-800 outline-none focus:ring-2 focus:ring-green-400 placeholder:text-gray-600
            drop-shadow-md
"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md bg-white/20 px-4 py-2 text-gray-800 placeholder:text-gray-600 outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            onClick={() => navigate("/todos")}
            className="
    w-full rounded-md 
    bg-linear-to-r from-green-400 to-green-700
    py-2 font-medium text-white 
    transition 
    hover:from-green-500 hover:to-green-800
  "
          >
            Login
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          New user?{" "}
          <span
            onClick={() => navigate("/register")}
            className="cursor-pointer text-green-700 hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
