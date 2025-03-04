import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div>
      <main
        id="services"
        className="h-screen py-20 bg-[#211E19ff] bg-gradient-to-b from-black/70 to-transparent flex items-center justify-center gap-10"
      >
        <div>
          <h2 className="text-5xl font-bold py-6">My services</h2>
          <Image
            src={"/services.jpg"}
            width={500}
            height={500}
            alt="Services"
            className="rounded-lg max-w-full"
          />
        </div>
        <div>
          <ol className="mt-4 mx-auto md:max-w-3xl list-decimal list-inside space-y-4">
            <li className="marker:text-[#CC4B06ff] marker:text-2xl marker:font-bold pl-6">
              <h3 className="text-2xl font-bold ">Web Development</h3>
              <p>
                I design and develop modern, high-performance websites and
                applications tailored to your business needs. My focus is on
                creating scalable, user-friendly, and visually appealing
                solutions that provide an optimal experience across all devices.
              </p>
            </li>
            <li className="marker:text-[#CC4B06ff] marker:text-2xl marker:font-bold pl-6">
              <h3 className="text-2xl font-bold ">Performance Optimization</h3>
              <p>
                I analyze and enhance website performance to ensure fast loading
                times, efficient resource usage, and smooth interactions. By
                implementing best practices and cutting-edge technologies, I
                help businesses improve user retention and search engine
                rankings.
              </p>
            </li>
            <li className="marker:text-[#CC4B06ff] marker:text-2xl marker:font-bold pl-6">
              <h3 className="text-2xl font-bold ">Technical Consulting</h3>
              <p>
                I provide expert guidance on software architecture, development
                workflows, and technology choices. Whether you need strategic
                advice or hands-on implementation support, I help businesses
                optimize their tech stack and streamline development processes.
              </p>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default Services;
