"use client";

// Advanced Form 
// useState, useEffect, useMemo, useCallback, Custom Hook

import { useState, useEffect, useMemo, useCallback } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { useFormValidation } from "@/hooks/useFormValidation";

export default function AdvancedForm() {
  // useState - Form data manage karna
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // useState - Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  // Custom Hook - Validation
  const { errors, validate, validateAll, clearErrors } = useFormValidation({
    name: { required: true, minLength: 3 },
    email: { 
      required: true, 
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    },
    phone: { required: true, minLength: 10 },
    message: { required: true, minLength: 10, maxLength: 500 }
  });

  // useEffect
  useEffect(() => {
    console.log("Form component mounted!");
    
    // Cleanup function
    return () => {
      console.log("Form component unmounted!");
    };
  }, []);

  // useEffect 
  useEffect(() => {
    if (submitCount > 0) {
      console.log(`Form submitted ${submitCount} times`);
    }
  }, [submitCount]);

  // useMemo 
  const characterCount = useMemo(() => {
    return formData.message.length;
  }, [formData.message]);

  // useMemo - Form completion percentage
  const completionPercentage = useMemo(() => {
    const filledFields = Object.values(formData).filter(val => val.trim() !== '').length;
    const totalFields = Object.keys(formData).length;
    return Math.round((filledFields / totalFields) * 100);
  }, [formData]);

  // useCallback - Handle change function (memoized)
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    validate(name, value);
  }, [validate]);

  // useCallback - Handle submit function (memoized)
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validateAll(formData)) {
      alert("Please fix the errors before submitting!");
      return;
    }

    setIsSubmitting(true);

    // Simulating API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      clearErrors();
      setSubmitCount(prev => prev + 1);
      setIsSubmitting(false);
    }, 2000);
  }, [formData, validateAll, clearErrors]);

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Advanced Contact Form
        </h2>
        <p className="text-sm text-gray-600">
          Demonstrating useState, useEffect, useMemo, useCallback, and custom hooks
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Form Completion</span>
          <span className="text-sm font-bold text-blue-600">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required={true}
          error={errors.name}
        />

        {/* Email Input */}
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required={true}
          error={errors.email}
        />

        {/* Phone Input */}
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+92 300 1234567"
          required={true}
          error={errors.phone}
        />

        {/* Message Textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Enter your message (min 10 characters)"
            required
            className={`
              form-input w-full px-4 py-3 
              border rounded-lg 
              focus:outline-none focus:border-blue-500
              ${errors.message ? 'border-red-500' : 'border-gray-300'}
            `}
          />
          <div className="flex justify-between items-center mt-1">
            <div>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <p className="text-sm text-gray-500">
              {characterCount} / 500 characters
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Submitting..." : "Submit Form"}
        </Button>
      </form>

      {/* Stats */}
      {submitCount > 0 && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
          <p className="text-green-800 font-medium">
            ✅ Successfully submitted {submitCount} time{submitCount > 1 ? 's' : ''}
          </p>
        </div>
      )}
    </Card>
  );
}