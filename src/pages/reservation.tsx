import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate a successful submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="max-w-md mx-auto p-6">
        <Card className="bg-[#fffaf2] border-[#f1ddc9]">
          <CardHeader>
            <CardTitle>Reservation Confirmed</CardTitle>
            <CardDescription>
              Thank you for your reservation, {form.name}! We look forward to
              seeing you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Date: {form.date}</p>
            <p>Time: {form.time}</p>
            <p>Guests: {form.guests}</p>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#b33a0d] mb-6 text-center">
        Make a Reservation
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
        <select
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 px-3 py-2"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num} Guest{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
        <Button type="submit" className="w-full bg-[#bc4a1e] text-white">
          Reserve Table
        </Button>
      </form>
    </main>
  );
}
