function Footer() {
  return (
    <footer
      className="rounded-lg shadow-sm m-4 absolute bottom-0"
      style={{ left: "50%", transform: "translate(-50%, 0)" }}
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400">
          <a href="#" className="hover:underline">
            FreePicks
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 ml-8 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="faq" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="privacy" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="terms" className="hover:underline me-4 md:me-6">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
