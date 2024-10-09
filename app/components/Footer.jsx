import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaSkype,
  FaCalendar,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 pt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-8">
          {/* START SINGLE WIDGET */}
          <div>
            <h4 className="text-white text-lg mb-4">
              About <span className="text-blue-600">IT COMPANY</span>
            </h4>
            <p className="text-gray-400 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              since the 1500s.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white text-2xl hover:text-blue-400"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="text-white text-2xl hover:text-blue-400"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="text-white text-2xl hover:text-blue-400"
              >
                <FaDribbble />
              </Link>
              <Link
                href="#"
                className="text-white text-2xl hover:text-blue-400"
              >
                <FaSkype />
              </Link>
            </div>
          </div>
          {/* END SINGLE WIDGET */}

          {/* START SINGLE WIDGET */}
          <div>
            <h4 className="text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* END SINGLE WIDGET */}

          {/* START SINGLE WIDGET */}
          <div className="text-center md:text-left"> {/* Added text-center for mobile view */}
            <h4 className="text-white text-lg mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                <div>
                  <h6 className="text-white text-sm">Address</h6>
                  <p className="text-gray-400 text-xs">New Delhi, Delhi</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-400 text-2xl" />
                <div>
                  <h6 className="text-white text-sm">Phone</h6>
                  <p className="text-gray-400 text-xs">+1266-3333-77</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-400 text-2xl" />
                <div>
                  <h6 className="text-white text-sm">Email</h6>
                  <p className="text-gray-400 text-xs">info@your-mail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaGlobe className="text-blue-400 text-2xl" />
                <div>
                  <h6 className="text-white text-sm">Website</h6>
                  <p className="text-gray-400 text-xs">www.sitename.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* END SINGLE WIDGET */}
        </div>
      </div>

      {/* FOOTER BOTTOM AREA */}
      <footer className="bg-gray-700 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm">
            <span className="text-blue-400">Company</span> &copy; 2024 - All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
