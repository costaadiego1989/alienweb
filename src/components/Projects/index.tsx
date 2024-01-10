import { CallToAction } from '../CallToAction';
import { ProjectsContainer, ProjectsContentContainer, ProjectTitle, ProjectContainer, Project } from './Project'
import { projects } from './mock';
import { Buildings, Globe, } from 'phosphor-react';

export const Projects: React.FC = () => {
    return (<>
        <ProjectsContainer className='portfolio'>
            <ProjectTitle>Projetos</ProjectTitle>
            <ProjectsContentContainer>
                <ProjectContainer>
                    {projects.map((project) => {
                        return (<>
                            <Project>
                                <img src={project.imageUrl} alt={project.title} />
                                <h3>
                                    <Globe size={24} />
                                    {project.title}</h3>
                                <h5>
                                    <Buildings size={24} />
                                    {project.company}
                                </h5>
                            </Project>
                        </>)
                    })}
                </ProjectContainer>
            </ProjectsContentContainer>
            <CallToAction title='Você merece estar em nosso case de sucesso' button='Vamos bater um papo!' url='https://wa.me/5521993001883' />
        </ProjectsContainer>
    </>);
}