// import React from "react";
import iconList from "../src/assets/images/icon-list.svg";
import desktopleft from "../src/assets/images/illustration-sign-up-desktop.svg";
import mobileleft from "../src/assets/images/illustration-sign-up-mobile.svg";

export default function App() {
  return (
    <div className="bg-darkSlate h-[100vh] flex items-center justify-center">
      <div className="bg-white flex items-center justify-center w-[50%] rounded-2xl ">
        <div className="font-body  w-full p-4 mx-2 ">
          <h1 className="text-5xl font-bold text-darkSlate my-4">
            Stay Updated!
          </h1>
          <p className="text-charcoalGrey my-4 text-[15px]">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div className="flex my-2">
            <img src={iconList} className="h-[80%]" alt="" />
            <p className="mx-3 text-charcoalGrey text-[15px]">
              Product discovery and building what matters
            </p>
          </div>
          <div className="flex my-2 mx-0">
            <img src={iconList} alt="" />
            <p className="mx-3 text-charcoalGrey text-[15px]">
              Measuring to ensure updates are a success
            </p>
          </div>
          <div className="flex my-2">
            <img src={iconList} alt="" />
            <p className="mx-3 text-charcoalGrey text-[15px]">And much more</p>
          </div>
          <div className="my-4 flex flex-col">
            <p className="text-sm font-bold">Email address</p>
            <input
              className="border border-gray rounded-lg p-4 my-4"
              placeholder="email@company.com"
              type="text"
            />
            <button
              type="submit"
              className="bg-charcoalGrey hover:bg-tamato rounded-lg p-4  text-white font-bold"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className="m-2 w-full h-full">
          <img className="w-[100%] h-[100%]" src={desktopleft} alt="" />
        </div>
      </div>
    </div>
  );
}
