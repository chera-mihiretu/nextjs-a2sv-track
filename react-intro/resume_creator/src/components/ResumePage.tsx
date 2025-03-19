import './ResumePage.css';
import ChangeOrder from './PageChange';



const ResumePage = ({userData} : ChangeOrder) => {
    return (
        <div className="resume-page card">
            <header className="resume-header">
                <h1>{userData.personal_information.name}</h1>
                <p>{userData.personal_information.profession}</p>
            </header>
            <div className="resume-content">
                <section className="resume-section">
                    <h2 className="section-title">Education</h2>
                    <div className="detail">
                        <h3>{userData.education_information.university}</h3>
                        <p>{userData.education_information.field}</p>
                        <p>{userData.education_information.about}</p>
                    </div>
                </section>
                <section className="resume-section">
                    <h2 className="section-title">Experience</h2>
                    <div className="detail">
                        <h3>{userData.experience_information.company}</h3>
                        <p>{userData.experience_information.position}</p>
                        <p>{userData.experience_information.about}</p>
                    </div>
                </section>
                <section className="resume-section">
                    <h2 className="section-title">Projects</h2>
                    <div className="detail">
                        <h3>{userData.project_information.project}</h3>
                        <p>{userData.project_information.role}</p>
                        <p>{userData.project_information.about}</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ResumePage;
