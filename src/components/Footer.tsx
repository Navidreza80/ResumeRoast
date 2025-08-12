export default function Footer() {
  return (
    <footer className="text-gray-400 py-8 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} ResumeRoast. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
