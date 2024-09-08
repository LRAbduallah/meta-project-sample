import React from 'react';

export const testimonialData = [
  {
    id: 1,
    image: "/images/reviewer1.png",
    name: "John Doe",
    rating: "5/5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    image: "/images/reviewer2.png",
    name: "Jane Smith",
    rating: "4/5",
    text: "Donec massa massa, semper sed enim at, faucibus mattis lorem."
  },
  {
    id: 3,
    image: "/images/reviewer3.png",
    name: "Alice Johnson",
    rating: "5/5",
    text: "Donec vehicula, leo ut auctor ullamcorper, diam tortor dignissim velit."
  }
];

const TestimonialCard = ({ image, name, rating, text }) => (
  <div className="testimonial" data-testid="testimonial-card">
    <img className="reviewer-img" src={image} alt={`${name}'s avatar`} />
    <div className="name-rating">
      <p className="reviewer-name">{name}</p>
      <p className="reviewer-rating">{rating}</p>
    </div>
    <div className="review-text">
      <p>{text}</p>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <div className="testimonials-parent">
      <p className="testimonials-title">Testimonials</p>
      <div className="testimonials">
        {testimonialData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
}