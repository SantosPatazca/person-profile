import React from 'react'
import ProjectCard from './ProjectCard'

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Jugueria landing page',
      tags: ['SPA', 'Web-design'],
      projectLink: 'https://github.com/SantosPatazca/jugeria-delicias.github.io'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'eCommerce website',
      tags: ['Web-design'],
      projectLink: 'https://github.com/SantosPatazca/DLorenzo'
    },
    // {
    //   imgSrc: '/images/project-3.jpg',
    //   title: 'Recipe app',
    //   tags: ['Development', 'API'],
    //   projectLink: ''
    // },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'SoleSync landing page',
      tags: ['SPA', 'Web-design'],
      projectLink: 'https://github.com/soleSync-WS32/LandingPageSole'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Finanzas app',
      tags: ['Web-design', 'API'],
      projectLink: 'https://github.com/Finanzas-2024-1/FinanzasTrabajo'
    },
    // {
    //   imgSrc: '/images/project-6.jpg',
    //   title: 'vCard Personal portfolio',
    //   tags: ['Web-design', 'Development'],
    //   projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    // },
];

const Work = () => {
  return (
    <section 
    id='work'
    className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                Proyectos
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />
                ))}
            </div>
        </div>

    </section>
  )
}

export default Work