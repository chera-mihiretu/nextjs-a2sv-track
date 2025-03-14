# Resume Creator App


### React + TypeScript + Vite

### The Process of the the app creation 

# Installation 

First We need to set up the application Enviroment 

Go to your prefered directory and open terminal (make sure you have npm installed on your machine)

```bash
npm create vite@create 
``` 
This command will help setup the inviroment for our project 

This  command is followed by several question so, 
- Project name (Enter your project name)
- Framework (Select React)
- Variant (Select Typescript)

After that your project will be created 

Now we need to install node modules for that navigate to your project directory you can do that by 
```bash
cd [PROJECT_NAME]
```

Then install the modules by 

```bash
npm install # This will download all necessary modules for use
```

You can check the app by running 


```bash
npm run dev 
```

Then Go to the given url on the terminal from your browser

### Now it is Time to start working on the Project 

- ##### Remove Every thing in the src/App.jsx 
Your app should look like something like this.
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

# First Step

- ### Create the input Field for personal information

Create a folder called components in the src file and inside that create a component(file)  called PersonalInfo.tsx
```
src
├── App.css
├── App.tsx
├── assets
│   └── react.svg
├── components # This is the new folder 
│   └── PersonalInfo.tsx # the personal information fields component
├── index.css
├── main.tsx
└── vite-env.d.ts
```
