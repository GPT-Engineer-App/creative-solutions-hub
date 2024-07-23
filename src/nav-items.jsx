import { Home, BookOpen, FileText, Globe, Smartphone, Code, BarChart2, Brain } from "lucide-react";
import Index from "./pages/Index.jsx";
import ThesisWriting from "./pages/ThesisWriting.jsx";
import ResearchPaper from "./pages/ResearchPaper.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import CustomApp from "./pages/CustomApp.jsx";
import SoftwareSolutions from "./pages/SoftwareSolutions.jsx";
import BusinessAnalysis from "./pages/BusinessAnalysis.jsx";
import AIMLApplications from "./pages/AIMLApplications.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Thesis Writing",
    to: "/thesis-writing",
    icon: <BookOpen className="h-4 w-4" />,
    page: <ThesisWriting />,
  },
  {
    title: "Research Paper",
    to: "/research-paper",
    icon: <FileText className="h-4 w-4" />,
    page: <ResearchPaper />,
  },
  {
    title: "Web Development",
    to: "/web-development",
    icon: <Globe className="h-4 w-4" />,
    page: <WebDevelopment />,
  },
  {
    title: "Custom App",
    to: "/custom-app",
    icon: <Smartphone className="h-4 w-4" />,
    page: <CustomApp />,
  },
  {
    title: "Software Solutions",
    to: "/software-solutions",
    icon: <Code className="h-4 w-4" />,
    page: <SoftwareSolutions />,
  },
  {
    title: "Business Analysis",
    to: "/business-analysis",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <BusinessAnalysis />,
  },
  {
    title: "AI/ML Applications",
    to: "/ai-ml-applications",
    icon: <Brain className="h-4 w-4" />,
    page: <AIMLApplications />,
  },
];