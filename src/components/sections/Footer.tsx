import { InstagramIcon, FacebookIcon, TwitterIcon } from "lucide-react";
import AnimatedButton from "../AnimatedButton";

export default function Footer() {
  return (
    <footer className="container py-24">
      <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column */}
        <div className="space-y-8 col-span-7">
          <h2 className="text-4xl font-semibold leading-tight">
            We love crafting unforgettable digital experiences, brands and
            websites with people like you.
          </h2>

          <div className="space-y-4">
            <p className="text-muted-foreground">Get in touch</p>
            <p className="text-xl font-semibold">+44 207 112 82 85</p>
            <p className="text-xl font-semibold">contact@artistsweb.com</p>
            <p className="text-lg">
              Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 col-span-5">
          {/* Social Media */}
          <div className="bg-black text-white px-6 py-5 rounded-3xl flex justify-between items-center">
            <span className="text-2xl">Follow us</span>
            <div className="flex gap-4">
              <div className="hover:opacity-75 transition-opacity cursor-pointer">
                <InstagramIcon className="size-7" />
              </div>
              <div className="hover:opacity-75 transition-opacity cursor-pointer">
                <FacebookIcon className="size-7" />
              </div>
              <div className="hover:opacity-75 transition-opacity cursor-pointer">
                <TwitterIcon className="size-7" />
              </div>
              <div className="hover:opacity-75 transition-opacity cursor-pointer">
                <span className="font-semibold text-2xl">W.</span>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gray-50 p-8 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Let&apos;s get started
            </h3>
            <p className="text-muted-foreground mb-6">
              We&apos;d love to hear about your project.
            </p>
            <AnimatedButton
              text="Get in touch"
              className="w-full py-4 text-2xl bg-primary text-white border-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t">
        <p className="text-muted-foreground mb-4 md:mb-0">
          © 2025 Artistsweb Ltd · All rights reserved.
        </p>
        <div className="flex gap-6">
          <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Privacy Policy
          </div>
          <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Terms & Conditions
          </div>
        </div>
      </div>
    </footer>
  );
}
