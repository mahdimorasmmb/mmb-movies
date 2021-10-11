import React, { useState } from "react";
import { useHistory } from "react-router";
import accountAction from "../../store/actions/accountAction";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <div className=" flex justify-center items-center bg-transparent py-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          accountAction.login({ userName, password, history });
        }}
        className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-gray-600 mb-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name="email"
          className="mb-5 p-3 w-80 focus:border-greenHl rounded border-2 outline-none"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          className="mb-5 p-3 w-80 focus:border-greenHl rounded border-2 outline-none"
          placeholder="Password"
        />
        <button
          className="bg-greenHl hover:bg-greenHd text-white font-bold p-2 rounded w-80"
          id="login"
          type="submit"
        >
          <span>Login</span>
        </button>
      </form>
    </div>
  );
}
