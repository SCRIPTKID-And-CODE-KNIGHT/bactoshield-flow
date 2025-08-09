import { Shield, Lock, Eye, Clock, MapPin, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const privacyPrinciples = [
  {
    icon: Eye,
    title: "User Consent",
    description: "Clear consent for image collection and optional location data",
    details: [
      "Explicit permission before image capture",
      "Optional GPS location sharing",
      "Purpose clearly explained to users",
      "Easy opt-out mechanisms"
    ]
  },
  {
    icon: FileText,
    title: "Anonymous Reporting",
    description: "Option to submit reports without personal identification",
    details: [
      "No account required for basic scanning",
      "Anonymous poisoning reports available",
      "Device ID can be randomized",
      "Optional contact information"
    ]
  },
  {
    icon: Clock,
    title: "Data Retention",
    description: "Limited retention periods with clear deletion policies",
    details: [
      "Raw images kept for 1 year maximum",
      "Processed data anonymized after analysis",
      "User-requested deletions honored",
      "Automatic cleanup of expired data"
    ]
  },
  {
    icon: Lock,
    title: "Encryption",
    description: "End-to-end security for all data transmission and storage",
    details: [
      "HTTPS for all API communications",
      "AES-256 encryption at rest",
      "Encrypted local storage on devices",
      "Secure key management practices"
    ]
  }
];

export default function PrivacySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Privacy & Data Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BactoShield prioritizes user privacy while maintaining the effectiveness of our bacteria detection system
          </p>
        </div>

        <Alert className="mb-12 border-green-200 bg-green-50">
          <Shield className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <strong>Privacy Notice:</strong> By using BactoShield, you consent to image collection for food safety analysis. 
            Location data is optional and helps improve local health monitoring. All data is encrypted and stored securely, 
            with a maximum retention period of 1 year for raw images. You can request data deletion at any time.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {privacyPrinciples.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{principle.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {principle.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                Location Data Usage
              </CardTitle>
              <CardDescription>
                How we use optional location information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Why we collect location:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Track contamination hotspots</li>
                  <li>• Alert nearby users to risks</li>
                  <li>• Provide location-specific recommendations</li>
                  <li>• Support public health authorities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Your control:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Location sharing is always optional</li>
                  <li>• Can be disabled at any time</li>
                  <li>• Approximate location only (city level)</li>
                  <li>• Never shared with third parties</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 text-purple-500 mr-2" />
                Data Handling Practices
              </CardTitle>
              <CardDescription>
                Our commitment to responsible data management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Data minimization:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Only collect necessary information</li>
                  <li>• Automatic data anonymization</li>
                  <li>• Regular data purging cycles</li>
                  <li>• Purpose limitation enforcement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Compliance standards:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• GDPR compliant data handling</li>
                  <li>• SOC 2 Type II certified</li>
                  <li>• Regular security audits</li>
                  <li>• Transparent privacy policies</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Questions about privacy?
              </h3>
              <p className="text-gray-600 mb-4">
                Contact our privacy team for any questions about data handling, deletion requests, or privacy concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="mailto:privacy@bactoshield.com" 
                  className="inline-flex items-center justify-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Contact Privacy Team
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Request Data Deletion
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}