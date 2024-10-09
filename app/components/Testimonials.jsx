'use client'

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import testimonial_image1 from '../public/testimonial-image1.jpg'
import testimonial_image2 from '../public/testimonial-image2.jpg'
import testimonial_image3 from '../public/testimonial-image3.jpg'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mark Zuckerberg",
      title: "CEO of Facebook",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: testimonial_image1,
    },
    {
      id: 2,
      name: "Jack Dorsey",
      title: "CEO of Twitter",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: testimonial_image2,
    },
    {
      id: 3,
      name: "Sundar Pichai",
      title: "CEO of Google",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: testimonial_image3,
    },
  ];

  return (
    <section>
      <div className="bg-gray-200">
        <div className="container">
          <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          interval={3000}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id}>
                <div className="w-[120px] mb-4 mx-auto mt-2 border-2 border-blue-500 rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                  />
                </div>
                <p className="text-black mb-4">{testimonial.text}</p>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-blue-600 italic uppercase font-medium mb-10">{testimonial.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
