import React, { useRef } from "react";
import "./workExperience.css";
import { WORK_EXPERIENCE } from "../../Utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const WorkExperience = () => {
  const sliderRef = useRef();
  const setting = {
    dots: false,
    Infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="experience-container">
      <h5>Work Experience</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span class="meterial-symbols-outlined">
            <MdKeyboardArrowRight />
          </span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span class="meterial-symbols-outlined">
            <MdKeyboardArrowLeft />
          </span>
        </div>
        <Slider ref={sliderRef} {...setting}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
