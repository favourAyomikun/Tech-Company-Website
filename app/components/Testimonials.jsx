// import Image from 'next/image';
// import { Carousel } from 'react-responsive-carousel';

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Mark Zuckerberg",
//       title: "CEO of Facebook",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//       image: "/assets/img/testimonial/1.jpg",
//     },
//     {
//       id: 2,
//       name: "Jack Dorsey",
//       title: "CEO of Twitter",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//       image: "/assets/img/testimonial/2.jpg",
//     },
//     {
//       id: 3,
//       name: "Sundar Pichai",
//       title: "CEO of Google",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//       image: "/assets/img/testimonial/3.jpg",
//     },
//   ];

//   return (
//     <section className="what-client-say-area section-padding">
//       <div className="testimonial-section-inner">
//         <div className="container">
//           <Carousel
//             showArrows={true}
//             autoPlay={true}
//             infiniteLoop={true}
//             interval={5000}
//             showThumbs={false}
//             showStatus={false}
//             emulateTouch={true}
//           >
//             {testimonials.map(({ id, name, title, text, image }) => (
//               <div key={id} className="single-testimonial">
//                 <div className="testimonial-author mb-4">
//                   <Image
//                     src={image}
//                     alt={name}
//                     width={100}
//                     height={100}
//                     className="rounded-full mx-auto"
//                   />
//                 </div>
//                 <p className="text-gray-600 mb-4">{text}</p>
//                 <h5 className="font-bold text-lg">{name}</h5>
//                 <h6 className="text-gray-500">{title}</h6>
//               </div>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
