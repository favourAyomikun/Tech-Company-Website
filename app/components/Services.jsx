import { FaCode } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="flex justify-center text-4xl font-semibold">Our Services</h2>
          <span className="block my-2 h-1 w-16 bg-gray-400 mx-auto"></span>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod.
            <br />
            Veniam quis notru exercitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* START SINGLE SERVICE BOX */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer">
            <div className="flex justify-center text-4xl text-blue-500">
              <FaCode />
            </div>
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Web Design</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam justo et nibh venenati.
              </p>
            </div>
          </div>
          {/* END SINGLE SERVICE BOX */}

          {/* START SINGLE SERVICE BOX */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer">
            {" "}
            <div className="flex justify-center text-4xl text-blue-500">
              <FaCode />
            </div>
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Responsive Design</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam justo et nibh venenati.
              </p>
            </div>
          </div>
          {/* END SINGLE SERVICE BOX */}

          {/* START SINGLE SERVICE BOX */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer">
            {" "}
            <div className="flex justify-center text-4xl text-blue-500">
              <FaCode />
            </div>
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Artficial Intelligence</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam justo et nibh venenati.
              </p>
            </div>
          </div>
          {/* END SINGLE SERVICE BOX */}

          {/* START SINGLE SERVICE BOX */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer">
            {" "}
            <div className="flex justify-center text-4xl text-blue-500">
              <FaCode />
            </div>
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Web Development</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam justo et nibh venenati.
              </p>
            </div>
          </div>
          {/* END SINGLE SERVICE BOX */}

          {/* START SINGLE SERVICE BOX */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer">
            {" "}
            <div className="flex justify-center text-4xl text-blue-500">
              <FaCode />
            </div>
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Robotics</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam justo et nibh venenati.
              </p>
            </div>
          </div>
          {/* END SINGLE SERVICE BOX */}

          {/* START SINGLE SERVICE BOX */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer">
            {" "}
            <div className="flex justify-center text-4xl text-blue-500">
              <FaCode />
            </div>
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Data Analysis</h4>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam justo et nibh venenati.
              </p>
            </div>
          </div>
          {/* END SINGLE SERVICE BOX */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
