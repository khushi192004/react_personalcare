import React from "react";


const Testimonials = [
  {
    name: "Emma Beauty",
    feedback:
      "I absolutely adore the Rosewater Hydrating Mist! It's become an essential part of my skincare routine. The mist is so refreshing and leaves my skin feeling instantly hydrated. The subtle rose scent is divine, and it's a wonderful pick-me-up throughout the day. Highly recommend!",
    image: "assets/images/avatar_4.png",
    rating: 4.5,
  },
  {
    name: "Mark",
    feedback:
      "I've tried numerous facial mists, but the Glowify Rosewater Hydrating Mist is on another level. It's incredibly soothing and gives my skin an instant boost of hydration. I love how it leaves my face feeling rejuvenated and refreshed. It's become a must-have for me, especially during the hot summer months.",
    image: "assets/images/avatar_5.png",
    rating: 4.5,
  },
  {
    name: "Sarah Cutie",
    feedback:
      "I have sensitive skin, and finding a mist that doesn't irritate my skin has been a challenge. But the Glowify Rosewater Hydrating Mist is a game-changer! It's so gentle and calming, and it never causes any redness or irritation. I use it as a toner and throughout the day to keep my skin hydrated. It's a holy grail product for me!",
    image: "assets/images/avatar_6.png",
    rating: 5,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center space-x-1 text-pink-500 text-lg">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {halfStar && <span>☆</span>}
      <span className="text-gray-500 text-sm ml-1">({rating}/5)</span>
    </div>
  );
};

const Testimonial = () => {
  return (
    <>
     
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="space-y-6">
          {Testimonials.map((Testimonial, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105"
            >
              {/* Profile + Name + Rating Row */}
              <div className="flex items-center space-x-4">
                <img
                  src={Testimonial.image}
                  alt={Testimonial.name}
                  className="w-14 h-14 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {Testimonial.name}
                  </h4>
                  {renderStars(Testimonial.rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mt-4 leading-relaxed">
                {Testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
     
    </>
  );
};

export default Testimonial;
