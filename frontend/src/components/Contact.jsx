import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AnimatedCircles from "./AnimatedCircles";
import apiService from '../services/api';

const contactInfo = [
  {
    label: "Email",
    value: "singhsujal52938@gmail.com",
    icon: "📧"
  },
  {
    label: "Phone",
    value: "+91 9453634915",
    icon: "📱"
  },
  {
    label: "Location",
    value: "Greater Noida, UP, India",
    icon: "📍"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await apiService.submitContact(formData);
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[#EDE8F5] relative overflow-hidden">
      <AnimatedCircles />
      <div className="w-full relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#3D52A0] text-center mb-12">
            Get In Touch
          </h2>

          <div className="flex justify-center">
            {/* Contact Information */}
            <div className="space-y-6 max-w-lg w-full">
              <h3 className="text-2xl font-semibold text-[#3D52A0] mb-6 text-center">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white border-[#ADBBD4] shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{info.icon}</span>
                        <div>
                          <p className="font-semibold text-[#3D52A0]">{info.label}</p>
                          <p className="text-gray-700">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}