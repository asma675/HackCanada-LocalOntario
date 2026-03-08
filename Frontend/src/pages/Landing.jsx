import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "../components/landing/HeroSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import SeasonalPreview from "../components/landing/SeasonalPreview";

export default function Landing() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <SeasonalPreview />

      {/* CTA Footer */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="maple-gradient rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to eat better for less?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
                Join thousands of Canadians saving money and eating sustainably with EcoCart.
              </p>
              <Link to={createPageUrl("MealPlanner")}>
                <Button size="lg" className="bg-white text-[#D52B1E] hover:bg-white/90 shadow-xl text-base px-8 py-6 rounded-xl font-semibold">
                  Create My Meal Plan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-[#D52B1E]" />
            <span className="font-bold">EcoCart</span>
            <span className="text-sm text-gray-400">🍁 Made in Canada</span>
          </div>
          <p className="text-sm text-gray-400">
            © 2026 EcoCart. Helping Canadians eat sustainably.
          </p>
        </div>
      </footer>
    </div>
  );
}