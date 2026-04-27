import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { env } from "../lib/env";

export function Home() {
  return (
    <main className="space-y-20 p-6 sm:p-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-[#b33a0d] sm:text-6xl">{env.appName}</h1>
        <p className="max-w-3xl mx-auto text-xl text-[#6f4a1e]">
          Experience authentic flavors and a cozy atmosphere in the heart of the city. Your culinary journey starts here.
        </p>
        <div className="flex justify-center gap-6">
          <Button asChild size="lg" className="bg-[#bc4a1e] text-white hover:bg-[#8f3b16]">
            <Link to="/menu">View Menu</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-[#bc4a1e] text-[#bc4a1e] hover:bg-[#f7e6d9]">
            <Link to="/reservation">Reserve a Table</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold text-[#803311]">About Us</h2>
        <p className="text-[#5e3a0f] text-lg leading-relaxed">
          Founded in 1998, our restaurant has been dedicated to crafting delicious meals using 
          locally sourced ingredients and time-honored recipes. Join us for an unforgettable dining experience.
        </p>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="space-y-8">
        <h2 className="text-3xl font-semibold text-[#803311] text-center">Menu Highlights</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-[#f1ddc9] bg-[#fffaf2]">
            <CardHeader>
              <CardTitle className="text-xl text-[#5e3a0f]">Signature Dish</CardTitle>
              <CardDescription className="text-[#6f5b4a]">Slow-cooked beef with herbs and spices</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              Tender beef, marinated overnight and cooked to perfection, served with seasonal vegetables.
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2]">
            <CardHeader>
              <CardTitle className="text-xl text-[#5e3a0f]">Vegetarian Delight</CardTitle>
              <CardDescription className="text-[#6f5b4a]">Grilled seasonal vegetables with quinoa salad</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              Fresh, wholesome, and packed with flavor for our vegetarian guests.
            </CardContent>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2]">
            <CardHeader>
              <CardTitle className="text-xl text-[#5e3a0f]">Dessert Special</CardTitle>
              <CardDescription className="text-[#6f5b4a]">Homemade apple pie with vanilla ice cream</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-[#6f5b4a]">
              Classic comfort dessert made from scratch every day.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold text-[#803311] text-center">What Our Customers Say</h2>
        <blockquote className="border-l-4 border-[#bc4a1e] pl-4 italic text-[#5e3a0f]">
          "A charming restaurant with exceptional food and friendly staff. Highly recommend for a special night out!"
          <footer className="mt-2 font-semibold">– Jamie L.</footer>
        </blockquote>
        <blockquote className="border-l-4 border-[#bc4a1e] pl-4 italic text-[#5e3a0f]">
          "The best dining experience in town! The signature dish is worth every penny."
          <footer className="mt-2 font-semibold">– Maria K.</footer>
        </blockquote>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-[#803311] text-center">Get in Touch</h2>
        <address className="not-italic text-center space-y-2 text-[#5e3a0f]">
          <p>123 Foodie Lane</p>
          <p>Gourmet City, GC 45678</p>
          <p>Email: <a href="mailto:contact@blocksmithvxx.com" className="underline hover:text-[#bc4a1e]">contact@blocksmithvxx.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="underline hover:text-[#bc4a1e]">+1 234 567 890</a></p>
        </address>
        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-[#bc4a1e] text-white hover:bg-[#8f3b16]">
            <Link to="/reservation">Make a Reservation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}