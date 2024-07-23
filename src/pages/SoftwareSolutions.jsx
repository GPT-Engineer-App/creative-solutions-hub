import { Button } from "@/components/ui/button";

const SoftwareSolutions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Software Solutions</h1>
      <p className="text-xl mb-8">
        We provide comprehensive software solutions to address your unique business challenges.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Software Solution Offerings:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Custom software development</li>
        <li>Enterprise Resource Planning (ERP) systems</li>
        <li>Customer Relationship Management (CRM) solutions</li>
        <li>Business Intelligence (BI) tools</li>
        <li>Cloud migration and integration</li>
        <li>Legacy system modernization</li>
      </ul>
      <Button>Explore Our Software Solutions</Button>
    </div>
  );
};

export default SoftwareSolutions;