"use client";

import { useGetAllProjectQuery } from "@/redux/feature/project/projectApi";
import Projects from "../Projects";

const ProjectsSection = () => {
  const { data, isLoading } = useGetAllProjectQuery(null);

  if (isLoading) return;

  return (
    <div>
      <Projects projects={data.data} />
    </div>
  );
};

export default ProjectsSection;
