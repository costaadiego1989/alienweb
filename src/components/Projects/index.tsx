import { ProjectsContainer, ProjectsContentContainer, Project } from './Project'

interface IProjects {
    company: String;
    imageUrl: String;
    title: String;
}

const projects: IProjects[] = [
    {
        company: "Empresa 1",
        imageUrl: "htp://#",
        title: "Título 1",
    }
]

export const Projects: React.FC = () => {
    return (<>
        <ProjectsContainer>
            <ProjectsContentContainer>
                { projects.map((project) => {
                    return(<>
                        <Project>
                            {project.imageUrl}
                            {project.title}
                            {project.company}
                        </Project>
                    </>)
                }) }
            </ProjectsContentContainer>
        </ProjectsContainer>
    </>);
}