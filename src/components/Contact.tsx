
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

      <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="w-full md:w-1/2 space-y-6 animate-fade-in-left">
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
                  <p className="text-muted-foreground mt-1">arvinalipio@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-accent mt-0.5" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground mt-1">+63 (925) 568-1548</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-accent mt-0.5" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground mt-1">Philippines</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Availability Card */}
          <Card className="bg-accent text-white">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Currently Available</h3>
              <p className="opacity-90">
                I'm currently available for freelance work. 
                Let's discuss how I can help with your project!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 animate-fade-in-right relative">
          <div className="aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 rounded-2xl border-2 border-accent/20 transform rotate-6"></div>
            <div className="h-full w-full bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-2xl overflow-hidden">
              <div className="h-full w-full flex items-center justify-center text-accent">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <img 
                    src="https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/250085161_4697312580289883_6176329537119147344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=d6I566l4wBwQ7kNvwG-jwDQ&_nc_oc=AdnWF9GFjCEm1KBdrF6fHe0YUh_7IUHmvji-AdoB-WOHhCVzie_Ih6JUYDqvGtha8Z0&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=_2aUd41EUSPCUwjr4625bw&oh=00_AfE_9TRydoOXyQRSWAEHewBHzfF4Ssmi2VIMpo85wbGmyg&oe=680F13A8" 
                    alt="Profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Code snippet decoration */}
          <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-md shadow-lg border rotate-3 hidden md:block">
            <pre className="text-xs text-muted-foreground">
              <code>{'const connect = async () => {\n  await sayHello();\n}'}</code>
            </pre>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

