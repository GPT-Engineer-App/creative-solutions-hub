import { Button } from "@/components/ui/button";

const BusinessAnalysis = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Business Analysis Services</h1>
      <p className="text-xl mb-8">
        Our business analysis services help you make data-driven decisions and optimize your operations.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Business Analysis Approach:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Requirements gathering and analysis</li>
        <li>Process modeling and optimization</li>
        <li>Data analysis and visualization</li>
        <li>Market research and competitive analysis</li>
        <li>Financial modeling and forecasting</li>
        <li>Strategic planning and recommendations</li>
      </ul>
      <Button>Get Business Insights</Button>
    </div>
  );
};

export default BusinessAnalysis;