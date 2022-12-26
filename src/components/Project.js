import { useState } from "react";
import { CardElement } from "./Card";

const Project = () => {
  const [projects, setProjects] = useState([
    {
      name: "Gespro",
      url: "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    },
    { name: "Piplux", url: "https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { name: "Adoptame", url: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" },
  ]);
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <CardElement key={project.name} {...project}/>
      ))}
    </div>
  );
};

export { Project };
