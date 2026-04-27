import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { env } from "../lib/env";

const foodMenu = [
  {
    title: "Appetizers",
    items: [
      { name: "Bruschetta", description: "Grilled bread with tomato, basil, and garlic." },
      { name: "Stuffed Mushrooms", description: "Mushrooms filled with cheese and herbs." },
      { name: "Caesar Salad", description: "Crisp romaine with homemade Caesar dressing." },
    ],
  },
  {
    title: "Main Courses",
    items: [
      { name: "Grilled Salmon", description: "Fresh salmon with lemon butter sauce." },
      { name: "Ribeye Steak", description: "12oz ribeye grilled to your liking." },
      { name: "Vegetable Stir Fry", description: "Seasonal vegetables sautéed in a light soy sauce." },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert." },
      { name: "Chocolate Lava Cake", description: "Warm cake with gooey chocolate center." },
      { name: "Gelato", description: "Selection of artisan Italian gelato flavors." },
    ],
  },
];

const drinkMenu = [
  { name: "House Red Wine", description: "A smooth, full-bodied red wine." },
  { name: "House White Wine", description: "A crisp, refreshing white wine." },
  { name: "Craft Beer", description: "Local craft beer on tap." },
  { name: "Espresso", description: "Rich, bold espresso shot." },
  { name: "Herbal Tea", description: "Selection of calming herbal teas." },
];

export function Menu() {
  return (
    <main className="space-y-12 p-6 sm:p-12 max-w-5xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#b33a0d] mb-4">{env.appName} Menu</h1>
        <p className="text-[#6f4a1e]">Explore our curated selection of food and drinks, crafted for your enjoyment.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#803311] mb-6">Food Menu</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {foodMenu.map((section) => (
            <Card key={section.title} className="bg-[#fffaf2] border-[#f1ddc9]">
              <CardHeader>
                <CardTitle className="text-xl text-[#5e3a0f]">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-[#6f5b4a] text-sm">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <p className="font-semibold">{item.name}</p>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#803311] mb-6">Drinks Menu</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {drinkMenu.map((drink) => (
            <Card key={drink.name} className="bg-[#fffaf2] border-[#f1ddc9]">
              <CardContent className="text-[#6f5b4a] text-sm space-y-1">
                <p className="font-semibold">{drink.name}</p>
                <CardDescription>{drink.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

