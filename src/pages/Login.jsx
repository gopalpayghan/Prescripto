import React, { use, useState } from "react";

const Login = () => {
  const [state, setState] = useState("sign up");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <form>
      <div className="flex flex-row items-center justify-center pb-30">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-600">
            {state === "sign up" ? "Create Account" : "Login"}
          </h2>
          <p className=" text-gray-500 mb-6">
            Please {state === "sign up" ? "sign up" : "login"} to book an
            appointment!
          </p>

          {/* Name Input */}
          {state === "sign up" && (
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                onClick={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          )}

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              onClick={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              onClick={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition cursor-pointer"
          >
            {state === "sign up" ? "Create Account" : "Login"}
          </button>

          {/* Signup Link */}
          {state === "sign up" ? (
            <p className="text-gray-600 text-center">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setState("login")}
              >
                Login
              </span>
            </p>
          ) : (
            <p className="text-gray-600 text-center">
              Don't have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setState("sign up")}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
