import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  MessageCircle,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with the Baptist Student Fellowship"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter text-secondary mb-6">
                Send Us a Message
              </h2>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tighter text-secondary mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-secondary">Email</CardTitle>
                      <CardDescription>
                        Send us an email anytime
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:info@bsfkaduna.org"
                        className="hover:text-primary transition-colors"
                      >
                        info@bsfkaduna.org
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:secretary@bsfkaduna.org"
                        className="hover:text-primary transition-colors"
                      >
                        secretary@bsfkaduna.org
                      </a>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-secondary">Phone</CardTitle>
                      <CardDescription>
                        Call us during office hours
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+2348012345678"
                        className="hover:text-primary transition-colors"
                      >
                        +234 801 234 5678
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+2348098765432"
                        className="hover:text-primary transition-colors"
                      >
                        +234 809 876 5432
                      </a>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-secondary">Location</CardTitle>
                      <CardDescription>Visit our office</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Baptist Student Center
                    </p>
                    <p className="text-muted-foreground">
                      Kaduna Baptist Conference
                    </p>
                    <p className="text-muted-foreground">Kaduna, Nigeria</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-secondary">
                      Connect With Us
                    </CardTitle>
                    <CardDescription>Follow us on social media</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=100081245681360"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-primary text-primary hover:bg-primary/10"
                        >
                          <Facebook className="h-5 w-5" />
                          <span className="sr-only">Facebook</span>
                        </Button>
                      </a>
                      <a
                        href="https://wa.me/2348012345678"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact us on WhatsApp"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-primary text-primary hover:bg-primary/10"
                        >
                          <MessageCircle className="h-5 w-5" />
                          <span className="sr-only">WhatsApp</span>
                        </Button>
                      </a>
                      <a
                        href="mailto:info@bsfkaduna.org"
                        aria-label="Send us an email"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-primary text-primary hover:bg-primary/10"
                        >
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Button>
                      </a>
                      <a
                        href="https://instagram.com/bsfkaduna"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Instagram"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-primary text-primary hover:bg-primary/10"
                        >
                          <Instagram className="h-5 w-5" />
                          <span className="sr-only">Instagram</span>
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tighter text-secondary mb-6 text-center">
              Location Map
            </h2>
            <div className="bg-accent h-[400px] rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Interactive map coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
