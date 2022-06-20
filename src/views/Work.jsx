import React, {useEffect, useState} from "react";

import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

import {HiArrowNarrowRight} from 'react-icons/hi';

import projects from './../datas/projects.json';
require.context('../assets', false, /\.(png|jpe?g|svg)$/)



const Work = (props) => {

    const [filteredProjects, setFilteredProjects] = useState();
    const importAll = (r) => {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }
    // img extensions must be minuscule
    const projectImages = importAll(require.context('../assets/img', false, /\.(png|jpe?g|svg)$/));

    useEffect(() => {
        console.log('projectImages', projectImages)
        const filteredProjectsByLocale = getProjectsBycurrentLocale();
        setFilteredProjects(filteredProjectsByLocale)
    }, []);

    const getProjectsBycurrentLocale = () => {
        let projectLocal;
            console.log('props.currentLocale', props.currentLocale)
            projects.map(project => {
                if(props.currentLocale === "fr-FR") {
                    projectLocal = project.FR
                } else {
                    projectLocal = project.EN
                }
            })
            console.log('projectLocal', projectLocal)
            return projectLocal
    }

  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // projects array length
  const itemLength = projects.length - 1

  // Previous button for Carousel
  const previousButton = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ?
          itemLength : activeIndex - 1;
      setActiveIndex(nextIndex);
  }

  // Next button for Carousel
  const nextButton = () => {
      if (animating) return;
      const nextIndex = activeIndex === itemLength ?
          0 : activeIndex + 1;
      setActiveIndex(nextIndex);
  }

  // Carousel project Data
  const carouselprojectData = filteredProjects && filteredProjects.map((project) => {
      return (
          <CarouselItem
              key={project.projectId}
              onExited={() => setAnimating(false)}
              onExiting={() => setAnimating(true)}
          >
              <div className="flex flex-col justify-center items-center project-content">
                  <div className="flex flex-col justify-center items-center">
                      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[90%]">
                          <div className="w-full md:w-1/2 siteImage md:mr-[50px] mb-3">
                              <div className="mb-xs-30">
                                  <img src={projectImages[project && project.imgUrl ? project.imgUrl : 0]} />
                              </div>
                          </div>
                          <div className="w-full md:w-1/2 p-3">

                              <div className="mb-5">
                                  <div className="font-bold">Mission</div>
                                  <div className="text-theme-light-400 text-sm">
                                      {project && project.mission ? project.mission.map(m => {
                                          return <div>{m}</div>
                                      }) : ""}
                                  </div>
                              </div>

                              <div className="mb-5 mr-8">
                                  <div className="font-bold">Date</div>
                                  <div className="text-theme-light-400 text-sm">
                                      {project && project.date ? project.date : ""}
                                  </div>
                              </div>
                              
                              
                              <div className="mb-5 mr-8">
                                  <div className="font-bold">Client</div>
                                  <div className="text-theme-light-400 uppercase text-sm">
                                      {project && project.client ? project.client : ""}
                                  </div>
                              </div>
                              
                              <div className="mb-5">
                                  <div className="font-bold">Rôle</div>
                                  <div className="text-theme-light-400 text-sm">{project && project.role ? project.role : ""}</div>
                              </div>
                              <div className="mb-5">
                                  <div className="font-bold">Technologies utilisées</div>
                                  <div className="text-theme-light-400 text-sm">{project && project.usedTechnos ? project.usedTechnos : ""}</div>
                              </div>

                              {project && project.siteUrl && 
                                  <div className="mb-5 w-full">
                                      <div className='w-full md:w-1/2 text-center flex justify-start'>
                                          <a href={project && project.siteUrl ? project.siteUrl : "/"} className='text-white group border-2 px-6 py-3 my-2 flex items-center bg-theme-dark-100 border-theme-dark-100 hover:bg-pink-600 hover:border-pink-600' target="_blank" >
                                              Voir le site
                                              <span className='group-hover:transition transform group-hover:translate-x-1 duration-300'>
                                                  <HiArrowNarrowRight className='ml-3'/>
                                              </span>
                                          </a>
                                      </div>
                                  </div>
                              }

                          </div>
                      </div>
                  </div>
              </div>

          </CarouselItem>
      );
  });


  return (
      <section id="project" className='project w-full'>
            <Carousel previous={previousButton} next={nextButton}
              activeIndex={activeIndex}>
              <CarouselIndicators items={filteredProjects}
                  activeIndex={activeIndex}
                  onClickHandler={(newIndex) => {
                      if (animating) return;
                      setActiveIndex(newIndex);
                  }} />
              {carouselprojectData}
              <CarouselControl directionText="Prev"
                  direction="prev" onClickHandler={previousButton} />
              <CarouselControl directionText="Next"
                  direction="next" onClickHandler={nextButton} />
          </Carousel>
      </section>
  )
};

export default Work;