import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FlaskConical } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Ensure Food Safety?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience the power of AI-driven bacteria detection. Protect your customers 
            and your brand with BactoShield's advanced technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl"
          >
            <FlaskConical className="w-5 h-5 mr-2" />
            Try the Detection Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
          >
            Learn How to Prevent Bacteria Contamination
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="text-white/90">
            <div className="text-2xl font-bold text-white mb-1">99.7%</div>
            <div className="text-sm">Detection Accuracy</div>
          </div>
          <div className="text-white/90">
            <div className="text-2xl font-bold text-white mb-1">&lt;30s</div>
            <div className="text-sm">Analysis Time</div>
          </div>
          <div className="text-white/90">
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm">Monitoring Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}