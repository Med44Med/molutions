"use client";

import { useState, useEffect } from "react";
import Project from "./project";

const ProjectList = ({ projectProps }) => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectProps);
  }, [projectProps]);

  return (
    <div className="mx-4 py-6 flex flex-col items-center justify-start">
      <div className="w-full rounded-4xl border flex items-center justify-center overflow-hidden md:w-3xl">
        <button
          className={`grow h-10  m-1 rounded-4xl transition-colors hover:bg-primary hover:text-light [&.active]:bg-primary [&.active]:text-light ${
            filter === "all" ? "active" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`grow h-10  m-1 rounded-4xl transition-colors hover:bg-primary hover:text-light [&.active]:bg-primary [&.active]:text-light ${
            filter === "web" ? "active" : ""
          }`}
          onClick={() => setFilter("web")}
        >
          Web app
        </button>
        <button
          className={`grow h-10  m-1 rounded-4xl transition-colors hover:bg-primary hover:text-light [&.active]:bg-primary [&.active]:text-light ${
            filter === "mobile" ? "active" : ""
          }`}
          onClick={() => setFilter("mobile")}
        >
          Mobile app
        </button>
      </div>
      <div className="mt-4 w-full flex justify-around flex-wrap  gap-4">
        {projects.map((item) => (
          <Project key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
