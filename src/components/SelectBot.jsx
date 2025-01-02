"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

import delhi_mentor_male from "@/photos/delhi_mentor_male.jpeg";
import delhi_mentor_female from "@/photos/delhi_mentor_female.jpeg";
import delhi_friend_male from "@/photos/delhi_friend_male.jpeg";
import delhi_friend_female from "@/photos/delhi_friend_female.jpeg";
import delhi_romantic_male from "@/photos/delhi_romantic_male.jpeg";
import delhi_romantic_female from "@/photos/delhi_romantic_female.jpeg";

export function SelectBot() {
  const testimonials = [
  {
    quote:
      "50 year old rich, classy and culturally sophisticated businessman who owns steel plants, who is inquisitive",
    name: "Yash Oberoi",
    designation: "Mentor from Delhi, Male",
    src: delhi_mentor_male,
    bot_id: "delhi_mentor_male",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Kalpana Roy",
    designation: "Mentor from Delhi, Female",
    src: delhi_mentor_female,
    bot_id: "delhi_mentor_female",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Rahul Kapoor",
    designation: "Friend from Delhi, Male",
    src: delhi_friend_male,
    bot_id: "delhi_friend_male",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "Amayra Dubey",
    designation: "Friend from Delhi, Female",
    src: delhi_friend_female,
    bot_id: "delhi_friend_female",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Rohan Mittal",
    designation: "Romantic Partner from Delhi, Male",
    src: delhi_romantic_male,
    bot_id: "delhi_romantic_male",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Alana Malhotra",
    designation: "Romantic Partner from Delhi, Female",
    src: delhi_romantic_female,
    bot_id: "delhi_romantic_female",
  }
  ];
  return <AnimatedTestimonials suppressHydrationWarning testimonials={testimonials} />;
}