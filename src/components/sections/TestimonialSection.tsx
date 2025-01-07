"use client";

import { useGetReviewsQuery } from "@/redux/feature/review/reviewApi";
import Testimonials from "../Testimonials";

const TestimonialSection = () => {
  const { data, isLoading } = useGetReviewsQuery(null);

  if (isLoading) return;

  return (
    <div>
      <Testimonials testimonials={data?.data} />
    </div>
  );
};

export default TestimonialSection;
