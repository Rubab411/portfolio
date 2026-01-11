import Sidebar from '../components/Siderbar';
import Header from '../components/Header';
import './pages.css';
import p1 from '../assets/images/p1pic.png';
import p2 from '../assets/images/image.png';

function Blog() {
    const myblog = [
        {
            image: p2,
            title: 'React vs WordPress',
            description: 'Which One Should You Choose for Your Project?',
            link: "https://www.linkedin.com/posts/rubab-fatima-579407233_confused-between-react-or-wordpress-for-your-activity-7415771965140955136-zjrl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpCUm0B7tAgEF6EwJioumTrfs8wPVy5lGs"
        },
    ];

    return (
        <>
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
                            <h1 className='underline'>Blog</h1>
                            <div className="container my-5">
                                <div className="row gap-4">
                                    {myblog.map((item, index) => (
                                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                                            {/* Wrap the whole card in an anchor tag */}
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                <div className="work-card text-center p-3">
                                                    <div className="work-img-wrapper rounded mb-3">
                                                        <img src={item.image} alt={item.title} className="work-img" />
                                                    </div>
                                                    <div>
                                                        <h3 className='text-white'>{item.title}</h3>
                                                        <p className='text-secondary'>{item.description}</p>
                                                    </div>
                                                </div>
                                            </a>
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

export default Blog;
