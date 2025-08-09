import { BarChart3, Users, AlertTriangle, Shield, Activity, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dashboardFeatures = [
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Track queue length, worker errors, and processing status",
    features: ["Live worker status", "Queue depth metrics", "Error rate tracking", "Performance analytics"]
  },
  {
    icon: Users,
    title: "Manual Review Queue",
    description: "Assign disputed scans to lab personnel for expert review",
    features: ["Review assignment", "Expert labeling", "Consensus tracking", "Quality assurance"]
  },
  {
    icon: AlertTriangle,
    title: "Alert Management",
    description: "Configure automated alerts for health authorities",
    features: ["SMS/Email alerts", "Health authority contacts", "Escalation rules", "Alert history"]
  },
  {
    icon: BarChart3,
    title: "Model Performance",
    description: "Monitor AI model accuracy and detect data drift",
    features: ["Precision/Recall metrics", "Drift detection", "Performance trends", "Model versioning"]
  },
  {
    icon: Shield,
    title: "Audit & Compliance",
    description: "Complete audit trail for regulatory compliance",
    features: ["Access logs", "Data lineage", "Change tracking", "Compliance reports"]
  },
  {
    icon: Settings,
    title: "System Configuration",
    description: "Manage detection thresholds and system parameters",
    features: ["Confidence thresholds", "Alert rules", "Worker scaling", "Model deployment"]
  }
];

const workflowSteps = [
  {
    step: "1",
    title: "Scan Detection",
    description: "System flags scan results requiring manual review"
  },
  {
    step: "2",
    title: "Expert Assignment",
    description: "Lab personnel or food safety expert receives notification"
  },
  {
    step: "3",
    title: "Manual Analysis",
    description: "Expert reviews image, sensor data, and AI prediction"
  },
  {
    step: "4",
    title: "Final Determination",
    description: "Expert provides definitive safety classification"
  },
  {
    step: "5",
    title: "System Learning",
    description: "Expert labels feed back into model training pipeline"
  }
];

export default function AdminFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl">
              <Settings className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Admin Features & Monitoring
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive administrative tools for monitoring system health, managing manual reviews, and ensuring regulatory compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dashboardFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Manual Review Workflow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 -translate-y-1/2"></div>
                )}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg mx-auto mb-4">
                  <span className="text-lg font-bold text-purple-600">{step.step}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                Alert Configuration
              </CardTitle>
              <CardDescription>
                Automated notification settings for different threat levels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <Badge variant="destructive" className="mb-1">Danger</Badge>
                  <p className="text-sm text-gray-600">Confidence ≥ 90%</p>
                </div>
                <div className="text-sm text-gray-600">
                  Immediate SMS + Email
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <Badge variant="secondary" className="mb-1">Warning</Badge>
                  <p className="text-sm text-gray-600">60-89% confidence</p>
                </div>
                <div className="text-sm text-gray-600">
                  Email notification
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <Badge variant="outline" className="mb-1">Safe</Badge>
                  <p className="text-sm text-gray-600">&lt; 60% confidence</p>
                </div>
                <div className="text-sm text-gray-600">
                  Log only
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 text-blue-500 mr-2" />
                Performance Monitoring
              </CardTitle>
              <CardDescription>
                Key metrics for model performance and system health
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">99.7%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">94.2%</div>
                  <div className="text-sm text-gray-600">Precision</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">97.1%</div>
                  <div className="text-sm text-gray-600">Recall</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">2.3s</div>
                  <div className="text-sm text-gray-600">Avg Response</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}