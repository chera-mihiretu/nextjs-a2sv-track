import { useForm } from "react-hook-form";
import ChangeOrder from "./PageChange"
import { ProjectInformation } from "./UserData";
import { validateDescription, validateOrganization, validateProfession } from "../logics/validate";

const ExperienceInfo = ({nextPage,  prevPage, userData, setUserData} : ChangeOrder) => {
  const {register, handleSubmit, formState : {errors}} = useForm<ProjectInformation>(
    {
      defaultValues: userData.project_information
    }
  );


  const onSubmit = (data: ProjectInformation) => {
    const new_data = {...userData}
    new_data["project_information"] = data;
    if (setUserData) setUserData(data);
    nextPage &&  nextPage()
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2>Project Information</h2>
        <input type="text" placeholder="Enter Project Name" {...register("project", {
          validate: validateOrganization
        })}/>
        <span style={{color: "red"}}>{errors.project?.message?.toString()}</span>

        <input type="text" placeholder="Enter Your Role" {...register("role", {
          validate: validateProfession
        })}/>
        <span style={{color: "red"}}>{errors.role?.message?.toString()}</span>

        <textarea placeholder="Enter About The Project" style={{height: "100px"}} {...register("about", {
          validate: validateDescription
        })}></textarea>
        <span style={{color: "red"}}>{errors.about?.message?.toString()}</span>

        <div className="btn-container">
          <button className="previous btn" onClick={prevPage}>Previous</button>
          <button type="submit" className="next btn">Next</button>
        </div>
      </form>
    </div>
  )
}

export default ExperienceInfo
