import { Button } from "@/components/ui/button";

const WebDevelopment = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Web Development Services</h1>
      <p className="text-xl mb-8">
        We create modern, responsive, and user-friendly websites tailored to your specific needs.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Web Development Expertise:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Responsive design</li>
        <li>Front-end development (React, Vue, Angular)</li>
        <li>Back-end development (Node.js, Python, PHP)</li>
        <li>E-commerce solutions</li>
        <li>Content Management Systems (CMS)</li>
        <li>Web application development</li>
      </ul>
      <Button>Start Your Web Project</Button>
    </div>
  );
};

export default WebDevelopment;