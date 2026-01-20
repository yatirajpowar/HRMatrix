import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-violet-100 via-blue-50 to-white 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      {/* LEFT SIDE – BRANDING */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative overflow-hidden">
        <div className="absolute w-80 h-80 bg-violet-400 opacity-20 rounded-full -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-blue-400 opacity-10 rounded-full bottom-10 right-10"></div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.0, ease: "easeOut" }}

          className="z-10 text-center px-10"
        >
          {/* LOGO */}
          {/* <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-violet-600 text-white rounded-2xl 
                            flex items-center justify-center text-2xl font-bold shadow-lg">
          
            </div>
          </div> */}

          <h1 className="text-4xl font-bold text-violet-700 dark:text-violet-400 mb-4">
            HRMatrix!!
          </h1>

          <p className="text-gray-600 dark:text-gray-400">
            Smart HRM • Secure Access • Corporate Control
          </p>
        </motion.div>
      </div>

      {/* RIGHT SIDE – LOGIN FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}

          className="w-full max-w-lg bg-white dark:bg-gray-900 
                     shadow-2xl rounded-3xl p-10"
        >
          {/* MOBILE LOGO */}
          <div className="md:hidden flex justify-center mb-4">
            <div className="w-14 h-14 bg-violet-600 text-white rounded-2xl 
                            flex items-center justify-center text-xl font-bold">
              HR
            </div>
          </div>

          <h2 className="text-center text-2xl font-bold text-violet-700 dark:text-violet-400 mb-2">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Sign in to continue
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
           rounded-xl bg-transparent
           text-gray-900 dark:text-white
           placeholder-gray-400 dark:placeholder-gray-500
           focus:outline-none focus:ring-2 focus:ring-violet-500"

              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
               className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
           rounded-xl bg-transparent
           text-gray-900 dark:text-white
           placeholder-gray-400 dark:placeholder-gray-500
           focus:outline-none focus:ring-2 focus:ring-violet-500"

              />
            </div>

            {/* FORGOT PASSWORD */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-violet-600 hover:underline dark:text-violet-400"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-3 rounded-xl 
                         font-semibold text-lg hover:bg-violet-700 
                         transition duration-200"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
