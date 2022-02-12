import React from "react";
import "./SCSS/Components/_hero.scss";
import Navbar from "./_Navbar";

import SVGimage from "./image/asset_1.svg";

export default function Hero() {

  function handleChange(e) {
    window.addEventListener("scroll", scrollParalax);
    function scrollParalax(e) {
      const target = document.querySelector(".hello");
      console.log("scroll");
      var scrolled = window.pageYOffset;
      var rate = scrolled * 0.5;

      target.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    }
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll(".element").forEach((element) => {
        const speed = element.getAttribute("data-speed");

        const x = (window.innerHeight - e.pageX * speed) / 100;
        const y = (window.innerWidth - e.pageY * 2 * speed) / 100;
        element.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${y}deg) rotate(${x}deg)`;
      });
    }
  }

  return (
    <div className="hero-section">
      <Navbar />
      <img
        className="svg1 element"
        data-speed="4"
        src={SVGimage}
        alt="My Happy SVG"
        onMouseMove={handleChange}
      />
      <img
        className="svg2 element"
        data-speed="2"
        src={SVGimage}
        alt="My Happy SVG"
        onMouseMove={handleChange}
      />
      <img
        className="svg3 element"
        data-speed="9"
        src={SVGimage}
        alt="My Happy SVG"
        onMouseMove={handleChange}
      />
      <img
        className="svg4 element"
        data-speed="9"
        src={SVGimage}
        alt="My Happy SVG"
        onMouseMove={handleChange}
      />
      <img
        className="svg5 element"
        data-speed="9"
        src={SVGimage}
        alt="My Happy SVG"
        onMouseMove={handleChange}
      />
      <img
        className="svg6 element"
        data-speed="9"
        src={SVGimage}
        alt="My Happy SVG"
        onMouseMove={handleChange}
      />
      <img
        className="svg7 element"
        data-speed="9"
        src={SVGimage}
        alt="My Happy SVG"
        onMouseMove={handleChange}
      />
      <ul>
          <li onScroll={handleChange} className="hello">Hello</li>
          <li className="hello">World</li>
      </ul>
      <div className="hero"></div>
    </div>
  );
}
