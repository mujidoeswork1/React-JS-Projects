import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import {
  FaBars,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaBed,
} from "react-icons/fa";
import Logo from "./logo.svg";
function App() {
  const a = useRef(null);
  const b = useRef(null);
  const [check, setcheck] = useState(false);

  const [hei, setHei] = useState(null);
  const [boool, setBoool] = useState(false);

  const divClick = () => {
    console.log(a.current.getBoundingClientRect().width);
    console.log(b.current.getBoundingClientRect().width);
  };
  const checkSize = () => {
    setHei(a.current.getBoundingClientRect().height);
  };
  // useEffect(() => {
  //   window.addEventListener("resize", checkSize);
  //   // console.log(hei);
  // });
  // useEffect(() => {
  //   const linksHeight = b.current.getBoundingClientRect().height;
  //   if (boool) {
  //     a.current.style.height = `${linksHeight + 20}px`;
  //     console.log(`${linksHeight}px`);
  //   } else {
  //     a.current.style.height = "0px";
  //   }
  // }, [boool]);
  const handle = () => {
    if (check) {
    }
  };

  return (
    <>
      {/* <button className="btn" onClick={() => setcheck(!check)}>
        click me
      </button>
      <div className="outer">
        <div
          className="p"
          style={{
            height: check ? "0px" : "170px",
            overflow: "hidden",
            position: "absolute",
            transform: "translateY(120px)",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sed
          rerum distinctio omnis error tempora laborum, et facere porro,
          voluptatum ipsa dicta? Necessitatibus, doloribus itaque ipsa nostrum
          aliquid veritatis quisquam autem voluptatum modi architecto accusamus
          veniam laboriosam officia dolorem consectetur quasi impedit inventore
          doloremque velit ex, molestias qui atque officiis voluptatem! Neque
          quibusdam expedita officia. Ipsam facere possimus aspernatur aperiam
          rerum delectus itaque? Hic odit, voluptates, quam aliquam ad provident
          animi adipisci quisquam neque mollitia rem. Tenetur atque soluta
          labore. Aspernatur ad neque rerum ex magni, perspiciatis voluptatem
          ratione dolore nisi maiores laudantium dolorem voluptate magnam
          dolorum, nulla odit saepe libero adipisci quidem! Neque facilis culpa
          quos nobis sequi eligendi odit quibusdam consequatur, ratione porro,
          voluptate, accusantium blanditiis commodi animi sed magni laboriosam
          aperiam rem cum debitis? Dolores nesciunt cumque suscipit maiores
          ullam odio repudiandae, sunt quia ratione corrupti aspernatur minima
          voluptatum, ab consectetur enim culpa inventore accusamus? Excepturi
          unde laborum architecto voluptates dolor minus doloremque iusto rem,
          numquam reprehenderit dolorum accusantium, nobis totam voluptatibus
          odit delectus quis id expedita facilis? Iure, ad. Corporis sequi
          assumenda facilis optio corrupti aliquid. Magni in a repudiandae
          cupiditate consectetur necessitatibus dolores reprehenderit pariatur
          quibusdam repellat. Ullam officiis maiores animi quo corrupti libero
          nulla.
        </div>
      </div> */}

      <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="loading..." />
        </div>
        <div
          className="outer-links-container"
          style={{
            height: boool ? "0px" : "170px",
          }}
          ref={a}
          onClick={divClick}
        >
          <ul className="links-container" ref={b}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Profile</a>
            </li>
          </ul>
        </div>
        <div className="bars" onClick={() => setBoool(!boool)}>
          <FaBars />
        </div>
        <div className="icons-container">
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
          <a href="/">
            <FaBed />
          </a>
        </div>
      </nav>
    </>
  );
}

export default App;
