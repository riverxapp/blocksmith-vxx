import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export function Features() {
  const [form, setForm] = useState({
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
      [name]: name === "guests" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: integration for reservation submission can be added here.
    setSubmitted(true);
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Card className="border border-[#bc4a1e] bg-[#fffaf2]">
        <CardHeader>
          <CardTitle className="text-2xl text-[#5e3a0f]">
            Table Reservation
          </CardTitle>
          <CardDescription className="text-[#6f5b4a]">
            Book your table by selecting date, time, and number of guests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <p className="text-[#5e3a0f] font-semibold">
              Thank you for your reservation! We look forward to serving you.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 text-[#5e3a0f]"
              aria-label="Table reservation form"
            >
              <label className="flex flex-col gap-1">
                Date
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="rounded border border-[#bc4a1e] p-2"
                />
              </label>
              <label className="flex flex-col gap-1">
                Time
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="rounded border border-[#bc4a1e] p-2"
                />
              </label>
              <label className="flex flex-col gap-1">
                Number of Guests
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  required
                  className="rounded border border-[#bc4a1e] p-2"
                >
                  {[...Array(12).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </label>
              <Button type="submit" className="bg-[#bc4a1e] text-white hover:bg-[#8f3b16]">
                Reserve Table
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  );
}

