function ContactUs() {
  return (
<section className="w-full min-h-[80vh] grid md:grid-cols-2">

    <div className="bg-black text-white p-6 space-y-4">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-300">
          We'd love to hear from you! Fill out the form and we'll get back to you.
        </p>

        <div className="space-y-4">

          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-300">support@example.com</p>
          </div>

          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-300">+234 000 000 0000</p>
          </div>

          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-300">Lagos, Nigeria</p>
          </div>

          <div>
            <h3 className="font-semibold">Working Hours</h3>
            <p className="text-gray-300">Mon - Fri: 9AM - 5PM</p>
          </div>

        </div>

      </div>

      <div className="bg-white p-10">

        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

        <form className="space-y-5">

          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border p-3 rounded-md focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded-md focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full border p-3 rounded-md focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              
              placeholder="Write your message..."
              className="w-full border p-3 rounded-md focus:outline-none focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactUs;

