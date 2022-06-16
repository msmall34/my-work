import React, {useEffect, useState} from "react";
import {
    useParams,
    withRouter, 
} from "react-router-dom";
import Logo from '../assets/msm.svg';
import {HiArrowNarrowRight} from 'react-icons/hi';
import projects from './../datas/projects.json';
require.context('../assets', false, /\.(png|jpe?g|svg)$/)


const Project = (props) => {
    let { projectId } = useParams();
    const [project, setProject] = useState();

    const importAll = (r) => {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }

    // img extensions must be minuscule
    const projectImages = importAll(require.context('../assets/img', false, /\.(png|jpe?g|svg)$/));

    useEffect(() => {
        if(!project) {
            getProjectDetails()
       }
    }, [project]);

    const getProjectsBycurrentLocale = () => {
        let projectLocal;
            projects.map(project => {
                if(props.currentLocale === "fr-FR") {
                    projectLocal = project.FR
                } else {
                    projectLocal = project.EN
                }
            })

            return projectLocal
    }

    const getProjectDetails = () => {
        const filteredProject = getProjectsBycurrentLocale();
        const selectedProject = filteredProject.filter(project => {
            

            return project.projectId === projectId
        })
        setProject(selectedProject[0])
    }

    return (
        <section id="project" className='project w-full'>
         
                <header className="flex justify-between items-center w-full p-3 h-[100px] mb-6 md:mb-0">
                    <a className="logo single-logo" href="/">
                        <div>
                            <img src={Logo} alt='' style={{ width: '85px' }} />
                        </div>
                    </a>
                    <div className="flex justify-end items-center w-[150px]">
                        <button  className="pop" onClick={props.history.goBack}>
                            <div className="svg-icon">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26px" height="14px" viewBox="0 0 26 14" enable-background="new 0 0 26 14" xmlSpace="preserve">
                                <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M9,4h10.6c2.4,0,4.3,1.6,4.3,4s-1.9,4-4.3,4H11"></path>
                                <polygon fill="#000000" points="9,0.2 9,7.9 0.3,4.1 "></polygon>
                                </svg>
                            </div>
                            <p>Back</p>
                        </button>
                    </div>
                </header>


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

            
        </section>
    )
}

export default withRouter(Project) 
