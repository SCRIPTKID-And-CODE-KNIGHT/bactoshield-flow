import { CheckCircle, Camera, Upload, Brain, Search, FileText } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Image Capture",
    description: "Point scanner at the item → Tap Capture → Confirm image. Supports smartphone cameras, USB microscopes, and Arduino-based color sensors. Auto-focus, color calibration, and resize happen on-device.",
    technology: "Computer Vision • Smart Cameras • Color Sensors",
    icon: Camera,
    color: "bg-blue-500",
    details: {
      purpose: "Capture high-quality images with optional sensor readings (pH, color, gas)",
      devices: ["Smartphone camera", "USB microscope", "Arduino-based color sensor"],
      processing: "Auto-focus, auto-whitebalance, color calibration, resize to 224×224 or 512×512, compress to 200-800KB",
      metadata: "Device ID, timestamp, GPS location",
      troubleshooting: ["Move closer for blur", "Increase light for dark images", "Adjust angle for better view"]
    }
  },
  {
    id: 2,
    title: "Local Pre-processing & Validation",
    description: "Device validates image quality and runs pre-checks. Normalizes colors, crops ROI, and computes quality scores before upload to save bandwidth and reduce false positives.",
    technology: "Image Processing • Quality Validation • Edge Computing",
    icon: Upload,
    color: "bg-indigo-500",
    details: {
      processing: "Normalize colors, crop to ROI, convert to model format, compute sharpness and histogram checks",
      outputs: "Upload package with image, thumbnail, metadata, and preliminary quality score",
      thresholds: "Quality checks with configurable thresholds for sharpness and exposure",
      optimization: "Reduces bandwidth usage and server load through local validation"
    }
  },
  {
    id: 3,
    title: "Secure Upload & Ingestion",
    description: "HTTPS upload to /api/scan with auth tokens. Server stores image in cloud storage (S3/GCS) and enqueues processing job. Returns scan_id with status 'queued'.",
    technology: "HTTPS • Auth Tokens • Cloud Storage • Message Queue",
    icon: Brain,
    color: "bg-purple-500",
    details: {
      endpoint: "POST /api/scan",
      security: "HTTPS with Bearer token authentication",
      storage: "Cloud storage (S3/GCS) with encryption at rest",
      queue: "Redis/Celery or RabbitMQ for job processing",
      responses: ["202 Accepted with scan_id", "401 Auth failed", "413 File too large"]
    }
  },
  {
    id: 4,
    title: "AI Inference & Detection",
    description: "CNN classifier (ResNet/MobileNet) analyzes images and sensor data. Generates confidence scores, heatmaps, and recommendations. Confidence ≥0.90 = Danger, 0.60-0.90 = Warning, <0.60 = Likely Safe.",
    technology: "Deep Learning • CNN • Explainable AI • Sensor Fusion",
    icon: Search,
    color: "bg-green-500",
    details: {
      models: "Primary CNN classifier with optional ensemble, Grad-CAM for explainability",
      inputs: "Preprocessed tensor, sensor readings, historical metadata",
      thresholds: "Configurable confidence thresholds for safety classifications",
      outputs: "Prediction with status, confidence, heatmap URL, and recommendations",
      fallback: "Rule-based heuristics using sensor data if model fails"
    }
  },
  {
    id: 5,
    title: "Results & Notifications",
    description: "Maps predictions to user-friendly advice. Danger results trigger push notifications and health authority alerts. Users can request manual review. All data stored for audit and retraining.",
    technology: "Notification Systems • Manual Review • Data Auditing",
    icon: FileText,
    color: "bg-emerald-500",
    details: {
      mapping: "Technical predictions converted to actionable user advice",
      alerts: "Push notifications for users, email/SMS for health authorities",
      review: "Manual review queue for disputed results",
      storage: "All scans, predictions, and reviews stored for retraining",
      retraining: "Periodic model updates using confirmed labels and feedback"
    }
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