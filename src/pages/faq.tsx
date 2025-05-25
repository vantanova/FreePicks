function FAQAbout() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">About & FAQ</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About This App</h2>
        <p>
          Our app is a free-to-play sports prediction platform built for fun,
          friendly competition, and fan engagement. Users can make picks on real
          sporting events, earn points, and compete on leaderboards—without
          spending or winning any real money.
        </p>
        <p className="mt-2">
          We are committed to staying compliant with gambling laws, especially
          in jurisdictions like Washington State. That means no betting, no cash
          prizes, and no paid features—just bragging rights and sports fandom.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Frequently Asked Questions
        </h2>

        <div className="mb-4">
          <h3 className="font-semibold">Is this app considered gambling?</h3>
          <p>
            No. There is no wagering, no monetary consideration, and no prizes
            of real-world value. The app is purely for entertainment purposes
            and complies with relevant laws.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Can I win money or rewards?</h3>
          <p>
            No. The app does not offer real prizes, gift cards, or anything of
            material value. All points and badges are virtual and
            non-redeemable.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Is it really free?</h3>
          <p>
            Yes. There are no entry fees, no in-app purchases, and no paid
            upgrades. The experience is 100% free to use.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Do I have to be 18 to use it?</h3>
          <p>
            Yes. You must be at least 18 years old to participate, even though
            the app does not involve gambling.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Is this app legal in my state?</h3>
          <p>
            The app is intended to comply with U.S. laws, including strict
            jurisdictions like Washington State. However, we recommend checking
            your local laws. Access may be restricted in certain areas.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">What data do you collect?</h3>
          <p>
            We collect basic account info and usage data as outlined in our{" "}
            <a href="/privacy" className="text-blue-600 underline">
              Privacy Policy
            </a>
            . We do not sell your data or collect sensitive personal info.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">How can I contact support?</h3>
          <p>
            You can reach us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-600 underline"
            >
              support@example.com
            </a>{" "}
            with any questions or concerns.
          </p>
        </div>
      </section>
    </div>
  );
}

export default FAQAbout;
