import React from 'react';
import image1 from '../../../assets/images/banner/1.jpg';
import image2 from '../../../assets/images/banner/2.jpg';
import image3 from '../../../assets/images/banner/3.jpg';
import image4 from '../../../assets/images/banner/4.jpg';
const Banner = () => {
    
    return (
        <div>
             <div className="carousel w-full h-[400px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src= {image1}  className="w-full rounded-lg" />
                   
                    <div className="absolute flex h-full items-center
                    
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]
                    ">
                        

                        <div className='text-white space-y-5 w-1/2 pl-12'>
                        <h2 className='text-5xl  font-bold '>
                            Affordable<br/>Price For car<br/> Servicing
                        </h2>
                        <p>A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set
                             time interval or after the vehicle has traveled a certain
                             </p>
                             <div >
                                <button className="btn btn-primary mr-7">Discover More</button>
                                
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                             </div>
                     </div>


                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-6">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

               <div id="slide1" className="carousel-item relative w-full">
                    <img src= {image1}  className="w-full rounded-lg" />
                    <div className="absolute flex h-full items-center
                    
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]
                    ">
                        

                        <div className='text-white space-y-5 w-1/2 pl-12'>
                        <h2 className='text-5xl  font-bold '>
                            Affordable<br/>Price For car<br/> Servicing
                        </h2>
                        <p>A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set
                             time interval or after the vehicle has traveled a certain
                             </p>
                             <div >
                                <button className="btn btn-primary mr-7">Discover More</button>
                                
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                             </div>
                     </div>


                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-6">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src= {image2} className="w-full rounded-lg" />
                    <div className="absolute flex h-full items-center
                    
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]
                    ">
                        

                        <div className='text-white space-y-5 w-1/2 pl-12'>
                        <h2 className='text-5xl  font-bold '>
                            Affordable<br/>Price For car<br/> Servicing
                        </h2>
                        <p>A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set
                             time interval or after the vehicle has traveled a certain
                             </p>
                             <div >
                                <button className="btn btn-primary mr-7">Discover More</button>
                                
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                             </div>
                     </div>


                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                        <a href="#slide1" className="btn btn-circle mr-6">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src= {image3} className="w-full rounded-lg" />
                    <div className="absolute flex h-full items-center
                    
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]
                    ">
                        

                        <div className='text-white space-y-5 w-1/2 pl-12'>
                        <h2 className='text-5xl  font-bold '>
                            Affordable<br/>Price For car<br/> Servicing
                        </h2>
                        <p>A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set
                             time interval or after the vehicle has traveled a certain
                             </p>
                             <div >
                                <button className="btn btn-primary mr-7">Discover More</button>
                                
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                             </div>
                     </div>


                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-6">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src= {image4} className="w-full rounded-lg" />
                    <div className="absolute flex h-full items-center
                    
                    bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]
                    ">
                        

                        <div className='text-white space-y-5 w-1/2 pl-12'>
                        <h2 className='text-5xl  font-bold '>
                            Affordable<br/>Price For car<br/> Servicing
                        </h2>
                        <p>A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set
                             time interval or after the vehicle has traveled a certain
                             </p>
                             <div >
                                <button className="btn btn-primary mr-7">Discover More</button>
                                
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                             </div>
                     </div>


                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-6">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;