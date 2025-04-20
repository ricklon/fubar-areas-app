import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Settings, Hammer, Laptop, Zap, Cog, Pencil, Monitor, Scissors, Cable, Brain } from 'lucide-react';

const FunctionalArea = ({ title, icon: Icon, description, projects }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex items-center gap-2">
        <Icon className="w-6 h-6" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 mb-4">{description}</p>
      {projects && (
        <div className="mt-2">
          <p className="font-semibold text-sm text-blue-600">Recent Projects:</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      )}
    </CardContent>
  </Card>
);

const FubarLabsAreas = () => {
  const areas = [
    {
      title: "Maker Shop",
      icon: Settings,
      description: "Jump into making with our fully equipped workshop. Perfect for beginners and experts alike, with mentors available to help you get started.",
      projects: ["Custom Guitar Pedals", "Arduino Weather Station"]
    },
    {
      title: "Wood Shop",
      icon: Hammer,
      description: "From basic carpentry to advanced furniture making, our wood shop has the tools and expertise to bring your ideas to life.",
      projects: ["Community Garden Planters", "Custom Speaker Cabinets"]
    },
    {
      title: "Combat Robots",
      icon: Cog,
      description: "Join our competitive robot building team! Learn mechanical design, electronics, and strategy while building battle-ready robots.",
      projects: ["3lb Combat Bot Competition Entry", "High School Robotics Mentoring"]
    },
    {
      title: "Electronics",
      icon: Cable,
      description: "Dive into electronics with our well-equipped bench. From soldering your first circuit to designing custom PCBs, we've got you covered.",
      projects: ["LED Matrix Display", "IoT Home Automation"]
    },
    {
      title: "3D Printing",
      icon: Cog,
      description: "Turn your digital designs into reality. Get hands-on experience with various 3D printing technologies and materials.",
      projects: ["Custom Prosthetic Hands", "Architectural Models"]
    },
    {
      title: "Power Racing",
      icon: Zap,
      description: "Transform kids' ride-on cars into racing machines! Join our Power Racing Series team and compete across the country.",
      projects: ["Electric Go-Kart Build", "Power Racing Series Competition"]
    },
    {
      title: "CNC",
      icon: Settings,
      description: "Create precise parts with our Shapeoko 3 XL CNC router (33\" × 17\" × 4\" working area). Perfect for wood, plastic, and soft metals like aluminum. Includes Carbide Create software for easy design.",
      projects: ["Custom Sign Making", "Aluminum Parts Fabrication"]
    },
    {
      title: "Crafts",
      icon: Pencil,
      description: "Express your creativity! From traditional crafts to modern maker projects, this space is perfect for artistic exploration.",
      projects: ["Laser Cut Jewelry", "Community Art Installation"]
    },
    {
      title: "CAD",
      icon: Monitor,
      description: "Design your projects using industry-standard CAD software. Get training and support from experienced members.",
      projects: ["3D Printed Product Prototypes", "CNC Project Designs"]
    },
    {
      title: "Sewing",
      icon: Scissors,
      description: "Create, modify, and repair textile projects. Perfect for cosplay, clothing modifications, and soft robotics.",
      projects: ["Cosplay Costume Workshop", "Sustainable Fashion Projects"]
    },
    {
      title: "Robots",
      icon: Cog,
      description: "Build autonomous and remote-controlled robots. Great for learning mechanics, electronics, and programming.",
      projects: ["Line Following Robot", "Automated Garden Helper"]
    },
    {
      title: "AI Factory",
      icon: Brain,
      description: "Explore artificial intelligence and machine learning. Work on cutting-edge projects with our computing resources.",
      projects: ["Computer Vision Project", "Natural Language Processing Workshop"]
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Create, Learn, and Collaborate</h1>
        <p className="text-xl text-gray-600 mb-6">Join our community of makers, hackers, and creators!</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Become a Member
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
            Visit Us
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((area) => (
          <FunctionalArea
            key={area.title}
            title={area.title}
            icon={area.icon}
            description={area.description}
            projects={area.projects}
          />
        ))}
      </div>

      <div className="mt-12 text-center bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Making?</h2>
        <p className="text-gray-600 mb-6">
          Drop by during our open house every Wednesday at 7 PM or schedule a tour!
          <br />
          New members get their first month's membership at 50% off.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FubarLabsAreas;
