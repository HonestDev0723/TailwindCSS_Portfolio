import React from "react";
import Tilt from "react-parallax-tilt";
function ProjectCard({ name, about, image, note }) {
  return (
    <section className="text-gray-200 body-font  rounded-lg">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Tilt>
            <img
              className="object-cover object-center rounded"
              alt="project"
              src={image}
            />
          </Tilt>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {name}
          </h1>
          <p className="mb-8 leading-relaxed lg:pr-28">{about}</p>
          {note && (
            <p className="mb-5 leading-relaxed lg:pr-28 text-red-700 text-sm font-medium">
              {note}{" "}
              <a
                href="https://fash-cave.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="px-1 text-white relative before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:-skew-y-3 transition-all before:duration-300 after:absolute after:left-0 after:top-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:duration-300 after:skew-y-3"
              >
                click here
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
