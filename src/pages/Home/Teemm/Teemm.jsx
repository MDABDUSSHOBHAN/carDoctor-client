import React from 'react';
import team from '../../../assets/images/team/1.jpg';
import team1 from '../../../assets/images/team/2.jpg'
import team2 from '../../../assets/images/team/3.jpg';
import link from '../../../assets/images/about_us/social.png';
const Teemm = () => {
    return (
        <div>
            <div>
                <h3 className='text-5xl font-bold'>Meet Out Team</h3>
                <p className='mt-2'>Lorem ipsum dolor, sit amet nsequatur velit illo, est nostrum doloremque  hic provident?</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={team} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-start'>Engine Expert</p>
                        <div className="card-actions justify-start">
                            <img src={link} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={team1} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-start'>Engine Expert</p>
                        <div className="card-actions justify-start">
                            <img src={link} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={team2} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-start'>Engine Expert</p>
                        <div className="card-actions justify-start">
                            <img src={link} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Teemm;