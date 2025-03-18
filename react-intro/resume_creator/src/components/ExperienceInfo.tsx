import { useForm } from "react-hook-form";
import ChangeOrder from "./PageChange"
import { ExperienceInformation, UserData } from "./UserData";
import {validateProfession, validateOrganization, validateDescription} from '../logics/validate';

const ExperienceInfo = ({nextPage,  prevPage, setUserData, userData, } : ChangeOrder) => {
  const {register, handleSubmit} = useForm<ExperienceInformation>(
    {
      defaultValues: userData.experience_information
    }
  );
  const onSubmit = (data: ExperienceInformation) => {
    const new_data : UserData = {...userData}
    new_data["experience_information"] = data;
    if (setUserData) setUserData(data);
    () => nextPage
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2>Experience Information</h2>
        <input type="text" placeholder="Enter Organization Name" {...register("company", {
          validate: validateOrganization
        })}/>
        <input type="text" placeholder="Enter Your Role" {...register("position", {
          validate: validateProfession
        })}/>
        <textarea  placeholder="Enter What You did" style={{height: "100px"}} {...register("about", {
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
