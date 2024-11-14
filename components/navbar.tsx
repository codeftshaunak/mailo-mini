"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Mail, MessageSquare, Send, Users, BarChart, Settings } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Don't show navbar on auth pages
  if (pathname?.startsWith("/login") || pathname?.startsWith("/signup") || pathname?.startsWith("/dashboard")) {
    return null;
  }

  const solutions = [
    {
      title: "Email Marketing",
      description: "Create and send beautiful email campaigns",
      icon: Mail,
      href: "/dashboard/email",
    },
    {
      title: "SMS Marketing",
      description: "Reach customers directly on their phones",
      icon: MessageSquare,
      href: "/dashboard/sms",
    },
    {
      title: "Transactional Email",
      description: "Deliver important notifications reliably",
      icon: Send,
      href: "/dashboard/transactional",
    },
    {
      title: "CRM",
      description: "Manage your customer relationships",
      icon: Users,
      href: "/dashboard/contacts",
    },
    {
      title: "Marketing Automation",
      description: "Automate your marketing workflows",
      icon: Settings,
      href: "/dashboard/automation",
    },
    {
      title: "Analytics",
      description: "Track and analyze your performance",
      icon: BarChart,
      href: "/dashboard/analytics",
    },
  ];

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Send className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Brevo</span>
            </Link>

            <NavigationMenu className="hidden md:ml-6 md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
                      {solutions.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-start p-3 hover:bg-muted rounded-lg transition-colors"
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                          <div className="ml-3">
                            <div className="text-sm font-medium">{item.title}</div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className={`${pathname === "/pricing" ? "text-primary" : ""}`}>
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/resources" legacyBehavior passHref>
                    <NavigationMenuLink className={`${pathname === "/resources" ? "text-primary" : ""}`}>
                      Resources
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center">
            <Link href="/login">
              <Button variant="ghost" className="mr-2">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}