import React from "react";

function Login() {
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Pass */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                name="email"
                placeholder="Password"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              />
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not Registered? {""}
                <span className="underline text-blue-500 cursor-pointer">Sign Up</span>{""}
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
