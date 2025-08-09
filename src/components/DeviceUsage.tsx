import { Smartphone, Microscope, Cpu, Wifi, Battery, Sun } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const deviceTypes = [
  {
    icon: Smartphone,
    name: "Smartphone + Macro Lens",
    description: "Clip-on macro lens or USB microscope (OTG)",
    cost: "Low",
    features: ["High-resolution camera", "Portable", "Easy to use", "Wide availability"]
  },
  {
    icon: Microscope,
    name: "USB Microscope",
    description: "Dedicated microscope with USB connection",
    cost: "Medium",
    features: ["Better magnification", "Stable imaging", "LED lighting", "Professional quality"]
  },
  {
    icon: Cpu,
    name: "Arduino/ESP32 + Sensors",
    description: "Custom device with colorimetric and pH sensors",
    cost: "Low",
    features: ["TCS34725 color sensor", "pH sensor analog", "MQ-series gas sensors", "Customizable"]
  }
];

const appWorkflow = [
  {
    button: "Scan",
    action: "Capture image + read sensors",
    description: "Point device at food item and capture high-resolution image while sensors collect pH, color, and gas readings"
  },
  {
    button: "Preview",
    action: "Show image and sensor readings",
    description: "Review captured image and sensor data, with option to retake if quality is insufficient"
  },
  {
    button: "Send",
    action: "Upload to cloud or save offline",
    description: "Transmit data package to analysis servers, or queue locally if network unavailable"
  }
];

const sensorReadings = {
  device_id: "dev-1001",
  timestamp: "2025-08-09T10:33:00Z",
  lat: -1.234,
  lng: 35.678,
  image_path: "s3://bucket/scan-0001.jpg",
  sensor_readings: {
    ph: 6.3,
    rgb: [120, 30, 20],
    mq_h2s: 0.02
  },
  app_version: "1.0.3"
};

export default function DeviceUsage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl">
              <Smartphone className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Local People Use BactoShield
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, affordable devices designed for field use by local communities, market vendors, and food inspectors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {deviceTypes.map((device, index) => {
            const IconComponent = device.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <Badge variant={device.cost === 'Low' ? 'default' : 'secondary'} className="mb-2">
                        {device.cost} Cost
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{device.name}</CardTitle>
                  <CardDescription>{device.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {device.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Simple 3-Button Device Interface
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appWorkflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-2xl text-xl font-bold mx-auto mb-4">
                  {step.button}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.action}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wifi className="w-5 h-5 text-blue-500 mr-2" />
                Offline Mode & Sync
              </CardTitle>
              <CardDescription>
                Works even without internet connection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong>Local Storage:</strong> Scans stored in encrypted SQLite database
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong>Background Sync:</strong> Automatic upload when network becomes available
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong>Queue Visibility:</strong> Users can see pending uploads and sync status
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong>Compression:</strong> Lightweight compression saves bandwidth
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Battery className="w-5 h-5 text-green-500 mr-2" />
                <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                Power & Durability
              </CardTitle>
              <CardDescription>
                Built for demanding field conditions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong>Battery Pack:</strong> Long-lasting rechargeable battery for all-day use
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <strong>Solar Option:</strong> Solar panel attachment for remote areas
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                <div>
                  <strong>Rugged Casing:</strong> Water-resistant design for market environments
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <strong>Simple Interface:</strong> Easy operation with minimal training required
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sample Data Package</CardTitle>
            <CardDescription>
              Example JSON payload sent from device to cloud
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{JSON.stringify(sensorReadings, null, 2)}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}