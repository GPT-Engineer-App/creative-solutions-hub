import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { navItems } from "@/nav-items";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Innovix Solutions</h1>
        <p className="text-xl mb-8">Empowering Your Academic and Business Success</p>
        <Button asChild size="lg">
          <Link to="/contact">Get Started</Link>
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {navItems.slice(1).map((item) => (
            <Card key={item.to}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold ml-2">{item.title}</h3>
                </div>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button asChild variant="outline">
                  <Link to={item.to}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Testimonials</h2>
        {/* Implement testimonials carousel here */}
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Your Message" />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </section>
    </div>
  );
};

export default Index;