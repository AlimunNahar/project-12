import React from "react";
import { BsPatchQuestionFill } from "react-icons/bs";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useTitle from "../../Hooks/useTitle";
import Navbar from "../Shared/Navbar/Navbar";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <Navbar />
      <div className="mb-16">
        <h2 className="divider text-cyan-500 text-3xl my-12">
          Question & Answers
        </h2>
        <div className="block lg:flex gap-x-5">
          <div className="text-center py-3 pl-5 pr-5">
            <ul className="steps steps-horizontal lg:steps-vertical text-xl my-6 ">
              <li className="step hover:step-primary  hover:text-cyan-400">
                <AnchorLink href="#state">Manage State</AnchorLink>
              </li>
              <li className="step hover:step-primary hover:text-cyan-400">
                <AnchorLink href="#prototype">
                  Prototypical Inheritance
                </AnchorLink>
              </li>
              <li className="step hover:step-primary hover:text-cyan-400">
                <AnchorLink href="#unit-test">Unit Test</AnchorLink>
              </li>
              <li className="step hover:step-primary hover:text-cyan-400">
                <AnchorLink href="#diff">React vs Angular vs Vue</AnchorLink>
              </li>
            </ul>
          </div>
          <div className="w-full px-5 lg:ml-10 lg:mr-5 text-left lg:w-9/12">
            {/* que-1 */}
            <div id="state" className="text-justify">
              <h2 className="text-2xl py-5 text-cyan-600 flex">
                <span className="text-3xl mr-3">
                  <BsPatchQuestionFill />
                </span>
                What are the different ways to manage a state in a React
                application?
              </h2>
              <div className="">
                <span className="text-lg text-cyan-100">
                  The Four Kinds of React State to Manage <br />
                </span>
                When we talk about state in our applications, it’s important to
                be clear about what types of state actually matter.
                <br />
                <br />
                There are four main types of state you need to properly manage
                in your React apps:
                <br />
                <br />
                1. Local State <br /> 2. Global State <br /> 3. Server State{" "}
                <br /> 4. URL State
                <br />
                <br />
                <span className="text-lg text-cyan-100">Local (UI) state </span>
                is data we manage in one or another component. Local state is
                most often managed in React using the useState hook.
                <br /> Local state is perhaps the easiest kind of state to
                manage in React, considering there are so many tools built into
                the core React library for managing it. useState is the first
                tool you should reach for to manage state in your components. It
                can take accept any valid data value, including primitive and
                object values. Additionally, its setter function can be passed
                down to other components as a callback function (without needing
                optimizations like useCallback).
                <br />
                useReducer is another option that can be used for either local
                or global state. It is similar in many ways to useState under
                the hood, although instead of just an initial state it accepts a
                reducer. The benefit of useReducer is that it provides a
                built-in way to perform a number of different state operations
                with the help of the reducer function, which makes it more
                dynamic overall than useState.
                <br />
                <br />
                <span className="text-lg text-cyan-100">
                  Global (UI) state{" "}
                </span>
                is data we manage across multiple components.
                <br />
                Global state is necessary when we want to get and update data
                anywhere in our app, or in multiple components at least.
                <br />
                You will reach a point in your application where patterns like
                “lifting state up” and passing callbacks down to update your
                state from components lead to lots and lots of props. Redux is
                also great, but make sure that you get started using Redux
                Toolkit.
                <br />
                <br />
                <span className="text-lg text-cyan-100">Server state </span>
                Data that comes from an external server that must be integrated
                with our UI state.
                <br />
                At first, it seems you just need to fetch data and display it in
                the page. But then you need to display a loading spinner while
                you are waiting for the data. Then you need to handle errors and
                display them to the user as they arise. What happens when there
                is a network error? I need to hit my server every time my user
                visits the home page. I need to add useState and useEffect in
                every component I want to fetch my data.
                <br />
                <br />
                <span className="text-lg text-cyan-100">URL state </span>
                Data that exists on our URLs, including the pathname and query
                parameters. URL state is often missing as a category of state,
                but it is an important one. In many cases, a lot of major parts
                of our application rely upon accessing URL state.
                <br />
                URL state is quite easy to manage, usually through custom hooks
                that give us all the information we need about our location,
                history, and pathname. If you are using React Router, you can
                get all the information you need using useHistory or
                useLocation.
              </div>
            </div>

            {/* que-2 */}
            <div className="divider"></div>
            <div id="prototype" className="text-justify">
              <h2 className="text-2xl py-5 text-cyan-600 flex">
                <span className="text-3xl mr-3">
                  <BsPatchQuestionFill />
                </span>
                How does prototypical inheritance work?
              </h2>
              <div className="">
                JavaScript is a prototype-based, Object Oriented programming
                language. After the ES6 updates, JavaScript allowed for
                “prototypal inheritance”, meaning that objects and methods can
                be shared, extended, and copied.
                <br /> Sharing amid objects makes for easy inheritance of
                structure (data fields), behavior (functions / methods), and
                state (data values).
                <img
                  src="https://www.educative.io/api/page/6187859468877824/image/download/6346760642363392"
                  alt="prototype"
                  className="my-4"
                />
                Simply put, prototypical inheritance refers to the ability to
                access object properties from another object. We use a
                JavaScript prototype to add new properties and methods to an
                existing object constructor. We can then essentially tell our JS
                code to inherit properties from a prototype. Prototypical
                inheritance allows us to reuse the properties or methods from
                one JavaScript object to another through a reference pointer
                function.
                <br />
                All JavaScript objects inherit properties and methods from a
                prototype:
                <br />
                <p className="pl-10 my-3">
                  * Date objects inherit from Date.prototype.
                  <br />
                  * Array objects inherit from Array.prototype.
                  <br />* Player objects inherit from Player.prototype.
                </p>
                The Object.prototype is on top of the prototype inheritance
                chain. ​ Date objects, Array objects, and Player objects all
                inherit from Object.prototype.
                <br />
                <br />
              </div>
            </div>

            {/* que-3 */}
            <div className="divider"></div>
            <div id="unit-test" className="text-justify">
              <h2 className="text-2xl py-5 text-cyan-600 flex">
                <span className="text-3xl mr-3">
                  <BsPatchQuestionFill />
                </span>
                What is a unit test? Why should we write unit tests?
              </h2>
              <div className="">
                Unit testing is a software development process in which the
                smallest testable parts of an application, called units, are
                individually and independently scrutinized for proper operation.
                This testing methodology is done during the development process
                by the software developers and sometimes QA staff. The main
                objective of unit testing is to isolate written code to test and
                determine if it works as intended.
                <br />
                Unit testing is an important step in the development process,
                because if done correctly, it can help detect early flaws in
                code which may be more difficult to find in later testing
                stages.
                <br />
                Unit testing is a component of test-driven development (TDD), a
                pragmatic methodology that takes a meticulous approach to
                building a product by means of continual testing and revision.
                This testing method is also the first level of software testing,
                which is performed before other testing methods such as
                integration testing. Unit tests are typically isolated to ensure
                a unit does not rely on any external code or functions. Testing
                can be done manually but is often automated.
                <p className="my-3 text-cyan-100 text-lg">
                  How unit tests work
                </p>
                A unit test typically comprises of three stages: plan, cases and
                scripting and the unit test itself. In the first step, the unit
                test is prepared and reviewed. The next step is for the test
                cases and scripts to be made, then the code is tested.
                <br />
                <br />
                Unit testing involves only those characteristics that are vital
                to the performance of the unit under test. This encourages
                developers to modify the source code without immediate concerns
                about how such changes might affect the functioning of other
                units or the program as a whole. Once all of the units in a
                program have been found to be working in the most efficient and
                error-free manner possible, larger components of the program can
                be evaluated by means of integration testing. Unit tests should
                be performed frequently, and can be done manually or can be
                automated.
              </div>
            </div>

            {/* Que-4 */}
            <div className="divider"></div>
            <div id="diff" className="text-justify">
              <h2 className="text-2xl py-5 text-cyan-600 flex">
                <span className="text-3xl mr-3">
                  <BsPatchQuestionFill />
                </span>
                What is the difference between React vs. Angular vs. Vue?
              </h2>
              <div className="">
                There are three frameworks for building web applications that
                every frontend developer has heard about: React, Vue.js, and
                Angular. React is a UI library, Angular is a fully-fledged
                front-end framework, while Vue.js is a progressive framework.
                They can be used almost interchangeably to build front-end
                applications, but they’re not 100 percent the same, so it makes
                sense to compare them and understand their differences. Each
                framework is component-based and allows the rapid creation of UI
                features. However, they all have a different structure and
                architecture.
                <br />
                <p className="text-lg text-cyan-100 py-3">React</p>
                React can be used as a UI library to render elements, without
                enforcing a specific project structure, and that’s why it’s not
                strictly a framework.
                <br />
                React Elements are the smallest building blocks of React apps.
                They are more powerful than DOM elements because the React DOM
                makes sure to update them efficiently whenever something
                changes.
                <br />
                Components are larger building blocks that define independent
                and reusable pieces to be used throughout the application. They
                accept inputs called props and produce elements that are then
                displayed to the user.
                <br />
                React is based on JavaScript, but it’s mostly combined with JSX
                (JavaScript XML), a syntax extension that allows you to create
                elements that contain HTML and JavaScript at the same time.
                <br />
                Anything you create with JSX could also be created with the
                React JavaScript API, but most developers prefer JSX because
                it’s more intuitive.
                <p className="text-lg text-cyan-100 py-3">Vue</p>
                The Vue.js core library focuses on the View layer only. It’s
                called a progressive framework because you can extend its
                functionality with official and third-party packages, such as
                Vue Router or Vuex, to turn it into an actual framework.
                <br /> Although Vue is not strictly associated with the MVVM
                (Model-View-ViewModel) pattern, its design was partly inspired
                by it. With Vue, you’ll be working mostly on the ViewModel
                layer, to make sure that the application data is processed in a
                way that allows the framework to render an up-to-date View.
                <br /> Vue’s templating syntax lets you create View components,
                and it combines familiar HTML with special directives and
                features. This templating syntax is preferred, even though raw
                JavaScript and JSX are also supported.
                <br /> Components in Vue are small, self-contained, and can be
                reused throughout the application. Single File Components (SFCs)
                with the .vue extension contain HTML, CSS, and JavaScript so
                that all relevant code resides in one file.
                <br /> SFCs are the recommended way to organize code in Vue.js
                projects, especially larger ones. Tools such as Webpack or
                Browserify are required to transpile SFCs into working
                JavaScript code.
                <p className="text-lg text-cyan-100 py-3">Angular</p>
                <br />
                Projects in Angular are structured into Modules, Components, and
                Services. Each Angular application has at least one root
                component and one root module.
                <br />
                Each component in Angular contains a Template, a Class that
                defines the application logic, and MetaData (Decorators). The
                metadata for a component tells Angular where to find the
                building blocks that it needs to create and present its view.
                <br />
                Angular templates are written in HTML but can also include
                Angular template syntax with special directives to output
                reactive data and render multiple elements, among other things.
                <br />
                Services in Angular are used by Components to delegate
                business-logic tasks such as fetching data or validating input.
                They are a distinct part of Angular applications. While Angular
                doesn’t enforce their use, it’s highly suggested to structure
                apps as a set of distinct services that can be reused.
                <br />
                Angular is built in TypeScript, so its use is recommended to get
                the most seamless experience, but plain JavaScript is also
                supported.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
