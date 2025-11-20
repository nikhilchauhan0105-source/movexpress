import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ColorScroll = ({ content }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const words = containerRef.current.querySelectorAll(".word");

    gsap.to(words, {
      color: "black", 
      stagger: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      
      className=" py-1 md:py-20 px-3 bg-commonbg flex flex-col items-center justify-center"
    >
      <p
        ref={containerRef}
        className=" font-medium text-lg text-center md:text-left sm:text-2xl md:text-4xl text-textlight xl:text-5xl leading-[132%] tracking-[-0.1%] max-w-310"
      >
        {content.split(" ").map((word, i) => (
          <span key={i} className="word  inline-block w-fit mr-2 ">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
};
