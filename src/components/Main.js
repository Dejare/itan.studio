import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Main = () => {
  return (
    <div className="main">
      <div className="c-noise"></div>
      <div className="c-old"></div>

      <div>
        <header>
          <h1 className="logo">itan.studio</h1>
          <div className="c-header-nav">
            <a href="#contacto">Our Story</a>
            <div>
              <HiOutlineMenuAlt4 className="c-header-nav-icon" />
            </div>
          </div>
        </header>

        <main>
          <section className="c-main-hero">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-center w-3/5 textBold">
                We <span className="textBaskerville">deliver</span> award
                winning websites for{" "}
                <span className="text-[#cbdd64] font-extrabold uppercase">
                  bold
                </span>{" "}
                and ambitous brands
              </h1>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Main;
