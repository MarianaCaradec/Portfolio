import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <main
        id="about"
        className="py-20 bg-[#211E19ff] bg-gradient-to-b from-black/70 to-transparent text-center"
      >
        <h2 className="text-3xl font-bold">About me</h2>
        <div className="py-16 md:py-32 flex justify-center items-center gap-10">
          <Image
            src="/about.jpg"
            width={300}
            height={500}
            className="rounded-lg max-w-full"
            alt="My photo"
          />
          <p className="md:max-w-3xl">
            Hello there! I'm Mariana and I'm a passionate programmer who enjoys
            finding new ways of creating and making high-functioning and
            scalable apps. Although I'm a programmer, I'm also an user who wants
            to do things fast and easy, so for me, the most important thing is
            to achieve a good comunication with my clients and that they're
            satisfied with the experience I create for them.
            <br />
            My areas of expertise are around HTML, CSS (Bootstrap/Tailwind),
            JavaScript/TypeScript, ReactJS, NextJS and C# (.NET) -with knowledge
            about cloud services (Amazon Web Services and Google Cloud
            Platform).
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
