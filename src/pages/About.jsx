import Sidebar from '../components/Siderbar';
import Header from '../components/Header';
import { CodeSlash, Palette, GraphUp } from 'react-bootstrap-icons';
import { FaWordpress } from "react-icons/fa";
function About() {
    const cardsData = [
        {
            cardIcon: <CodeSlash color='#0075B6' fontSize='28px' />,
            cardTitle: 'Frontend Development',
            description: 'Customized, Modern, responsive interfaces using HTML5, CSS, JavaScript, and React JS and more!'
        },
        {
            cardIcon: <FaWordpress color='#0075B6' fontSize='28px' />,
            cardTitle: 'Wordpress Development',
            description: 'WordPress solutions with custom themes, plugins, and intuitive user experiences.'
        },
        {
            cardIcon: <Palette color='#0075B6' fontSize='28px' />,
            cardTitle: 'Search Engine Optimization',
            description: 'Complete SEO solutions: keyword research, content optimization, backlinks, and on-page/off-page SEO.'
        },
        {
            cardIcon: <GraphUp color='#0075B6' fontSize='28px' />,
            cardTitle: 'Graphics Designing',
            description: 'Creative designs for websites, logos, social media, and more! using tools like Photoshop and Figma to match your brand.'
        }
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
                            <h1 className='underline ' >About Me</h1>
                            <p>Hi there! My name is Rubab. I’m a frontend web developer who enjoys turning ideas into clean and interactive websites.</p>

                            <p> I work with HTML, CSS, JavaScript, React, Bootstrap and other tools to build projects that look great on any device.</p>
                            <p>My core strength is frontend development, but I am also self-learning backend development to become a full-stack developer. At the same time, I’m pursuing a degree in Information Technology, where I explore a wide range of IT concepts and technologies.</p>

                            <p>For services like SEO, WordPress development, or graphic design, I collaborate with trusted professionals in my network to deliver complete solutions — so clients get everything they need in one place.</p>

                            <p> I’m always curious and love learning new things about design and development. If you’d like to chat or collaborate, feel free to reach out!</p>

                            <h2>What I am Doing</h2>
                            <div className="container w-100 p-0 ">
                                <div className="row g-4">
                                    {
                                        cardsData.map((carddata, index) => (
                                            <div className="col-12 col-md-6" key={index}>
                                                <div className="card custom-bg p-2 h-100 custom-shadow ">
                                                    <div className="d-flex align-items-center ms-3">
                                                        <div>{carddata.cardIcon}</div>
                                                        <div className="card-header text-white fs-5 ms-2"><h3>{carddata.cardTitle}</h3></div>
                                                    </div>
                                                    <div className="card-body text-white text-center">
                                                       <p style={{color:'white'}}> {carddata.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                    

                                
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default About;