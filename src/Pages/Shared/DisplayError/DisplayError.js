import React from "react";
import { Link, useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();
  // console.error(error);
  return (
    <div className="mx-auto  py-28 dark:bg-slate-800">
      <section className="flex items-center h-full p-16 dark:dark:bg-gray-900 dark:dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:dark:text-gray-600">
              <span className="sr-only">403</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, an unexpected error has occurred.
            </p>
            <p className="mt-4 mb-8 dark:dark:text-red-500">
              {error.statusText || error.message}
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayError;
