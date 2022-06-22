import React, {useEffect, useState} from "react";
import {
    withRouter, 
} from "react-router-dom";
import Carousel from "../components/Carousel";

import {HiArrowNarrowRight} from 'react-icons/hi';

import projects from '../datas/projects.json';
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
        console.log('test')
        console.log('projectImages', projectImages)
        getProjectDetails()
    }, [props.currentLocale]);

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

    const getProjectDetails = () => {
        const filteredProjectsByLocale = getProjectsBycurrentLocale();
        console.log('filteredProjectsByLocale', filteredProjectsByLocale)
        setFilteredProjects(filteredProjectsByLocale)
    }

  return (
      <div>
          {filteredProjects && 
            <section id="work" className='work w-full'>
                <Carousel items={filteredProjects} images={projectImages}/>
            </section>
          }
      </div>
      
  )
};

export default withRouter(Work);