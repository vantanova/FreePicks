function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you use our free-to-play sports prediction
          platform ("the App"). By using the App, you consent to the practices
          described in this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <ul className="list-disc pl-6">
          <li>Account registration data (e.g., username, email)</li>
          <li>Gameplay data (e.g., predictions, scores, rankings)</li>
          <li>Device information (e.g., browser type, operating system)</li>
          <li>Location data (if geolocation is enabled)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6">
          <li>To provide and improve the App</li>
          <li>To personalize your user experience</li>
          <li>To comply with legal obligations</li>
          <li>To monitor for misuse or fraud</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
        <p>
          We do not sell or rent your personal data. We may share information
          with service providers who assist us in operating the App, and with
          legal authorities if required by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cookies and Tracking</h2>
        <p>
          We may use cookies or similar technologies to improve your experience
          and analyze App usage. You can control cookie settings through your
          browser preferences.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information
          from unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Children's Privacy</h2>
        <p>
          The App is not intended for users under the age of 18. We do not
          knowingly collect personal information from children.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
        <p>
          You may request to access, update, or delete your personal information
          by contacting us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-600 underline"
          >
            support@example.com
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. We will notify you of
          any significant changes and revise the date at the top of the policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-600 underline"
          >
            support@example.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
