"use client";

import { useState, FormEvent } from "react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    previousSchool: "",
    program: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        address: "",
        previousSchool: "",
        program: "",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="card max-w-2xl mx-auto text-center fade-in">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          Application Submitted Successfully!
        </h2>
        <p className="text-gray-600">
          Thank you for applying. We will review your application and contact you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card max-w-3xl mx-auto fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Student Admission Form
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="+92 300 1234567"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Date of Birth *
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Gender *
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Program */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Program *
          </label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Program</option>
            <option value="computer-science">Computer Science</option>
            <option value="business">Business Administration</option>
            <option value="engineering">Engineering</option>
            <option value="medicine">Medicine</option>
            <option value="arts">Arts & Humanities</option>
          </select>
        </div>

        {/* Previous School */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-2">
            Previous School/College *
          </label>
          <input
            type="text"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleChange}
            required
            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Name of your previous institution"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-2">
            Address *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your complete address"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-2">
            Additional Information
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Tell us about your interests and goals..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          className="btn-primary w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          Submit Application
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        * All fields are required
      </p>
    </form>
  );
}