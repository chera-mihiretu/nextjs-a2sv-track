interface PersonalInformation {
    name: string;
    profession: string;
}


interface EducationInformation {
    university: string;
    field: string;
    about: string;
  }
  interface ExperienceInformation {
        company: string;
        position: string;
        about: string;
      }

      interface ProjectInformation {
        project: string;
        role: string;
        about: string;
      }
  


interface UserData {
  personal_information : PersonalInformation
  education_information : EducationInformation
  experience_information : ExperienceInformation
  project_information : ProjectInformation
}

export type {UserData, PersonalInformation, EducationInformation, ExperienceInformation, ProjectInformation}


