import ChangeOrder from "./PageChange"
import {useForm} from "react-hook-form"
import { EducationInformation } from "./UserData"
import {validateUniversity, validateProfession, validateDescription} from "../logics/validate"
const EducationInfo = ({nextPage,  prevPage,setUserData ,userData} : ChangeOrder) => {
  const {register, handleSubmit, formState : {errors}} = useForm<EducationInformation>(
    {
      defaultValues: userData.education_information
    }
  )

  const onSubmit = (data: EducationInformation) => {
    setUserData && setUserData(data);
    nextPage && nextPage();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2>Education Information</h2>
        <input type="text" placeholder="Enter University or Collage" {...register('university', {
          validate: validateUniversity

        })}/>
        <span style={{color: "red"}}>{errors.university?.message?.toString()}</span>

        <input type="text" placeholder="Enter Your Field" {...register("field", {
          validate: validateProfession
        })}/>
        <span style={{color: "red"}}>{errors.field?.message?.toString()}</span>

        <textarea placeholder="About The Campus" style={{height: "100px"}} {...register("about", {
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

export default EducationInfo
