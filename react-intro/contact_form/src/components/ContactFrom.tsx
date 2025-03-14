import {useForm } from 'react-hook-form';
type MyForm = {
    name: string;
    email: string;
    message: string;
}

let count = 0;
const ContactFrom = () => {
    count ++;
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<MyForm>();
    ;

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

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-base-200">
                <form className="card w-96 bg-base-100 shadow-xl" onSubmit={handleSubmit(sumbitForm)}>
                    <div className="card-body">
                        <h2 className="card-title">Contact Person</h2>
                        <input
                            id='name'
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full my-2"
                            {...register("name", {
                                validate: nameValidation
                            })}
                        />
                        <span style={{color: "red"}}>{errors.name?.message}</span>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full my-2"
                            {...register("email", {
                                validate: emailValidation
                            })}
                        />
                        <span style={{color: "red"}}>{errors.email?.message}</span>

                        <textarea
                            placeholder="Message"
                            className="textarea textarea-bordered w-full my-2"
                            style={{ height: "20vh" }}
                            {...register("message", {
                                validate : messageValidation
                            })}

                        ></textarea>
                        <span style={{color: "red"}}>{errors.message?.message}</span>

                            <button type="submit" className="btn btn-primary w-full text-primary" disabled={isSubmitting} >
                                Submit
                            </button>
                    </div>
                </form>
            </div>
        </>
    );
};


export default ContactFrom;