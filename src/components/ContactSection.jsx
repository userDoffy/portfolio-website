import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-8 w-full md:w-2/3">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:adhungana09@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  adhungana09@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+9779841302567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +977 9841302567
                </a>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground">
                  Tokha, Kathmandu, Nepal
                </span>
              </div>
            </div>

            <div className="pt-8 text-center">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/aaditya-dhungana-a21952295/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/aaditya__dhungana/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
