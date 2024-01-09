import kaedo from '../../assets/images/projects/kaedo.jpg'
import felcpint from '../../assets/images/projects/felcpint.jpg'
import milian from '../../assets/images/projects/milian.jpg'
import sisgpru from '../../assets/images/projects/sisgpru.jpg'
import santoterroir from '../../assets/images/projects/santoterroir.jpg'
import embaot from '../../assets/images/projects/embaot.jpg'
import domingos from '../../assets/images/projects/domingos.jpg'
import guilherme from '../../assets/images/projects/guilherme.jpg'
import perola from '../../assets/images/projects/perola.jpg'

interface IProjects {
    company: string;
    imageUrl: string;
    title: string;
}

export const projects: IProjects[] = [
    {
        company: 'Felcpint Reformas Prediais',
        imageUrl: felcpint,
        title: 'Website Felcpint',
    },
    {
        company: 'Sisgpru',
        imageUrl: sisgpru,
        title: 'Sistema pronto atendimento Sisgpru',
    },
    {
        company: 'Escola Embaot',
        imageUrl: embaot,
        title: 'Website Escola Embaot',
    },
    {
        company: 'Milian Cosméticos',
        imageUrl: milian,
        title: 'Website Milian Cosméticos',
    },
    {
        company: 'Grupo Kaedo Cosméticos',
        imageUrl: kaedo,
        title: 'Website Grupo Kaedo Cosméticos',
    },
    {
        company: 'Santo Terroir',
        imageUrl: santoterroir,
        title: 'Website Santo Terroir',
    },
    {
        company: 'Pérola',
        imageUrl: perola,
        title: 'Website ONG Pérola',
    },
    {
        company: 'Grupo Domingos',
        imageUrl: domingos,
        title: 'Website Grupo Domingos',
    },
    {
        company: 'Guilherme Villabom',
        imageUrl: guilherme,
        title: 'Website Guilherme Villabom',
    },
]