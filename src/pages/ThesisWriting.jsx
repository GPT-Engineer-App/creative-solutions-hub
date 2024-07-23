import { Button } from "@/components/ui/button";

const ThesisWriting = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Thesis Writing Services</h1>
      <p className="text-xl mb-8">
        Our expert team provides comprehensive thesis writing support to help you succeed in your academic journey.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Benefits of Our Thesis Writing Services:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Expert guidance from experienced researchers</li>
        <li>Customized approach to meet your specific requirements</li>
        <li>In-depth research and analysis</li>
        <li>Clear and concise writing</li>
        <li>Timely delivery to meet your deadlines</li>
      </ul>
      <Button>Get Started with Your Thesis</Button>
    </div>
  );
};

export default ThesisWriting;