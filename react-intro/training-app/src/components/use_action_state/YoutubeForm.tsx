import { useForm, useFieldArray } from 'react-hook-form';

type YoutubeFormData = {
  username: string;
  email: string;
  channel: string;
  phNumber : {
    number: string;
  }[];
};

const YoutubeForm = () => {
  const { register, control, handleSubmit} = useForm<YoutubeFormData>({
    defaultValues: {
      phNumber: [{ number: '' }]

    }
  });

  const {fields, append, remove} = useFieldArray({
    name: 'phNumber',
    control
  });

  const onSubmit = (data: YoutubeFormData) => {
    console.log(data);
  };

  return (
    <form 
      style={{ maxWidth: '500px', margin: '0 auto' }} 
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '8px',
          alignItems: 'center'
        }}
      >
        <label htmlFor="username" style={{ fontWeight: 600, textAlign: 'right', padding: '8px' }}>
          Username:
        </label>
        <div>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
            style={{ width: '100%', padding: '8px' }}
          />
          
        </div>

        <label htmlFor="email" style={{ fontWeight: 600, textAlign: 'right', padding: '8px' }}>
          Email:
        </label>
        <div>
          <input
            type="email"
            id="email"
            {...register("email", { 
              required: "Email is required", 
              pattern: { 
              value: /^\S+@\S+\.\S+$/, 
              message: "Email is not valid" 
              } 
            })}
            style={{ width: '100%', padding: '8px' }}
          />
          
          
        </div>

        <label htmlFor="channel" style={{ fontWeight: 600, textAlign: 'right', padding: '8px' }}>
          Channel:
        </label>
        <div>
          <input
            type="text"
            id="channel"
            {...register("channel", { required: "Channel is required" })}
            style={{ width: '100%', padding: '8px' }}
          />
          
        </div>
      </div>


      {
        fields.map((item: any, index: number) => {
          return (
            <div>
              <input type="text" key={item.id} {...register(`phNumber.${index}.number`)}/>

              {index > 0 && <button key={index} onClick={() => remove(index)}>Remove</button>}
            </div>
          );
        })
      }

      <button  onClick={() => append({number: ""})}>Add Number</button>


      <div style={{ padding: '8px', textAlign: 'center' }}>
        <button type="submit" style={{ padding: '8px 16px' }}>Submit</button>
      </div>
    </form>
  );
};

export default YoutubeForm;
