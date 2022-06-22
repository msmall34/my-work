import React, { Component } from "react";
import Slider from "react-slick";
import {HiArrowNarrowRight} from 'react-icons/hi';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }


  render() {
    return (
      <div id="carousel">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
            
                 {this.props.items && this.props.items.map(item =>  <div className="flex flex-col justify-center items-center project-content">
                  <div className="flex flex-col justify-center items-center">
                      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[90%]">
                          <div className="w-full md:w-1/2 siteImage md:mr-[50px] mb-3">
                              <div className="mb-xs-30">
                                  <img src={this.props.images[item.imgUrl]} />
                              </div>
                          </div>
                          <div className="w-full md:w-1/2 p-3">

                              <div className="mb-5">
                                  <div className="font-bold">Mission</div>
                                  <div className="text-theme-light-400 text-sm">
                                      {item && item.mission ? item.mission.map(m => {
                                          return <div>{m}</div>
                                      }) : ""}
                                  </div>
                              </div>
                              
                              <div className="mb-5">
                                  <div className="font-bold">Technologies utilisées</div>
                                  <div className="text-theme-light-400 text-sm">{item && item.usedTechnos ? item.usedTechnos : ""}</div>
                              </div>

                              {item && item.siteUrl && 
                                  <div className="mb-5 w-full">
                                      <div className='w-full md:w-1/2 text-center flex justify-start'>
                                          <a href={item && item.siteUrl ? item.siteUrl : "/"} className='text-white group border-2 px-6 py-3 my-2 flex items-center bg-theme-dark-100 border-theme-dark-100 hover:bg-pink-600 hover:border-pink-600' target="_blank" >
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
              </div> )}
        </Slider>

        <h4>Second Slider</h4>

        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
            
                {this.props.items && this.props.items.map(item => 
                    <div className="card">
                        <div className="title">
                            <h1>{item && item.client ? item.client : ""}</h1>
                            <h2>"{item && item.role ? item.role : ""}"</h2>
                        </div>
                        <div className="content">
                            <div className="social">
                                <span className="font-semibold mr-1">Date : </span>
                                <span className="">{item && item.date ? item.date : ""}</span>
                            </div>
                            
                            <div className="social">
                                <span className="font-semibold mr-1">Date : </span>
                                <span className="">{item && item.date ? item.date : ""}</span>
                            </div>
                        </div>
                        <div className="deco"></div>
                    </div>)}
            

        </Slider>

      </div>
    );
  }
}