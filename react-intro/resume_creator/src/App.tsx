import './App.css'
import EducationInfo from './components/EducationInfo';
import ExperienceInfo from './components/ExperienceInfo';
import PersonalInfo from './components/PersonalInfo';
import {useState} from 'react';
import ProjectInfo from './components/ProjectInfo';
import { EducationInformation, ExperienceInformation, PersonalInformation, ProjectInformation, UserData } from './components/UserData';





function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [userData, setUserData] = useState<UserData>({ 
    personal_information: {} as PersonalInformation, 
    education_information: {} as EducationInformation, 
    experience_information: {} as ExperienceInformation, 
    project_information: {} as ProjectInformation 
  });

  const nextPage = () => {

    setPageNumber((pageNumber + 1) % 4);
  }

  const prevPage = () => {
    if (pageNumber === 0 || pageNumber === 3) {
      return;
    }
    setPageNumber((pageNumber - 1) % 3);
  }

  function setProfessionalInfo(data: PersonalInformation) {
    const new_data : UserData = {...userData}
    new_data["personal_information"] = data;
    setUserData(new_data);
  }

  function setProjectInfo(data : ProjectInformation) {
    const new_data : UserData = {...userData}
    new_data["project_information"] = data;
    setUserData(new_data);
  }

  function setEducationInfo(data : EducationInformation) {
    const new_data : UserData = {...userData}
    new_data["education_information"] = data;
    setUserData(new_data);
  }

  function setExperianceInfo(data : ExperienceInformation) {
    const new_data : UserData = {...userData}
    new_data["experience_information"] = data;
    setUserData(new_data);
  }

  return (
    <>
      {pageNumber === 0 && (
        <div>
            <PersonalInfo nextPage={nextPage} setUserData={setProfessionalInfo} userData={userData}/>
        </div>
        )}
        {pageNumber === 1 && (
          <div>
            <EducationInfo nextPage={nextPage} prevPage={prevPage} setUserData={setEducationInfo} userData={userData}/>
          </div>
        )}
        {pageNumber === 2 && (
          <div>
            <ExperienceInfo nextPage={nextPage} prevPage={prevPage} setUserData={setExperianceInfo}userData={userData}/>
          </div>
        )}

        {pageNumber === 3 && (
          <div>
            <ProjectInfo nextPage={nextPage} prevPage={prevPage} setUserData={setProjectInfo} userData={userData}/>
          </div>
        )}
    </>
  )
}

export default App
