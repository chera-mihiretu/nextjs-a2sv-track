import ChangeOrder from "./PageChange"
import {useForm} from "react-hook-form"
import {validateName,  validateProfession} from "../logics/validate"
import { PersonalInformation } from "./UserData"



const PersonalInfo = ({nextPage, setUserData, userData} : ChangeOrder ) => {
  const {register, handleSubmit, formState: {errors}} = useForm<PersonalInformation>(
    {
      defaultValues: userData.personal_information
    }
  )
  
    const onSubmit = (data: PersonalInformation) => {
        if (setUserData) {
          setUserData(data);
        }
        nextPage && nextPage();
      }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Personal Information</h2>
        <input type="text" placeholder="Enter full name" {...register("name", {
          validate: validateName
        })}/>
        <span style={{color: "red"}}>{errors.name?.message?.toString()}</span>


        <input type="text" placeholder="Enter profession" {...register("profession", {
          validate: validateProfession
        })} />

        <span style={{color: "red"}}>{errors.profession?.message?.toString()}</span>

        
        <div className="btn-container">
            <button type="submit" className="btn">Next</button>
        </div>
      </form>
    </div>
  )
}

export default PersonalInfo
