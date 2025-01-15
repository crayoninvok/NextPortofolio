// Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-0">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
