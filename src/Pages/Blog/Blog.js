import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="divider text-cyan-500 text-3xl my-12">
        Question & Answers
      </h2>
      <div className="block lg:flex">
        <div className="text-center py-3">
          <ul className="steps steps-horizontal lg:steps-vertical text-xl my-6 ">
            <li className="step hover:step-primary  hover:text-cyan-400">
              Manage State
            </li>
            <li className="step hover:step-primary hover:text-cyan-400">
              Prototypical Inheritance
            </li>
            <li className="step hover:step-primary hover:text-cyan-400">
              Unit Test
            </li>
            <li className="step hover:step-primary hover:text-cyan-400">
              React vs Angular vs Vue
            </li>
          </ul>
        </div>
        <div className="w-full text-left lg:w-9/12">
          <div>
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
