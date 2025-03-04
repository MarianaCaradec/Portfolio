import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div>
      <main
        id="projects"
        className="h-screen bg-[#C54402ff] bg-gradient-to-b from-black/70 to-transparent py-20 px-4"
      >
        <h1 className="text-3xl text-center font-bold">My projects</h1>
        <h2 className="my-10 text-2xl max-w-3xl px-3 font-bold">
          Here are some of my latest projects:
        </h2>

        <div className="flex items-center justify-center gap-3 py-10">
          <a
            href="https://meditapp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative rounded-lg overflow-hidden">
              <Image
                width={250}
                height={250}
                src="/meditapp.png"
                alt="Meditapp"
                layout="responsive"
                className="rounded-lg"
              />

              <div className="absolute bottom-0 left-0 w-full bg-black/70 font-semi-bold text-lg px-1 rounded-b-lg">
                Meditapp
              </div>
            </div>
          </a>

          <a
            href="https://marianacaradec.github.io/Pink-Floyd-web/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative rounded-lg overflow-hidden">
              <Image
                width={250}
                height={200}
                src="/pink-floyd-web.png"
                alt="Pink Floyd web"
                layout="responsive"
                className="rounded-lg"
              />

              <div className="absolute bottom-0 left-0 w-full bg-black/70 font-semi-bold text-lg px-1 rounded-b-lg">
                Pink Floyd Web
              </div>
            </div>
          </a>

          <a
            href="https://zapapps.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative rounded-lg overflow-hidden">
              <Image
                width={250}
                height={250}
                src="/zapapps.png"
                alt="Zapapps"
                layout="responsive"
                className="rounded-lg"
              />

              <div className="absolute bottom-0 left-0 w-full bg-black/70 font-semi-bold text-lg px-1 rounded-b-lg">
                Zapapps
              </div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Projects;
