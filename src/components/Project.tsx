import { TProject } from "./Projects";

const Project = ({ project, index }: { project: TProject; index: number }) => {
  return (
    <div className="work-sample group relative h-[450px] min-w-[43.125vw] max-w-[600px] overflow-hidden bg-neutral-200 rounded-[30px] cursor-pointer">
      <div
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div
        className={`bg-primary text-white px-7 py-2.5 rounded-full absolute z-20 top-10 right-10 ${
          index === 0 ? "inline-block" : "hidden"
        }`}
      >
        Latest
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
        <h2 className="text-4xl font-black uppercase text-white mb-4">
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white border border-neutral-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
