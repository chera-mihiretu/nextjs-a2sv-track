
const YoutubeForm = () => {
  return (
    <>
    <form style={{ maxWidth: '500px', margin: '0 auto' }}>
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
        <input type="text" id="username" name="username" style={{ width: '100%', padding: '8px' }} />
        
        <label htmlFor="email" style={{ fontWeight: 600, textAlign: 'right', padding: '8px' }}>
          Email:
        </label>
        <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px' }} />
        
        <label htmlFor="channel" style={{ fontWeight: 600, textAlign: 'right', padding: '8px' }}>
          Channel:
        </label>
        <input type="text" id="channel" name="channel" style={{ width: '100%', padding: '8px' }} />

        
      </div>

      <div style={{ padding: '8px', textAlign: 'center' }}>
        <button type="submit" style={{ padding: '8px 16px' }}>Submit</button>
      </div>
    </form> 
    </>
  );
}

export default YoutubeForm

