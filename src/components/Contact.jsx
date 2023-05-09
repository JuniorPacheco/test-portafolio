import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then((res) => console.log(res.text))
      .catch((err) => console.log(err));
  };

  return (
    <section className="text-white px-4 py-6 grid sm:grid-cols-2 max-w-[1000px] mx-auto">
      <section>
        <h2 className="text-2xl font-bold">Let’s talk business</h2>
        <p className="text-gray-400 my-4">
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="bg-[#181823] p-2 outline-none"
            id="name"
            type="text"
            name="from_name"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="bg-[#181823] p-2 outline-none"
            id="email"
            type="text"
            name="email"
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-[#181823] p-2 outline-none"
            id="message"
            rows="10"
            name="message"
          ></textarea>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors py-4 font-bold">
          LET’S GET STARTED
        </button>
      </form>
    </section>
  );
};
export default Contact;
