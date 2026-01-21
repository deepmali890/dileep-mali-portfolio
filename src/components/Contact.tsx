"use client";
import React, { useState } from "react";
import { IconSend, IconUser, IconMail, IconMessage } from "@tabler/icons-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name.value,
          from_email: formData.email.value,
          message: formData.message.value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully. I’ll get back to you soon 🚀");
      setFormData(defaultFormState);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message ❌");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Let&apos;s Connect
          </h2>
          <p className="text-sm text-neutral-600">
            I&apos;m open to exciting opportunities and collaborations. Feel free to reach out if you&apos;d like to discuss potential roles or projects.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <IconUser className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
                  value={formData.name.value}
                  required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      name: {
                        value: e.target.value,
                        error: "",
                      },
                    });
                  }}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <IconMail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
                  value={formData.email.value}
                  required
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: {
                        value: e.target.value,
                        error: "",
                      },
                    });
                  }}
                />
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="relative">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Your Message
            </label>
            <div className="relative">
              <IconMessage className="absolute left-3 top-4 h-5 w-5 text-neutral-400" />
              <textarea
                placeholder="Tell me about the opportunity or how we can collaborate..."
                rows={6}
                className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 resize-none"
                value={formData.message.value}
                required
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    message: {
                      value: e.target.value,
                      error: "",
                    },
                  });
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white text-sm font-semibold rounded-lg hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <IconSend className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-neutral-200">
          <p className="text-xs text-neutral-500 text-center">
            I typically respond within 24 hours. You can also reach me directly at{" "}
            <a href="mailto:dilip@deeprise.in" className="text-neutral-900 font-medium hover:underline">
              dilip@deeprise.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};