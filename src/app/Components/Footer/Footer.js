import Image from 'next/image';
import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import Logo from "../../assets/logo-light.png"

const Footer = () => {
    return (
        <div >
            <div className="bg-black text-white p-12">
                <div className="lg:w-4/5 flex mx-auto">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <Image src={Logo} alt='Logo' />
                                <p className=' text-lg font-semibold mt-3'>
                                    A108 Adam Street <br />
                                    NY 535022, USA<br /><br />
                                    <strong className='text-orange-600'>Phone:</strong> +1 5589 55488 55<br />
                                    <strong className='text-orange-600'>Email:</strong> info@example.com<br />
                                </p>
                                {/* <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4 className='text-xl font-bold'>Useful Links</h4>
                            <ul>
                                <li className='flex gap-2 items-center my-1'><GoChevronRight className='text-[#5BD9B3] text-xl' /> <a href="#" className='hover:text-[#5BD9B3]'>Home</a></li>
                                <li className='flex gap-2 items-center my-1'><GoChevronRight className='text-[#5BD9B3] text-xl' /> <a href="#" className='hover:text-[#5BD9B3]'>About us</a></li>
                                <li className='flex gap-2 items-center my-1'><GoChevronRight className='text-[#5BD9B3] text-xl' /> <a href="#" className='hover:text-[#5BD9B3]'>Services</a></li>
                                <li className='flex gap-2 items-center my-1'><GoChevronRight className='text-[#5BD9B3] text-xl' /> <a href="#" className='hover:text-[#5BD9B3]'>Terms of service</a></li>
                                <li className='flex gap-2 items-center my-1'><GoChevronRight className='text-[#5BD9B3] text-xl' /> <a href="#" className='hover:text-[#5BD9B3]'>Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4 className='text-xl font-bold'>Popular Courses</h4>
                            <ul>
                                <li className='flex gap-2 items-center my-1'><GoChevronRight className='text-[#5BD9B3] text-xl' /> <a href="#" className='hover:text-[#5BD9B3]'>Web Development</a></li>
                                <li className='flex gap-2 items-center my-1'><GoChevronRight className='text-[#5BD9B3] text-xl' /> <a href="#" className='hover:text-[#5BD9B3]'>Product Management</a></li>
                                <li className='flex gap-2 items-center my-1'><GoChevronRight className='text-[#5BD9B3] text-xl' /> <a href="#" className='hover:text-[#5BD9B3]'>Web Design</a></li>
                                <li className='flex gap-2 items-center my-1'><GoChevronRight className='text-[#5BD9B3] text-xl' /> <a href="#" className='hover:text-[#5BD9B3]'>Marketing</a></li>
                                <li className='flex gap-2 items-center my-1'><GoChevronRight className='text-[#5BD9B3] text-xl' /> <a href="#" className='hover:text-[#5BD9B3]'>Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4 className='text-lg font-semibold'>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p> <br />
                            <form action="" method="post">
                                <input type="email" name="email" className='rounded-sm' /> <br /><input type="submit" value="Subscribe" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;