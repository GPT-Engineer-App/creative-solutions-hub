import { Button } from "@/components/ui/button";

const CustomApp = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Custom App Development</h1>
      <p className="text-xl mb-8">
        We build custom applications that streamline your business processes and enhance user experiences.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Custom App Development Services:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Mobile app development (iOS and Android)</li>
        <li>Cross-platform app development</li>
        <li>Progressive Web Apps (PWAs)</li>
        <li>Enterprise application development</li>
        <li>Cloud-based applications</li>
        <li>API development and integration</li>
      </ul>
      <Button>Discuss Your App Idea</Button>
    </div>
  );
};

export default CustomApp;