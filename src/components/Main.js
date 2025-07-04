import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import gsap from "gsap";
import g1 from "../assets/images/g-01.jpg";
import g2 from "../assets/images/g-02.jpg";
import g3 from "../assets/images/g-03.jpg";
import g4 from "../assets/images/g-04.jpg";
import g5 from "../assets/images/g-05.jpg";
import g6 from "../assets/images/g-06.jpg";
import g7 from "../assets/images/g-07.jpg";
import reel from "../assets/images/reel.webm";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPageMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate each image column individually, skipping .c-gallery (the parent container)
    tl.fromTo(
      ".c-gallery-left.-outer img",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
    )
      .fromTo(
        ".c-gallery-left.-inner img",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
        },
        "-=0.8",
      )
      .fromTo(
        ".c-gallery-right.-inner img",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
        },
        "-=0.8",
      )
      .fromTo(
        ".c-gallery-right.-outer img",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.8",
      )
      .fromTo(
        ".c-gallery-central img",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=0.8",
      )
      .fromTo(
        ".c-gallery-overlay video",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=0.8",
      )
      .fromTo(
        ".textBold",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "+=0.3",
      );
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".c-page-menu",
        {
          left: "100%",
        },
        {
          left: "0%",
          duration: 1.5,
          ease: "power2.out",
        },
      );
    } else {
      // gsap.fromTo(
      //   ".c-page-menu",
      //   {
      //     left: "0%",

      //     duration: 1.5,
      //     ease: "power4.out",
      //   },
      //   {
      //     left: "100%",

      //     duration: 1,
      //     ease: "power4.out",
      //   },
      // );
      gsap.to(".c-page-menu", {
        duration: 0.8,
        left: "0%", // Slide to the middle
        right: "0%",
        ease: "power4.in",
        onComplete: () => {
          gsap.set(".c-page-menu", { clearProps: "left,right" });
        },
      });
    }
  }, [isOpen]);

  return (
    <div className="main">
      {isOpen && (
        <div className="c-page-menu">
          <div className="c-noise"></div>
          <div className="c-old"></div>
          <div className="c-menu-bg"></div>
          <div className="nav-main">
            <div>
              <div>
                <h1 className="text-white text-3xl">The Story Studios </h1>
                <header>
                  <nav></nav>
                </header>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="c-noise"></div>
      <div className="c-old"></div>

      <div className="c-page-main">
        <header>
          <h1 className="logo">itan.studio</h1>
          <div className="c-header-nav">
            <a href="#contacto">Our Story</a>
            <div className="icon" onClick={openPageMenu}>
              <HiOutlineMenuAlt4 className="c-header-nav-icon" />
            </div>
          </div>
        </header>

        <main>
          <section className="c-main-hero">
            <div>
              <h1 className="text-sm md:text-sm lg:text-sm text-center w-3/5 textBold">
                We <span className="textBaskerville">deliver</span> award
                winning websites for{" "}
                <span className="text-[#] font-extrabold italic">bold</span> and
                ambitious brands
              </h1>
            </div>
          </section>
          <section className="c-gallery-outer gallery-main">
            <div className="c-gallery">
              <div className="c-gallery-overlay">
                <video
                  data-video="reel"
                  loop=""
                  playsinline=""
                  poster={g4}
                  muted=""
                >
                  <source src={reel} type="video/webm" codecs="vp9,vorbis" />
                  <source src="videos/reel.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="c-gallery-title">
                Todos tenemos un tesoro <br />
                familiar para compartir
              </div>
              <div className="c-gallery-inner">
                <div className="c-gallery-left -outer">
                  <img src={g1} alt="" />
                </div>
                <div className="c-gallery-left -inner">
                  <img src={g2} alt="" />
                  <img src={g3} alt="" />
                </div>
                <div className="c-gallery-central">
                  <img src={g4} alt="" />
                </div>
                <div className="c-gallery-right -inner">
                  <img src={g5} alt="" />
                  <img src={g6} alt="" />
                </div>
                <div className="c-gallery-right -outer">
                  <img src={g7} alt="" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Main;
