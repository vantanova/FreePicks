function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-white">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-6">
        Have a question, suggestion, or issue? We’d love to hear from you. Fill
        out the form below or reach out directly using the contact information
        provided.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Other Ways to Reach Us</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-600 underline"
          >
            support@example.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
