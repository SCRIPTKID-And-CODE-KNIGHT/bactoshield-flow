import ProcessTimeline from "@/components/ProcessTimeline";
import TechnologiesSection from "@/components/TechnologiesSection";
import AnimatedPipeline from "@/components/AnimatedPipeline";
import CallToAction from "@/components/CallToAction";
import ApiDocumentation from "@/components/ApiDocumentation";
import AdminFeatures from "@/components/AdminFeatures";
import DeviceUsage from "@/components/DeviceUsage";
import PrivacySection from "@/components/PrivacySection";
import { Shield, Microscope } from "lucide-react";
import heroImage from "@/assets/hero-bacteria-detection.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold text-lg">BactoShield</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                How BactoShield
                <span className="block text-blue-600">Works</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Advanced AI-powered bacteria detection system for food, drinks, and fruits. 
                Ensuring safety through cutting-edge computer vision and machine learning.
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Microscope className="w-4 h-4" />
                  <span>99.7% Accuracy</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Real-time Analysis</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Enterprise Ready</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="BactoShield bacteria detection system analyzing food items" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />
      
      {/* Animated Pipeline */}
      <AnimatedPipeline />
      
      {/* Technologies Section */}
      <TechnologiesSection />
      
      {/* Device Usage */}
      <DeviceUsage />
      
      {/* API Documentation */}
      <ApiDocumentation />
      
      {/* Admin Features */}
      <AdminFeatures />
      
      {/* Privacy Section */}
      <PrivacySection />
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Index;
