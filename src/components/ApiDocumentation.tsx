import { Code, Server, Shield, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const endpoints = [
  {
    method: "POST",
    path: "/api/scan",
    description: "Upload scan (multipart form)",
    example: `POST /api/scan
Headers: Authorization: Bearer <token>
Form-data:
 - file: scan.jpg
 - metadata: {"device_id":"d123","lat":-1.234,"lng":35.678}
 - sensor_readings: {"ph":6.2,"color_rgb":[120,30,20]}
Response 202: {"scan_id": "scan-0001", "status": "queued"}`
  },
  {
    method: "GET",
    path: "/api/scan/{scan_id}",
    description: "Get scan result",
    example: `GET /api/scan/scan-0001
Response 200: {
  "scan_id": "scan-0001",
  "status": "warning",
  "prediction": "bacterial_presence",
  "confidence": 0.78,
  "heatmap_url": "https://.../heatmap.png",
  "recommendations": ["wash", "boil", "discard"]
}`
  },
  {
    method: "POST",
    path: "/api/report",
    description: "Submit poisoning report",
    example: `POST /api/report
Body: {
  "reporter_name": "John Doe",
  "contact": "john@example.com",
  "location": "Market District",
  "suspected_item": "Apple",
  "symptoms": "Nausea, stomach pain"
}`
  },
  {
    method: "GET",
    path: "/api/health",
    description: "System health check",
    example: `GET /api/health
Response 200: {
  "status": "healthy",
  "queue_length": 12,
  "workers_active": 3,
  "last_scan": "2025-08-09T10:33:00Z"
}`
  }
];

const dataModels = [
  {
    name: "Scan Record",
    fields: ["scan_id", "device_id", "user_id", "image_url", "thumb_url", "sensor_readings", "status", "prediction", "confidence", "heatmap_url", "created_at", "processed_at", "human_reviewed", "final_label"]
  },
  {
    name: "Poison Report",
    fields: ["report_id", "reporter_name", "contact", "location", "suspected_item", "symptoms", "image_url", "submitted_at", "assigned_to"]
  }
];

export default function ApiDocumentation() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            API Documentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete API reference for developers integrating with BactoShield's bacteria detection system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Server className="w-6 h-6 text-blue-600 mr-3" />
              API Endpoints
            </h3>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        <Badge variant={endpoint.method === 'GET' ? 'secondary' : 'default'} className="mr-2">
                          {endpoint.method}
                        </Badge>
                        {endpoint.path}
                      </CardTitle>
                    </div>
                    <CardDescription>{endpoint.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{endpoint.example}</code>
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="w-6 h-6 text-blue-600 mr-3" />
              Data Models
            </h3>
            <div className="space-y-6">
              {dataModels.map((model, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {model.fields.map((field, fieldIndex) => (
                        <Badge key={fieldIndex} variant="outline" className="text-xs">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  Security & Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong>HTTPS Required:</strong> All API calls must use HTTPS
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong>Bearer Tokens:</strong> Include Authorization header with Bearer token
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong>Rate Limiting:</strong> 100 requests per minute per API key
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <strong>Encryption:</strong> Data encrypted at rest and in transit
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}