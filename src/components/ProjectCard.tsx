export type ProjectCardProps = {
    vidSrc: string,
    projName: string,
    projectLink: string,
    projectDesc: string,
    techStack: string

}

const ProjectCard = ({vidSrc, projName, projectLink, projectDesc, techStack}: ProjectCardProps) => {
    console.log(projName, vidSrc)
    return (
        <div className="border border-gray-500 rounded-2xl overflow-hidden md:col-span-2">
            <video autoPlay loop muted playsInline controls className="w-full h-auto">
                <source src={vidSrc} type="video/mp4" />
                Your browser does not support video tag
            </video>
            <div className="space-y-4 p-4">
                <a href={projectLink} target="_blank" rel="noopener noreferrer" className="section-header hover:underline">{projName}</a>
                <p>objective: {projectDesc}</p>
                <p>{techStack}</p>
            </div>
        </div>
    )
}

export default ProjectCard
