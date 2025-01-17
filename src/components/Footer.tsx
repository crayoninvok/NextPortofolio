import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-0">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Dzaky Athariq Ferreira. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://instagram.com/dzakyathariqf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
            aria-label="Twitter"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://linkedin.com/dzakyathariqferreira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
