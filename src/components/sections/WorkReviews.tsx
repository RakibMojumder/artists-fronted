import { TextEffect } from "@/animation/TextEffect";
import React from "react";
import AnimatedCounter from "../AnimatedCounter";

const WorkReviews = () => {
  return (
    <section className="container py-20">
      <div className="mb-16">
        <TextEffect
          as="p"
          per="word"
          preset="slide"
          className="text-5xl font-semibold tracking-tight max-w-xl leading-[60px] space-x-1.5"
        >{`Let our experienced team elevate your digital goals`}</TextEffect>
      </div>
      <div className="grid grid-cols-2 gap-12 items-end">
        <div className="grid grid-cols-5 gap-8">
          <div className="space-y-5 col-span-2">
            <AnimatedCounter end={250} className="text-5xl font-semibold" />
            <p className="text-lg text-muted-foreground">Five-Star Reviews</p>
          </div>
          <div className="space-y-5 col-span-3">
            <AnimatedCounter end={10} className="text-5xl font-semibold" />
            <p className="text-lg text-muted-foreground">In-House Experts</p>
          </div>
        </div>
        <div>
          <TextEffect
            as="p"
            per="word"
            preset="slide"
            className="text-2xl space-x-1.5"
          >{`We have successfully completed over 300+ projects from a variety of industries. In our team, designers work alongside developers and digital strategists,we believe this is our winning recipe for creating digital products that make an impact.`}</TextEffect>
        </div>
      </div>
    </section>
  );
};

export default WorkReviews;
