import React from "react";

const Notfound = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            alt="hero"
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            src="./img1.jpeg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Page Not Found
            </h1>
            <p className="mb-8 capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              consequuntur quisquam qui praesentium, blanditiis distinctio sequi
              ullam officiis deleniti libero eaque aperiam? Aspernatur assumenda
              consequuntur alias eos at, ipsam, velit illo deleniti, veniam non
              consectetur? Reiciendis doloremque harum iure, incidunt quisquam
              placeat consequatur quibusdam minima quas. Quam voluptas sunt
              dolore.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notfound;
