import Sidebar from '../components/Siderbar';
import Header from '../components/Header';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaWordpress, FaNodeJs } from "react-icons/fa";
import { SiBootstrap, SiFigma, SiAdobephotoshop, SiVscodium, SiMongodb, SiExpress, SiMysql, SiCanva, SiVite } from "react-icons/si";
import './pages.css'

function Resume() {
    const Education = [
        {
            institute: 'BBSUL Karachi',
            year: '2022 - 2025',
            courseName: 'Bachelors in Information Technology'
        },
        {
            institute: 'Career Boosting Learning Academy',
            year: '2023',
            courseName: 'Web Development'
        },
        {
            institute: 'Digital Skills Training Program',
            year: '2022',
            courseName: 'Freelancing'
        },
        {
            institute: 'Digital Skills Training Program',
            year: '2022',
            courseName: 'Content Writing'
        },

    ];

    const Experience = [
        {
            profession: 'Web Development Instructor',
            year: 'CBLA Academy — Jan 2023 – July 2025',
            contribution: 'Taught HTML, CSS, JavaScript, React.js, and C/C++. Guided students in building responsive websites and apps, and provided training on WordPress and Elementor.'
        },
        {
            profession: 'WordPress Developer (Freelance Projects)',
            year: 'Self-employed — 2024 – Present',
            contribution: 'Developed responsive websites using Elementor and Astra theme. Customized themes and plugins, delivered projects like FOODWAY, Guest House website, and Digital marketing websites.'
        },
        {
            profession: 'Digital Marketing & Operations Manager',
            year: 'DigitalSkillsXpert — 2025',
            contribution: 'Managed social media campaigns, content strategies, and client projects. Oversaw WordPress websites and supported digital training programs.'
        },
    ];
  const skill = [
    {
        title: 'Core Web Technologies',
        icons: [
            <FaHtml5 color="#E34F26" size={40} />,
            <FaCss3Alt color="#264DE4" size={40} />,
            <FaJsSquare color="#F7DF1E" size={40} />
        ]
    },
    {
        title: 'UI Styling Frameworks',
        icons: [
            <SiBootstrap color="#7952B3" size={40} />
        ]
    },
    {
        title: 'Libraries and Frameworks',
        icons: [
            <FaReact color="#61DAFB" size={40} />,
            <SiExpress color="#000000" size={40} />
        ]
    },
    {
        title: 'Runtime Environment',
        icons: [
            <FaNodeJs color="#339933" size={40} />
        ]
    },
    {
        title: 'Design Tools',
        icons: [
            <SiFigma color="#F24E1E" size={40} />,
            <SiCanva color="#00C4CC" size={40} />,
            <SiAdobephotoshop color="#31A8FF" size={40} />
        ]
    },
    {
        title: 'Database Technologies',
        icons: [
            <SiMongodb color="#47A248" size={40} />,
            <SiMysql color="#4479A1" size={40} />
        ]
    },
    {
        title: 'Development Tools',
        icons: [
            <SiVite color="#646CFF" size={40} />,
            <SiVscodium color="#007ACC" size={40} />
        ]
    },
    {
        title: 'CMS',
        icons: [
            <FaWordpress color="#21759B" size={40} />
        ]
    },
];


    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row mainrow d-flex justify-content-center px-3 gap-3">
                    <div className="col-lg-3 col-12 px-0 sidebardiv">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8 col-12 p-4 rounded-4 custom-bg mx-lg-0" style={{ position: 'relative' }}>
                        <Header />
                        <div className="aboutsection mt-lg-5">
                            <h1 className="mb-4 underline">Resume</h1>

                            {/* Education Timeline */}
                            <h2 className="mb-3">Education</h2>
                            <div className="timeline">
                                {Education.map((item, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <h3>{item.courseName}</h3>
                                            <span style={{color:'#0075B6',fontWeight:'bold'}}>{item.year}</span>
                                            <p>{item.institute}</p>

                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Experience Timeline */}
                            <h2 className="mt-5 mb-3">Experiences</h2>
                            <div className="timeline">
                                {Experience.map((item, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <h3>{item.profession}</h3>
                                            <p style={{color:'#0075B6',fontWeight:'bold'}}>{item.year}</p>
                                            <span>{item.contribution}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/*skill*/}

                            <div className="skills-container">
                                <h2 className="mb-4">Skills</h2>
                                <div className="skills-grid">
                                    {skill.map((skill, index) => (
                                        <div className="skill-card bg-transparent" key={index}>
                                            <h3>{skill.title}</h3>
                                            <div className="icons ">
                                                {skill.icons.map((icon, i) => (
                                                    <span key={i} className="icon text-white ">{icon}</span>
                                                ))}
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
    );
}

export default Resume;
