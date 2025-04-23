
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Section from "./Section";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Interested in working together? Feel free to contact me for any project or collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <Card className="animate-fade-in-right">
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>
              I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input type="text" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="space-y-2">
                <Input type="text" placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Your Message" className="min-h-[120px]" />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-accent hover:bg-accent/90 text-white">
              Send Message
            </Button>
          </CardFooter>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6 animate-fade-in-left">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                You can reach me through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-accent mt-0.5" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground mt-1">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-accent mt-0.5" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-accent mt-0.5" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground mt-1">San Francisco, CA</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability Card */}
          <Card className="bg-accent text-white">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Currently Available</h3>
              <p className="opacity-90">
                I'm currently available for freelance work and full-time positions. 
                Let's discuss how I can help with your project!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
