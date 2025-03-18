import ChangeOrder from "./PageChange"
import {useForm} from "react-hook-form"
import { EducationInformation } from "./UserData"
import {validateUniversity, validateProfession} from "../logics/validate"
const EducationInfo = ({nextPage,  prevPage,setUserData ,userData} : ChangeOrder) => {
  const {register, handleSubmit} = useForm<EducationInformation>(
    {
      defaultValues: userData.education_information
    }
  )

  const onSubmit = (data: EducationInformation) => {
    if (setUserData) setUserData(data);
    () => nextPage
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2>Education Information</h2>
        <input type="text" placeholder="Enter University or Collage" {...register('university', {
          validate: validateUniversity

        })}/>
        <input type="text" placeholder="Enter Your Field" {...register("field", {
          validate: validateProfession
        })}/>
        <textarea name="" id="" placeholder="About The Campus" style={{height: "100px"}}></textarea>
        <div className="btn-container">

            <button className="previous btn" onClick={prevPage}>Previous</button>
            <button type="submit" className="next btn">Next</button>
        </div>
      </form>
    </div>
  )
}

export default EducationInfo
