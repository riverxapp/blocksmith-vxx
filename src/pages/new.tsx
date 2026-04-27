import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Link } from "react-router-dom";

export function NewPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#b33a0d] mb-4">Welcome to the New Page</h1>
        <p className="text-lg text-[#5e3a0f] mb-6">
          This is the new page added to our Blocksmith Vxx application. Explore new features and updates here.
        </p>
        <Button asChild size="lg" className="bg-[#bc4a1e] text-white hover:bg-[#8f3b16]">
          <Link to="/">Back to Home</Link>
        </Button>
      </section>

      <section>
        <Card className="border-[#f1ddc9] bg-[#fffaf2]">
          <CardHeader>
            <CardTitle className="text-xl text-[#5e3a0f]">New Features</CardTitle>
            <CardDescription className="text-[#6f5b4a]">Discover what's new in our latest release</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-[#6f5b4a]">
            <ul className="list-disc list-inside space-y-2">
              <li>Improved routing structure for better navigation</li>
              <li>Enhanced UI elements with refined tailwind styling</li>
              <li>Added a dedicated page to showcase new content</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}