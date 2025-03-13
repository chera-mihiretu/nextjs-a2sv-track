const ContactFrom = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <form className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Contact Person</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full my-2"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full my-2"
                    />
                    <textarea
                        placeholder="Message"
                        className="textarea textarea-bordered w-full my-2"
                        style={{ height: "20vh" }}
                    ></textarea>
                    <div className="card-actions justify-end">
                        <button type="button" className="btn btn-primary w-full text-primary">
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactFrom;
