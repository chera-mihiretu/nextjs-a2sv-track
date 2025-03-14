type MyForm = {
    name: string;
    email: string;
    message: string;
}

const nameValidation = (value: string) => {
    return value.length > 3 || "Name should be more than 3 characters";
};

const emailValidation = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Please enter a valid email";
};

const messageValidation = (value: string) => {
    return value.length  > 0 || "Please enter a message";
};

const sumbitForm = async (data : MyForm)  =>  {
   await setTimeout(() => {
        console.log(data);
    }, 3000);

    console.log(data)
}



export type { MyForm };
export { nameValidation, emailValidation, messageValidation, sumbitForm };
