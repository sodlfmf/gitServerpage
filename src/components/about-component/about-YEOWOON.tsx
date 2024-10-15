"use client";

import Image from "next/image";
import "./about-YEOWOON.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP, MotionPathPlugin);

const AboutYEOWOON = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        strokeDasharray: 0,
      },
    });

    function drawLine(target1: string, target2: string) {
      tl.set(`${target1}`, { opacity: 1 })
        .set(`${target2}`, { opacity: 1 })
        .from(`${target1}`, {
          motionPath: {
            path: `${target1}`,
            align: `${target1}`,
          },
        })
        .from(
          `${target2}`,
          {
            motionPath: {
              path: `${target2}`,
              align: `${target2}`,
            },
          },
          "<0.4"
        );
    }

    drawLine("#left_line_path", "#right_line_path");
  });

  return (
    <div className="ay_container">
      <div className="ay_title">
        <video loop muted autoPlay>
          <source src="/video/aboutSilver.webm" type="video/webm" />
        </video>
        <h4>FIND YOUR STYLE WITH YEOWOON WHOEVER YOU ARE</h4>
      </div>
      <div className="ay_subtitle">
        <h3>About YEOWOON</h3>
        <p>
          The present is all we have. While we cannot alter the past nor foresee
          the future, we can shape our existence
          <br /> one stylish day at a time. A life illuminated by daily elegance
          is a life beautifully lived.
        </p>
      </div>
      <div className="ay_content">
        <svg
          className="left_line"
          width="720"
          height="4"
          viewBox="0 0 720 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            id="left_line_path"
            d="M720 2H0"
            stroke="white"
            strokeWidth="4"
          />
        </svg>

        <div className="ay_rep">
          <Image
            src={"/img/about/aboutRep.jpg"}
            width={250}
            height={310}
            style={{}}
            alt={"aboutRep"}
          />

          <div className="ay_rep_script">
            <h4>
              Jung
              <br /> Soonhee
            </h4>
            <p>
              At the heart of my business lies a belief in the power of human
              connection.
            </p>
            <p>
              I value every individual - from our employees to our partners.
            </p>
            <p>
              Together, we nurture their potential, working hand-in-hand to
              build a thriving business.
            </p>
          </div>
        </div>
        <svg
          className="right_line"
          width="721"
          height="5"
          viewBox="0 0 721 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            id="right_line_path"
            d="M0.5 2.5H720.5"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutYEOWOON;
