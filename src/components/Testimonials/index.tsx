import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";



const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Anuj Mehta",
    designation: "HR Manager",
    content:
      "Applying for a loan was never this easy! With just a few taps, I got my loan approved within minutes. The interest rates are competitive, and the customer service is exceptional.",
    image: "/images1/testimonial/image-1.png",
    star: 4,
  },
  {
    id: 2,
    name: "Rahul Sharma",
    designation: "Graphics Designer",
    content:
      "I was in urgent need of funds for my business, and this app came to my rescue. The process was quick and hassle-free. I appreciate the transparency they provides during the process.",
      image: "/images1/testimonial/image-2.png",
    star: 5,
  },
  {
    id: 3,
    name: "Arjun Patel",
    designation: "Business",
    content:
      "I was skeptical about applying for a loan, but this app changed my perspective. The documentation process was simple, I received the funds in my account the same day.",
      image: "/images1/testimonial/image-3.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[40px] md:pb-24">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Customers Say?"
          paragraph="Showcasing genuine, positive feedback from our customers to build trust and credibility."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">

          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
