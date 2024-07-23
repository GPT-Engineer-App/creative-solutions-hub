import { Link } from "react-router-dom";
import { navItems } from "@/nav-items";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Innovix Solutions</h3>
            <p className="text-sm text-gray-600">
              Empowering your academic and business success with innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-gray-600 hover:text-gray-900">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600">
              Email: info@innovixsolutions.com<br />
              Phone: +1 (123) 456-7890<br />
              Address: 123 Innovation Street, Tech City, 12345
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Innovix Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;