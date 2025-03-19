# Resume Creator App

### React + TypeScript + Vite

### Overview of the App Creation Process

# Installation

To begin, set up the application environment.

Navigate to your preferred directory and open your terminal (ensure that npm is installed on your machine).

```bash
npm create vite@create
```

This command initializes the project environment. It will prompt you with several questions:
- Project name (Enter your desired project name)
- Framework (Choose React)
- Variant (Pick TypeScript)

Once you have answered the prompts, your project will be created.

Next, navigate into your project directory:
```bash
cd [PROJECT_NAME]
```

Then, install the necessary modules:
```bash
npm install # This will download all the required modules for the project
```

To launch the app, use:
```bash
npm run dev
```

After running this command, open the provided URL in your browser.

### Now It’s Time to Start Working on the Project

- ##### Remove Everything in the src/App.jsx  
Your app should now resemble the following structure:
```typescript
import './App.css'

function App() {

  return (
    <>
      
    </>
  )
}

export default App
```

## Step 1: Create the Core Components

After setting up the project environment and initializing the basic files, the next step is to build the main components that collect and display the resume data. Dividing the app into distinct components ensures modularity, easier maintenance, and reusability.

### Component Breakdown

- **PersonalInfo.tsx**  
  Captures the user's personal details such as name, contact information, and a brief summary.

- **EducationInfo.tsx**  
  Gathers educational background and academic achievements, allowing users to detail their academic journey.

- **ExperienceInfo.tsx**  
  Collects employment history and work experience, building a timeline of professional endeavors.

- **ProjectInfo.tsx**  
  Records information about projects, highlighting practical experience and significant accomplishments.

- **ResumePage.tsx**  
  Renders the complete resume by integrating and displaying all the collected data in a well-organized format.

#### Why Create These Components?

- **Separation of Concerns:** Each component manages a specific section of the resume, making the codebase more understandable and maintainable.
- **Scalability & Flexibility:** Individual components can be updated or replaced with minimal impact on the overall application.
- **Reusability:** Once built, these components can be reused in different parts of the app or across multiple projects.

#### Updated Folder Structure

```bash
src  
├── App.tsx  
├── components  
│   ├── EducationInfo.tsx # Handles input for education and academic details  
│   ├── ExperienceInfo.tsx # Handles input for professional experience  
│   ├── PersonalInfo.tsx # Handles personal details input  
│   ├── ProjectInfo.tsx # Handles project-related input  
│   ├── ResumePage.tsx # Displays the final resume  
```
Follow these instructions to build a cohesive resume creator app with clearly defined components.

### Step 2: Passing Data Between the Main and Component Pages

The main component (App) manages the overall user data state and offers helper functions to update specific segments. Each page receives the relevant data along with an updater function via props. This method ensures a single source of truth and promotes consistency across the application.

#### Key Points:
- The App component holds the state for all user data.
- Each form page is given a specific updater function.
- Child components update their section of data through the provided function.
- Navigation between pages is controlled using a page counter.

#### Example of Passing Data:
```typescript
<PersonalInfo 
  nextPage={nextPage} 
  setUserData={setProfessionalInfo} 
  userData={userData}
/>

<EducationInfo 
  nextPage={nextPage} 
  prevPage={prevPage} 
  setUserData={setEducationInfo} 
  userData={userData}
/>
```

In this multi-page form, each component works on its own slice of the data, keeping the resume creator app modular and easy to maintain.

#### Data Flow Example:
- When a user submits their personal information in PersonalInfo.tsx:
  - The form data is validated and then sent back to the App component.
  - The updater function refreshes the global user data state.
  - The nextPage function then moves the user to the following form (e.g., EducationInfo).

### Detailed Data Handling in the PersonalInfo Component

The PersonalInfo component demonstrates how each page in the resume creator app accepts and processes data. By utilizing react-hook-form along with custom validation logic, the component efficiently manages user input. Once the form is submitted, the data is validated, updated in the global state, and the user is navigated to the next page.

Below is a key code snippet illustrating this process:

```typescript
import ChangeOrder from "./PageChange";
import { useForm } from "react-hook-form";
import { validateName, validateProfession } from "../logics/validate";
import { PersonalInformation } from "./UserData";

const PersonalInfo = ({ nextPage, setUserData, userData }: ChangeOrder) => {
  const { register, handleSubmit, formState: { errors } } = useForm<PersonalInformation>({
    defaultValues: userData.personal_information
  });

  const onSubmit = (data: PersonalInformation) => {
    if (setUserData) {
      setUserData(data);
    }
    nextPage && nextPage();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Personal Information</h2>
        <input 
          type="text" 
          placeholder="Enter full name" 
          {...register("name", { validate: validateName })}
        />
        <span style={{ color: "red" }}>
          {errors.name?.message?.toString()}
        </span>

        <input 
          type="text" 
          placeholder="Enter profession" 
          {...register("profession", { validate: validateProfession })}
        />
        <span style={{ color: "red" }}>
          {errors.profession?.message?.toString()}
        </span>

        <div className="btn-container">
          <button type="submit" className="btn">Next</button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
```

This code demonstrates:
- The use of react-hook-form for managing form state and validations.
- Initialization of default values from the user data state.
- A structured onSubmit method that updates the global state and triggers page navigation.

Place this segment accordingly to illustrate how the application manages and manipulates data.

## React Hook Form Integration in the PersonalInfo Component

This section explains how the PersonalInfo component leverages react-hook-form to manage form state and validations.

**Default Values Initialization:**  
The form fields are pre-populated with data from the global state, ensuring that previous inputs are retained:
```typescript
const { register, handleSubmit, formState: { errors } } = useForm<PersonalInformation>({
  defaultValues: userData.personal_information
});
```

**Validation Functions:**  
- **Name Field:** Utilizes the custom `validateName` function to enforce proper formatting of the full name.
- **Profession Field:** Utilizes the custom `validateProfession` function to ensure that the input meets the required criteria.

**Form Handling and Submission:**  
Using the `handleSubmit` method, the `onSubmit` function is triggered to:
- Update the global user data state via an updater callback.
- Call the `nextPage` function to proceed to the next component in the sequence.

**Code Showcase:**  
Below is a segment of the code handling the form submission:
```typescript
<input 
  type="text" 
  placeholder="Enter full name" 
  {...register("name", { validate: validateName })}
/>
<span style={{ color: "red" }}>
  {errors.name?.message?.toString()}
</span>

<input 
  type="text" 
  placeholder="Enter profession" 
  {...register("profession", { validate: validateProfession })}
/>
<span style={{ color: "red" }}>
  {errors.profession?.message?.toString()}
</span>
```

**Error Display:**  
Validation errors are shown immediately below their respective input fields in red, providing instant feedback.

This integration represents an efficient and modular use of react-hook-form, ensuring that the form logic remains clean and easily extendable.

## Resume Page Overview

After collecting all the user input from the individual sections, the ResumePage component displays the complete resume.

### What It Does:
- **Header Section:**  
  Shows the full name and profession gathered from the personal information.

- **Education, Experience, and Projects Sections:**  
  Each section is dynamically filled with its respective data, clearly presenting details like the university name, company, and projects undertaken.

### Key Points:
- The component receives a structured userData object that contains all sections of information.
- It arranges the content into distinct sections with appropriate titles and details.
- The modular design ensures that any updates in the user data are immediately reflected on the resume page.

This approach maintains a clear separation of concerns, with data collection, validation, and display handled separately for easier maintenance and scalability.

### Step 3: Resume Page Review

The ResumePage component represents the final stage of the resume creation process. It consolidates all the information gathered from different sections (Personal, Education, Experience, and Projects) and presents it in a structured layout.

The modular design makes it straightforward to update or modify individual sections without affecting the entire layout.

#### Example Code:
```typescript
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
```

This component takes the structured `userData` object and assigns each segment to its corresponding section. The design ensures that updates in user data (from any of the individual forms) are instantly reflected, making the resume dynamic and responsive.

