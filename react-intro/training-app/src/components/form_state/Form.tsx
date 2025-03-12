import {useActionState} from 'react'




const MyForm = () => {
    const [data, action, isPending] = useActionState(myFunction, undefined);
  return (
    <div>
      
      <form action={action} style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="firstName">
            Input Your Name
        </label>
        <input type="text" name='firstName' defaultValue={data?.fieldData?.firstName} />
        <button disabled={isPending} type='submit'>Submit</button>
        {data?.message && <p>{data.message}</p>}
        {data?.error && <p style={{color: 'red',}}>{data.error}</p>}
      </form>
    </div>
  )
}

function myFunction(prevState : unknown, myFormData : FormData){
    const firstName = myFormData.get("firstName") as string;
    if (firstName === '') {
        return {
            error: "This is error"
        }

    }
    return  {
        message: "Data submitted",
        fieldData : {firstName}
    }
}

export default MyForm
