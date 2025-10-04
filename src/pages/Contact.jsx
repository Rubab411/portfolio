import Sidebar from '../components/Siderbar';
import Header from '../components/Header';
import { Whatsapp, Instagram, Facebook, Linkedin, Github } from 'react-bootstrap-icons';
import './pages.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Portfolio() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_946kj3n",   // ✅ tumhara Service ID
            "template_gu340xn",  // ✅ tumhara Template ID
            form.current,
            "Jh44lXGPuBumdusAo"  // ✅ tumhara Public Key
        ).then(
            (result) => {
                console.log("Message sent:", result.text);
                alert("Message sent successfully!");
                form.current.reset(); // ✅ inputs clear kar dega
            },
            (error) => {
                console.log("Error:", error.text);
                alert("Failed to send message.");
            }
        );
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row mainrow d-flex flex-strech justify-content-center px-3 gap-3">
                <div className="col-lg-3 col-12 px-0 sidebardiv">
                    <Sidebar />
                </div>
                <div className="col-lg-8 col-12 p-4 rounded-4 custom-bg mx-lg-0" style={{ position: 'relative' }}>
                    <div className="p-0">
                        <Header />
                    </div>
                    <div className="aboutsection mt-lg-5 p-0">
                        <h1 className='underline'>Contact</h1>
                        <div className="section mt-5">
                            <h2 className='text-center'>I’m just a message away</h2>

                            {/* ✅ EmailJS Form */}
                            <form ref={form} onSubmit={sendEmail} className='mt-5'>
                                <div className="d-flex w-100 gap-5">
                                    <div className="form-floating mb-3 w-50">
                                        <input 
                                            type="text" 
                                            name="name"   // ✅ EmailJS template me {{name}} use ho raha hai
                                            className="form-control text-white bg-transparent mt-2" 
                                            id="floatingName" 
                                            placeholder="Your name" 
                                            required 
                                        />
                                        <label htmlFor="floatingName" className='text-white'>Name</label>
                                    </div>
                                    <div className="form-floating mb-3 w-50">
                                        <input 
                                            type="email" 
                                            name="email"   // ✅ EmailJS template me {{email}} use ho raha hai
                                            className="form-control text-white bg-transparent mt-2" 
                                            id="floatingEmail" 
                                            placeholder="name@example.com" 
                                            required 
                                        />
                                        <label htmlFor="floatingEmail" className='text-white'>
                                            <h3 style={{ fontSize:'15px' }}>Email address</h3>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3 w-100">
                                    <textarea 
                                        name="message"  // ✅ template ke sath match karega
                                        className='form-control text-white bg-transparent mt-2' 
                                        style={{ height: '130px' }} 
                                        id='messageInput' 
                                        placeholder="Leave a message" 
                                        required 
                                    />
                                    <label htmlFor="messageInput" className='text-white'>Leave a message</label>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className='button' type='submit'>Send</button>
                                </div>
                            </form>

                            {/* ✅ Social Media Links */}
                            <div className="social-media d-flex gap-3 justify-content-center mb-lg-0 mb-5" style={{ marginTop:'120px' }}>
                                <a href='https://wa.me/03162804549'>
                                    <Whatsapp size={30} color="#25D366" style={{ filter: "drop-shadow(3px 3px 5px rgba(158, 147, 147, 0.4))" }} />
                                </a>
                                <a href='https://www.instagram.com/team__dsx?igsh=NDAyd2x6MmMzZml0'>
                                    <Instagram size={30} color="#E4405F" style={{ filter: "drop-shadow(3px 3px 5px rgba(158, 147, 147, 0.4))" }} />
                                </a>
                                <Facebook size={30} color="#1877F2" style={{ filter: "drop-shadow(3px 3px 5px rgba(158, 147, 147, 0.4))" }} />
                                <a href='https://www.linkedin.com/in/rubab-fatima-579407233/'>
                                    <Linkedin size={30} color="#0A66C2" style={{ filter: "drop-shadow(3px 3px 5px rgba(158, 147, 147, 0.4))" }} />
                                </a>
                                <a href='https://github.com/Rubab411/'>
                                    <Github size={30} color="#070505ff" style={{ filter: "drop-shadow(3px 3px 5px rgba(158, 147, 147, 0.4))" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;
