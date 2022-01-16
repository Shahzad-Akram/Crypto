import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const comingSoonParticle = () => (
  <section className="d-flex justify-content-center align-items-center">
    <div>
      <Reveal
        className="onStep"
        keyframes={fadeInUp}
        delay={300}
        duration={900}
        triggerOnce
      >
        <h1 className="col-white text-center" style={{ filter: "blur(none)" }}>
          Coming Soon ...
        </h1>
      </Reveal>
    </div>
  </section>
);
export default comingSoonParticle;
