import { Camera, Upload, Brain, Search, FileCheck } from "lucide-react";

const pipelineSteps = [
  { icon: Camera, label: "Scan" },
  { icon: Upload, label: "Upload" },
  { icon: Brain, label: "Analyze" },
  { icon: Search, label: "Detect" },
  { icon: FileCheck, label: "Report" }
];

export default function AnimatedPipeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real-Time Detection Pipeline
          </h2>
          <p className="text-xl text-gray-600">
            Watch how your samples move through our advanced detection system
          </p>
        </div>

        <div className="pipeline-flow">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {pipelineSteps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div 
                      className="pipeline-step animate-pulse-soft"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-white text-sm font-medium mt-3">
                      {step.label}
                    </p>
                  </div>
                  
                  {index < pipelineSteps.length - 1 && (
                    <div 
                      className="flow-arrow mx-4 hidden sm:block"
                      style={{ animationDelay: `${index * 0.5 + 0.25}s` }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium">Processing in real-time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}