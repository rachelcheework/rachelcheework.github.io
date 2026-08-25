import '../index.css';

function Projects() {


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

            {/* Card 1 */}
            <div className="border border-gray-500 rounded-2xl overflow-hidden md:col-span-2">
              <video autoPlay loop muted className="w-full h-auto">
                <source src="./outfitbuilder-demo.mp4" type="video/mp4" />
                Your browser does not support video tag
              </video>
              <div className="space-y-4 p-4">
                <a href="https://github.com/rachelcheework/outfitplanner" target="_blank" rel="noopener noreferrer" className="section-header hover:underline">outfit builder + wardrobe</a>
                <p>objective: building an authenticated React platform for interactive outfit creation.</p>
                <p>react, tailwind, supabase, tanstack query</p>
                {/* <p>status: tech implementation done; pending design</p> */}
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-500 rounded-2xl overflow-hidden md:col-span-2">
              <video autoPlay loop muted className="w-full h-auto">
                <source src="./pomodoro-demo.mp4" type="video/mp4" />
                Your browser does not support video tag
              </video>
              {/* Text Div */}
              <div className="space-y-4 p-4">
                <a href='https://rachelcheework.github.io/pomodoro-timer/' target="_blank" rel="noopener noreferrer" className="section-header hover:underline">pomodoro timer</a>
                <p>objective: building customisable pomodoro timer</p>
                <p>react, css</p>
              </div>
            </div>

          </div>
         
        </div>        
      </section>
    </div>
  );
}

export default Projects;
