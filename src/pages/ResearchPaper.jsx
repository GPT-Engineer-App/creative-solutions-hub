import { Button } from "@/components/ui/button";

const ResearchPaper = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Research Paper Development</h1>
      <p className="text-xl mb-8">
        Our research paper development services are designed to help you create high-quality, impactful academic papers.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Research Paper Development Process:</h2>
      <ol className="list-decimal list-inside mb-8">
        <li>Topic selection and refinement</li>
        <li>Comprehensive literature review</li>
        <li>Data collection and analysis</li>
        <li>Drafting and structuring</li>
        <li>Editing and proofreading</li>
        <li>Formatting and citation</li>
      </ol>
      <Button>Start Your Research Paper</Button>
    </div>
  );
};

export default ResearchPaper;