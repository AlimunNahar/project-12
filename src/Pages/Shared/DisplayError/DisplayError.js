import React from "react";
import { Link, useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();
  // console.error(error);
  return (
    <div className="mx-auto pb-80 bg-black">
      <section className="flex items-center h-full bg-black dark:dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <img
              src="https://media.moddb.com/images/articles/1/283/282292/MOSHED-2020-2-20-22-48-16.gif"
              alt="error_gif"
            />
            <h2 className="mb-8 font-extrabold text-8xl dark:dark:text-gray-600">
              {error.status}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, an unexpected error has occurred.
            </p>
            <p className=" text-lg mt-4 mb-8 dark:dark:text-red-500">
              {error.statusText || error.message}
            </p>
            <Link to="/" className="px-8 py-3 font-semibold rounded bg-primary">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayError;
