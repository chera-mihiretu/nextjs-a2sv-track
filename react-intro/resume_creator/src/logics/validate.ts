const validateName = (value: string): true | string => {
    if (!value.trim()) {
        return "Name is required";
    }
    
    // Check that the name only contains letters and spaces
    if (!/^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(value)) {
        return "Enter both first and last  name";
    }
    
    return true;
};


const validateProfession = (value: string): true | string => {
    if (!value.trim()) {
        return "Profession is required";
    }
    
    // Validate that profession only contains letters and spaces
    if (!/^[A-Za-z\s]+$/.test(value)) {
        return "Enter valid profession";
    }
    
    return true ;
};

const validateUniversity = (value : string) => {
    if (!value.trim()) {
        return "University is required";
    }

    if (!/^[A-Za-z\s]+$/.test(value)) {
        return "Enter Real university Name";
    }

    return true;
}


const validateOrganization = (value: string): true | string => {
    if (!value.trim()) {
        return "Organization name is required";
    }

    if (!/^[A-Za-z\s]+$/.test(value)) {
        return "Enter valid organization name";
    }

    return true;
};


const validateDescription = (value: string): true | string => {
    if (!value.trim()) {
        return "Description is required";
    }

    if (value.trim().length < 20) {
        return "Description should be at least 20 characters long";
    }

    return true;
};



export  { validateName, validateProfession, validateUniversity , validateOrganization, validateDescription};