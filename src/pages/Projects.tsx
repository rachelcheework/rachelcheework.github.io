import '../index.css';
import ProjectCard, { type ProjectCardProps } from '../components/ProjectCard';

function Projects() {
  const projList: ProjectCardProps[] = [
    {
      vidSrc: "./outfitbuilder-demo.mp4",
      projName: "outfit builder + wardrobe",
      projectLink: "https://outfitplanner-two.vercel.app/",
      projectDesc: "building an authenticated React platform for interactive outfit creation.",
      techStack: "react, tailwind, supabase, tanstack query",
    },
    {
      vidSrc: "./cryptoticker-demo.mp4",
      projName: "crypto price ticker + dummy trade mechanism",
      projectLink: "https://price-ticker-three.vercel.app/",
      projectDesc: "aggregates data, handles high-frequency price updates, and batch UI updates",
      techStack: "react, typescript, zustand, websockets",
    }, {
      vidSrc: "./pomodoro-demo.mp4",
      projName: "pomodoro timer",
      projectLink: "https://rachelcheework.github.io/pomodoro-timer/",
      projectDesc: "building customisable pomodoro timer",
      techStack: "react, css",
    },
  ]

  return (
    <div className="main">
      {/* Projects */}
      <section id="projects">

        {/* Projects Container */}
        <div className="flex flex-col px-6 md:mx-72 my-20 divide-y divide-gray-500">

          {/* Title/Desc Container*/}
          <div className="flex flex-col space-y-8 py-4">
            <h1 className="text-white font-bold text-xl">Projects</h1>
            <p>just exploring</p>
          </div>

          {/* Cards Container*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6 py-4">
            {projList.map((project) => (
              <ProjectCard
                key={project.projName}
                {...project}
              />
            ))}

          </div>

        </div>
      </section>
    </div>
  );
}

export default Projects;
