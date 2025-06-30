import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Loader = ({ setShowMain }) => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;

    gsap.set(cursor, { x: -100, y: -100 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.4,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      xTo(pos.x);
      yTo(pos.y);

      const dx = (e.clientX - center.x) / center.x;
      const dy = (e.clientY - center.y) / center.y;

      const rotateX = dy * 30;
      const rotateY = dx * 30;

      gsap.to(text, {
        rotateX: -rotateX,
        rotateY: rotateY,
        ease: "power2.out",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleClick = async () => {
    await waitForImagesToLoad();

    const split = new SplitText(".logo", { type: "chars" });

    const tl = gsap.timeline({
      onComplete: () => {
        setShowMain(true);
      },
    });

    tl.fromTo(
      split.chars,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -2,
        duration: 0.5,
        stagger: { each: 0.05, from: "end" },
      }
    ).to(".loader", {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
    });
  };

  const waitForImagesToLoad = () => {
    const images = Array.from(document.images);
    const promises = images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) resolve();
          else img.onload = img.onerror = resolve;
        })
    );
    return Promise.all(promises);
  };

  return (
    <div className="loader">
      <div>
        <h1 className="logo">itan.studio</h1>
      </div>
      <div className="c-noise"></div>
      <div className="c-old"></div>

      <div
        className="mouse_circle"
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "5rem",
          height: "5rem",
          borderRadius: "50%",
          backgroundColor: "aliceblue",
          mixBlendMode: "difference",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
        onClick={handleClick}
      >
        <p
          ref={textRef}
          style={{
            margin: 0,
            transition: "transform 0.3s",
            perspective: "500px",
            transformStyle: "preserve-3d",
            zIndex: 1000,
          }}
        >
          Enter
        </p>
      </div>
    </div>
  );
};

export default Loader;
