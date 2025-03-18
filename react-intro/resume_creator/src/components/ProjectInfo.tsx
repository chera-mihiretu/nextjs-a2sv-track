import { useForm } from "react-hook-form";
import ChangeOrder from "./PageChange"
import { ProjectInformation } from "./UserData";
import { validateDescription, validateOrganization, validateProfession } from "../logics/validate";

const ExperienceInfo = ({nextPage,  prevPage, userData, setUserData} : ChangeOrder) => {
  const {register, handleSubmit} = useForm<ProjectInformation>(
    {
      defaultValues: userData.project_information
    }
  );


  const onSubmit = (data: ProjectInformation) => {
    const new_data = {...userData}
    new_data["project_information"] = data;
    if (setUserData) setUserData(data);
    () => nextPage
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2>Project Information</h2>
        <input type="text" placeholder="Enter Project Name" {...register("project", {
          validate: validateOrganization
        })}/>
        <input type="text" placeholder="Enter Your Role" {...register("role", {
          validate: validateProfession
        })}/>
        <textarea placeholder="Enter About The Project" style={{height: "100px"}} {...register("about", {
          validate: validateDescription
        })}></textarea>
        <div className="btn-container">

            <button className="previous btn" onClick={prevPage}>Previous</button>
            <button type="submit" className="next btn" onClick={nextPage}>Next</button>
        </div>
      </form>
    </div>
  )
}

export default ExperienceInfo
