import { useState, useEffect } from 'react';
import './components.css';
import { Envelope, ChevronDown, Telephone, GeoAltFill, Linkedin, Github ,Instagram,Whatsapp } from "react-bootstrap-icons";

function Sidebar() {
    const socialMediaContent = [
        {
            icon: <Envelope color='#0075B6' />,
            label: 'Email:',
            value: 'rubabfatima9197@gmail.com'
        },
        {
            icon: <Telephone color='#0075B6' />,
            label: 'Contact:',
            value: '03162804549'
        },

        {
            icon: <GeoAltFill color='#0075B6' />,
            label: 'Location:',
            value: 'Karachi, Pakistan'
        }
    ];

    const [showContent, setShowContent] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className={`container-fluid w-100 custom-bg d-flex py-lg-5 py-2 flex-column gap-3 rounded-4 align-items-lg-center sidebar-container  ${isMobile ? 'mobile' : 'desktop'}`}
            style={{

                overflow: 'hidden', // desktop always open
                transition: 'max-height 0.5s ease'
            }}
        >
            <div className="w-100 d-flex gap-3 flex-lg-column   mt-2 align-items-center position-relative">
                <div className="imagecontainer custom-shadow"></div>
                {isMobile && (
                    <div className="arrowdown" onClick={() => setShowContent(!showContent)}>
                        <ChevronDown className={showContent ? "rotate-icon" : ""} />
                    </div>
                )}
                <div className="contentofsidebar">
                    <h1>Rubab Fatima</h1>
                    <p className="text-white ">Web Developer</p>
                </div>
            </div>
            <div className={`lineseparater ms-2 ms-lg-0 ${isMobile && !showContent ? 'hidden' : ''}`}></div>
            <div
                className={` w-100 flex-column social-media ${isMobile && !showContent ? 'hidden' : ''}`}
            >
                {socialMediaContent.map((content, index) => (
                    <div key={index} className="d-flex gap-3 mt-lg-3  ms-3">
                        <div className="mt-2 px-3 py-2 rounded-2 d-flex align-items-center justify-content-center custom-shadow">
                            {content.icon}
                        </div>
                        <div className="mt-2">
                            <p> {content.label}</p>
                            <h6 className="text-break " style={{ marginTop: '-18px', letterSpacing: '0.5px' }}>{content.value}</h6>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex gap-2 mt-lg-5  justify-content-center mb-2">
                <div className="d-flex align-items-center justify-content-center rounded-circle sociallinks">
                    <a href='https://www.linkedin.com/in/rubab-fatima-579407233/' className='mb-1'><Linkedin color=' rgb(138, 137, 137)' size={18} /></a></div>
                <div className="d-flex align-items-center justify-content-center rounded-circle sociallinks">
                    <a href='https://github.com/Rubab411/'className='mb-1'><Github color=' rgb(138, 137, 137)' size={18} /></a> </div>
                <div className="d-flex align-items-center justify-content-center rounded-circle sociallinks">
                    <a href='https://www.instagram.com/team__dsx?igsh=NDAyd2x6MmMzZml0'className='mb-1'><Instagram color=' rgb(138, 137, 137)' size={18} /></a></div>
                <div className="d-flex align-items-center justify-content-center rounded-circle sociallinks">
                    <a href='https://wa.me/03162804549' className='mb-1'>
                        <Whatsapp color=' rgb(138, 137, 137)' size={18} />
                    </a>
                    </div>
            </div>
        </div>
    );
}

export default Sidebar;
