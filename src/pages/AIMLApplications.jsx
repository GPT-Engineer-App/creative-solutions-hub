import { Button } from "@/components/ui/button";

const AIMLApplications = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI/ML-Powered Applications</h1>
      <p className="text-xl mb-8">
        We leverage the power of Artificial Intelligence and Machine Learning to create intelligent applications.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our AI/ML Capabilities:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Natural Language Processing (NLP)</li>
        <li>Computer Vision</li>
        <li>Predictive Analytics</li>
        <li>Recommendation Systems</li>
        <li>Anomaly Detection</li>
        <li>Chatbots and Virtual Assistants</li>
      </ul>
      <Button>Explore AI/ML Solutions</Button>
    </div>
  );
};

export default AIMLApplications;