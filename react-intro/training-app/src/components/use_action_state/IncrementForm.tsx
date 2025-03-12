import React, { useActionState } from 'react'


function increament(prevState: number, formData: FormData) {
    return prevState + 1;

}
const IncrementForm = () => {
    const [state, formAction, isPending] = useActionState(increament, 0);
  return (
    <div>
        <form action={formAction} style={{display: 'flex', flexDirection: 'column'}}>
            {state}
            <button type="submit" disabled={isPending}>Increment</button>
            
        </form>
    </div>
  )
}

export default IncrementForm
