import { Code, Server, Database, Brain, Cloud, Shield } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    tech: "React, TypeScript, Tailwind CSS",
    icon: Code,
    description: "Modern, responsive user interface"
  },
  {
    category: "Backend",
    tech: "Node.js, Python, FastAPI",
    icon: Server,
    description: "Scalable server architecture"
  },
  {
    category: "Database",
    tech: "PostgreSQL, Redis, MongoDB",
    icon: Database,
    description: "Reliable data storage solutions"
  },
  {
    category: "AI Framework",
    tech: "TensorFlow, PyTorch, OpenCV",
    icon: Brain,
    description: "Advanced machine learning models"
  },
  {
    category: "Cloud Storage",
    tech: "AWS S3, Google Cloud, Azure",
    icon: Cloud,
    description: "Secure, scalable file storage"
  },
  {
    category: "Security",
    tech: "OAuth 2.0, JWT, SSL/TLS",
    icon: Shield,
    description: "Enterprise-grade security"
  }
];

export default function TechnologiesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technologies Used
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BactoShield is built on a robust technology stack ensuring reliability, 
            scalability, and cutting-edge performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            
            return (
              <div key={index} className="tech-card group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tech.category}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {tech.tech}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}