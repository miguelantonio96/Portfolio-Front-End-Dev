export const ContactMeModal = () => {
  const handleContactMeInfo = (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.name === "") {
      alert("Please fill out all fields");
      return;
    }
    console.log("Thank you for reaching me out");
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-cyan-300">
        Contact Me
      </h1>
      <p className="text-center">
        I am always open to new opportunities and collaborations. If you have
        any questions or just want to say hi, please fill out the form below and
        I will get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleContactMeInfo}
        action=""
        className="text-white flex flex-col gap-4 w-4/5 "
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your Name"
          className="border-1 border-cyan-300 w-full p-2 rounded-sm"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="border-1 border-cyan-300  w-full p-2 rounded-sm"
        />
        <textarea
          placeholder="Comments"
          name="comments"
          className="border-1 border-cyan-300 w-full p-2 rounded-sm"
          rows={5}
          cols="40"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 p-2 rounded-sm cursor-pointer"
        >
          Send
        </button>
      </form>
      <input />
    </>
  );
};
