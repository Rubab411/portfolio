import Sidebar from '../components/Siderbar';
import Header from '../components/Header';
import { Eye } from 'react-bootstrap-icons';

import './pages.css'
import p1 from '../assets/images/p1pic.png';
import p2 from '../assets/images/p2pic.png';
import p3 from '../assets/images/p3pic.png';
function Portfolio() {
    const mywork = [
        {
            image: p1,
            title: 'BrandBuno Website',
            Tool: 'WordPress, Elementor',
            link:'https://brandbuno.com/'
        },
        {
            image: p2,
            title: 'Attendance App',
            Tool: 'Reactjs, Bootstrap, PHP, SQL',
        },
        {
            image: p3,
            title: 'Personal Portfolio',
            Tool: 'Reactjs,Bootstrap',
        },
        {
            image: '',
            title: 'Document verification using NFC',
            Tool: 'MERN',
        },
        {
            image: '',
            title: 'Quizz APP',
            Tool: 'Reactjs firebase',
        },
    ]
    return (
        <>

            <div className="container-fluid mt-5 ">

                <div className="row  mainrow d-flex  flex-strech  justify-content-center px-3 gap-3 ">
                    <div className="col-lg-3   col-12  px-0 sidebardiv">
                        <Sidebar />

                    </div>
                    <div className=" col-lg-8 col-12  p-4 rounded-4 custom-bg mx-lg-0  " style={{ position: 'relative' }} >
                        <div className="  p-0 "  >
                            <Header />
                        </div>
                        <div className=" aboutsection mt-lg-5 p-0">
                            <h1 className='underline'>My Work</h1>
                            <div className="categories my-5">
                                <div className="row g-4">
                                    {mywork.map((work, index) => (
                                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                                            <div className="work-card text-center p-3  ">
                                                <div className="work-img-wrapper rounded mb-3">
                                                    <img src={work.image} alt={work.title} className="work-img" />
                                                     {/* Eye icon overlay */}
                                                <a href={work.link} target="_blank" rel="noopener noreferrer" className="overlay-icon">
                                                   <Eye size={30} color="black" style={{filter: 'drop-shadow(2px 2px 2px green)'}}/>
                                                </a>
                                                </div>
                                               
                                                <div className=" ">
                                                    <h3 className='text-white '>{work.title} </h3>
                                                    <p className='text-secondary'>{work.Tool}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Portfolio;