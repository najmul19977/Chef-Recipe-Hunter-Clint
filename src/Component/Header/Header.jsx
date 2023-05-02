import React from 'react';
import image from '../../../src/assets/All_image/pic.jpg';

const Header = () => {
    return (
        <div>
            <div className="header_container">
                <div className="container mt-4 ">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 header_left">
                            <h1 className='mt-5 text-primary'>
                                Chef Hunter
                            </h1>
                            <p className='mt-5'>
                               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, cumque <br /> inventore dignissimos ipsa accusamus iure amet odit natus in <br /> veritatis. Nemo hic earum esse natus aspernatur sapiente <br /> consequuntur impedit?
                            </p>
                            <button className="btn btn-primary mt-5" type="submit">
                                Get Started
                            </button>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <img
                                className="header_img"
                                src={image}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;