import React, { useEffect } from "react";
import "./Experience.css";
import {
  FaChartLine,
  FaConnectdevelop,
  FaFileCode,
  FaPaintBrush,
} from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Experience = () => {
  useEffect(() => {
    function qs(selector, all = false) {
      return all
        ? document.querySelectorAll(selector)
        : document.querySelector(selector);
    }

    const sections = qs(".exp-section", true);
    const timeline = qs(".timeline");
    const line = qs(".exp-line");
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.95;

    function scrollHandler(e) {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      // down = !up;

      down = scrollY > prevScrollY;
      const timelineRect = timeline.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

      const dist = targetY - timelineRect.top;

      const dist_rev = lineRect.top - targetY + 30;

      if (down && !full) {
        line.style.bottom = `calc(100% - ${dist}px)`;
      }

      if (up) {
        full = false;
        line.style.bottom = `calc(100% - ${dist}px)`;
      }

      if (dist > timeline.offsetHeight + 90 && !full) {
        full = true;
        line.style.bottom = `-90px`;
      }

      // if (dist < timeline.offsetHeight + 50 && full) {
      //     full = false;
      //     line.style.bottom = `-50px`;
      //   }

      sections.forEach((item) => {
        // console.log(item);
        const rect = item.getBoundingClientRect(); //     console.log(rect);

        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      }); // console.log(up, down);

      prevScrollY = window.scrollY;
    }

    scrollHandler();
    line.style.display = "block";
    window.addEventListener("scroll", scrollHandler);
  });

  return (
    <section className="experience" id="experience">
      <div className="max-width">
        <h2 className="title">Experience</h2>
        <div className="experience-content">
          <div className="timeline">
            <div className="exp-line"></div>

            <ScrollAnimation animateOut='bounceOutLeft' animateIn='bounceInLeft'>
            <div className="exp-section-1">
              

            <div class="exp-content">
                  <img src = 'assets/images/BFS-icon-dark-transparent.png'  width = "90px" style = {{marginRight: 10, borderRadius : 20}}/>
                  <div style = {{textAlign : 'left', display : 'table-cell'}}>
                  <h2>Babcock Finance Society</h2>
                <p>IT Team Lead</p>
                      </div>
                
               
              </div>
            </div>
            </ScrollAnimation>

         
            <ScrollAnimation  animateOut='bounceOutRight' animateIn='bounceInRight'>
            <div className="exp-section">
    

              <div class="exp-content">
                  <img src = 'assets/images/sankore.png'  width = "90px" style = {{marginRight: 10, borderRadius : 20}}/>
                  <div style = {{textAlign : 'left',  display : 'table-cell'}}>
                  <h2>Sankore Investments</h2>
                <p>Digital Products Intern</p>
                      </div>
                
               
              </div>
            </div>
            </ScrollAnimation>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
