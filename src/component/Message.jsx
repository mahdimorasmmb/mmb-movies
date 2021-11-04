import React from "react";

export default function Message({ message, isActive, type }) {
  const show = isActive === "" && type === "" ? "" : "hidden";
  return (
    <div
      className={` hover:opacity-100 cursor-pointer ${show}   opacity-90 fixed   top-1/2 left-1/3 z-50 text-center mt-2`}
    >
      <div
        className="p-4 bg-greenHd rounded-full items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-greenHl uppercase p-4 text-xs font-bold mr-3">
          New
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          {message}
        </span>
      </div>
    </div>
  );
}

// <Snackbar
//       classNamees={{
//         paper: classNamees.alert,
//       }}
//       open={open}
//       autoHideDuration={6000}
//     >
//       <Alert variant="filled" severity={severity}>
//         <AlertTitle>{severity}</AlertTitle>
//         This is an message alert — <strong>{message}</strong>
//       </Alert>
//     </Snackbar>
