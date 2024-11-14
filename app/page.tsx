import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Send, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Trusted by 500,000+ businesses worldwide
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Grow Your Business with
            <span className="text-primary"> Smart Marketing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            All-in-one marketing platform to scale your business with email
            marketing, SMS campaigns, and automation tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="text-lg w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="text-lg w-full sm:w-auto">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-muted-foreground">
              Powerful tools to help you reach, engage, and convert your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Email Marketing",
                description: "Create stunning emails that drive results",
                href: "/dashboard/email",
              },
              {
                icon: MessageSquare,
                title: "SMS Campaigns",
                description: "Reach customers directly on their phones",
                href: "/dashboard/sms",
              },
              {
                icon: Send,
                title: "Marketing Automation",
                description: "Set up automated workflows that convert",
                href: "/dashboard/automation",
              },
              {
                icon: Users,
                title: "CRM & Sales",
                description: "Manage and grow your customer relationships",
                href: "/dashboard/contacts",
              },
            ].map((feature, index) => (
              <Link href={feature.href} key={index}>
                <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-75">
            {[
              "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=64&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=64&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=128&h=64&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=128&h=64&fit=crop&auto=format",
            ].map((src, index) => (
              <div key={index} className="relative w-32 h-16">
                <Image
                  src={src}
                  alt={`Client logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses that trust us with their marketing needs
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="text-lg">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}