import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import accountAction from "../../store/actions/accountAction";
import errorMessageAction from "../../store/actions/errorMessageAction";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const error = useSelector((state) => state.error);
  const show = error?.isActive === "" && error.type === "login" ? "" : "hidden";
  console.log(error.message);
  const message =
    error.message === 401 ? "Username and Password not Valid" : error.message;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (userName && password) {
          accountAction.login({
            userName,
            password,
            history,
          });
        } else {
          errorMessageAction.setErrorLogin("Enter Username and Password ");
        }
      }}
      className="container h-full mb-14 mt-9 flex flex-col lg:flex-row justify-center lg:justify-center font-sans mx-auto py-5"
    >
      <div className=" h-full   lg:w-1/3 px-2 mb-6 lg:mb-0">
        <div className="bg-greenHl shadow rounded-lg">
          <div className="border-b border-grey-lighter p-4">
            <h3 className="text-gray-200">Access to</h3>
          </div>
          <div className="p-8">
            <span
              className={`text-md text-center text-red-500 font-bold  ${show}`}
            >
              {`@@${message}@@`}
            </span>
            <div className="mb-4">
              <label
                for="email"
                className="uppercase text-sm tracking-wide font-semibold text-gray-200 px-2"
              >
                Email
              </label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                id="email"
                className="no-appearance font-bold text-xl focus:bg-greenHd focus:text-gray-200 bg-gray-400 w-full leading-normal py-2 px-3 rounded border-b border-gray-100 mt-2 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                for="password"
                className="uppercase text-sm tracking-wide font-semibold text-gray-200 px-2"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="no-appearance font-bold text-xl focus:bg-greenHd  focus:text-gray-200 bg-gray-400 w-full leading-normal py-2 px-3 rounded border-b border-grey-light mt-2 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="uppercase font-bold w-full bg-gray-200 text-lg text-blue-lightest rounded-b-lg p-3 hover:bg-greenHd hover:text-gray-200"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
