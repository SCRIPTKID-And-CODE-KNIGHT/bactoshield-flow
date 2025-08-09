import { CheckCircle, Camera, Upload, Brain, Search, FileText } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Image Capture",
    description: "High-resolution camera captures detailed images of food items, drinks, and fruits",
    technology: "Computer Vision • Smart Cameras",
    icon: Camera,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Secure Upload",
    description: "Images are encrypted and securely uploaded to our cloud infrastructure",
    technology: "SSL/TLS • Cloud Storage",
    icon: Upload,
    color: "bg-indigo-500"
  },
  {
    id: 3,
    title: "AI Image Analysis",
    description: "Advanced machine learning algorithms process and analyze the captured images",
    technology: "Deep Learning • Neural Networks",
    icon: Brain,
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Detection & Classification",
    description: "AI identifies and classifies potential bacterial contamination with high accuracy",
    technology: "Pattern Recognition • Classification",
    icon: Search,
    color: "bg-green-500"
  },
  {
    id: 5,
    title: "Results & Recommendations",
    description: "Detailed reports with contamination levels and safety recommendations",
    technology: "Data Analytics • Reporting",
    icon: FileText,
    color: "bg-emerald-500"
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How BactoShield Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced bacteria detection system follows a comprehensive 5-step process 
            to ensure food safety and quality assurance.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div key={step.id} className="relative group">
                  {/* Timeline connector for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-blue-200 to-purple-200"></div>
                  )}
                  
                  <div className="process-step text-center lg:text-left">
                    {/* Step number and icon */}
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <div className={`relative z-10 w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-3 hidden lg:block">
                        <span className="text-2xl font-bold text-gray-400">0{step.id}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                        {step.technology}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}