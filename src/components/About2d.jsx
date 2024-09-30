import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon }) => (
  <div className="xs:w-[250px] w-full bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-card">
    <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
  </div>
);

const About2d = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I’m a software developer with expertise in C/C++, Python, Java, and cloud technologies. My experience includes building large-scale e-commerce platforms, developing microservices with CI/CD pipelines, and a strong interest in machine learning and deep learning. I thrive on solving complex technical problems and delivering high-performance, innovative solutions. Let's work together to take your project to the next level!
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About2d, "about");
