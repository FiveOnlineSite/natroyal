// import React, { useEffect } from "react";
// import $ from "jquery";
// import "owl.carousel";

// const ContinuousOwlCarousel = () => {
//   useEffect(() => {
//     $(".owl-carousel").owlCarousel({
//       loop: true,
//       margin: 10,
//       autoplay: true,
//       autoplayTimeout: 3000, // Adjust autoplay speed as needed
//       autoplayHoverPause: true,
//       smartSpeed: 1000,
//       responsive: {
//         0: { items: 2 },
//         600: { items: 3 },
//         1000: { items: 5 },
//       },
//     });
//   }, []);

//   return (
//     <div className="owl-carousel owl-theme">
//       {Array.from({ length: 10 }).map((_, index) => (
//         <div
//           key={index}
//           style={{
//             padding: "10px",
//             background: "#ddd",
//             textAlign: "center",
//             height: "100px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           Slide {index + 1}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContinuousOwlCarousel;
