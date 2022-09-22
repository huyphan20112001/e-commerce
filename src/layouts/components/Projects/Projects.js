import "./Projects.scss";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import ProjectItem from "../../../components/ProjectItem/ProjectItem";
import images from "../../../asssets/image";

function Projects() {
  const [active, setActive] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);
  const pageItem = 6;
  const projects = [
    {
      id: 1,
      img: images.proj1,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 2,
      img: images.proj2,
      title: "Aenean Tempus ipsum",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 3,
      img: images.proj3,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 4,
      img: images.proj4,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 5,
      img: images.proj5,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 6,
      img: images.proj6,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 7,
      img: images.proj1,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 8,
      img: images.proj2,
      title: "Aenean Tempus ipsum",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 9,
      img: images.proj3,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 10,
      img: images.proj4,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 11,
      img: images.proj5,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 12,
      img: images.proj6,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 13,
      img: images.proj1,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 14,
      img: images.proj2,
      title: "Aenean Tempus ipsum",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 15,
      img: images.proj3,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 16,
      img: images.proj4,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 17,
      img: images.proj5,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 18,
      img: images.proj6,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 19,
      img: images.proj5,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 20,
      img: images.proj2,
      title: "Aenean Tempus ipsum",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 21,
      img: images.proj5,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 22,
      img: images.proj4,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 23,
      img: images.proj2,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
    {
      id: 24,
      img: images.proj6,
      title: "Aenean habitasse",
      location: "Riyadh, Saudi Arabia",
    },
  ];

  const dots = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  return (
    <div className="container">
      <div id="project" className="project">
        <div className="project-header">
          <h3 className="project-heading">Projects</h3>
          <Button href="#" primary learn learnBlackBorder project>
            ALL PROJECTS
          </Button>
        </div>
        <div className="project-list">
          {/* {projects.map((project, index) => {
            if (index >= start && index < end) {
              return (
                <ProjectItem
                  key={project.id}
                  img={project.img}
                  title={project.title}
                  location={project.location}
                />
              );
            }
          })} */}
          {projects.slice(start, end).map((project) => (
            <ProjectItem
              id={project.id}
              key={project.id}
              img={project.img}
              title={project.title}
              location={project.location}
            />
          ))}
        </div>
        <div className="project-dots">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className={`project-dot  ${active === dot.id ? "active" : ""}`}
              onClick={() => {
                setActive(dot.id);
                setStart((dot.id - 1) * pageItem);
                setEnd(dot.id * pageItem);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
