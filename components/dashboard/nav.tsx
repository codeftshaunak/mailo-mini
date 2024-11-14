"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Mail,
  MessageSquare,
  Users,
  Settings,
  BarChart,
  Send,
  Workflow,
} from "lucide-react";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Email Campaigns",
    href: "/dashboard/email",
    icon: Mail,
  },
  {
    title: "SMS Campaigns",
    href: "/dashboard/sms",
    icon: MessageSquare,
  },
  {
    title: "Transactional",
    href: "/dashboard/transactional",
    icon: Send,
  },
  {
    title: "Automation",
    href: "/dashboard/automation",
    icon: Workflow,
  },
  {
    title: "Contacts",
    href: "/dashboard/contacts",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="w-64 min-h-screen border-r bg-muted/10">
      <div className="p-4 space-y-4">
        <div className="flex items-center px-2">
          <Link href="/dashboard" className="flex items-center">
            <Send className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-bold">Brevo</span>
          </Link>
        </div>
        <div className="space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-2 py-2 text-sm font-medium rounded-md",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              <item.icon className="h-4 w-4 mr-2" />
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}