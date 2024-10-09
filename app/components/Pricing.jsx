import React from "react";

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Starter",
      price: 59,
      features: [
        "Basic Updates",
        "Basic Features",
        "Community Support",
        "10 domain user",
        "Sub-domain support",
        "10 FTP account",
      ],
    },
    {
      id: 2,
      title: "Premium",
      price: 99,
      features: [
        "Advanced Updates",
        "Premium Features",
        "Priority Support",
        "20 domain users",
        "Full sub-domain support",
        "20 FTP accounts",
      ],
    },
    {
      id: 3,
      title: "Ultimate",
      price: 159,
      features: [
        "All Updates",
        "All Features",
        "24/7 Support",
        "Unlimited domain users",
        "Full sub-domain support",
        "Unlimited FTP accounts",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container">
        <div>
          <div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Our Pricing Plan</h2>
              <span className="block my-2 mx-auto w-16 h-1 bg-gray-400"></span>
              <div className="text-gray-600">
                <div>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ation Lorem ipsum dolor sit amet.
                </div>
                <div>Veniam quis notru exercit</div>.
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.id}>
              <div className="text-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-lg font-bold">{plan.title}</div>
                <div className="my-4">
                  <div className="text-4xl font-semibold">
                    <sub className="text-2xl">$</sub> {plan.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span>per month</span>
                  </div>
                </div>
                <div className="my-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  href="#"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
