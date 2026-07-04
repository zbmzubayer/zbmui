import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/default/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="no-scrollbar max-h-96 max-w-sm overflow-y-auto">
            <ul className="grid grid-cols-2">
              {servicesLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink href={item.href} className="flex-col items-start gap-0.5">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const servicesLinks = [
  {
    href: "/services/analytics",
    title: "Analytics",
    description: "Insights and reporting to help you grow.",
  },
  {
    href: "/services/consulting",
    title: "Consulting",
    description: "Expert guidance to solve complex problems.",
  },
  { href: "/services/design", title: "Design", description: "Product and visual design services." },
  {
    href: "/services/development",
    title: "Development",
    description: "Custom software development and integrations.",
  },
  {
    href: "/services/cloud",
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and management.",
  },
  {
    href: "/services/security",
    title: "Security",
    description: "Protection, audits, and compliance services.",
  },
  {
    href: "/services/support",
    title: "Support",
    description: "Dedicated support and maintenance plans.",
  },
  {
    href: "/services/marketing",
    title: "Marketing",
    description: "Growth marketing and acquisition strategies.",
  },
  { href: "/services/seo", title: "SEO", description: "Improve visibility and organic traffic." },
  {
    href: "/services/content",
    title: "Content",
    description: "Content strategy, creation, and distribution.",
  },
  {
    href: "/services/training",
    title: "Training",
    description: "Workshops and training for teams.",
  },
  {
    href: "/services/automation",
    title: "Automation",
    description: "Automate workflows to increase efficiency.",
  },
  {
    href: "/services/integration",
    title: "Integrations",
    description: "Connect tools and streamline data flows.",
  },
  {
    href: "/services/mobile",
    title: "Mobile",
    description: "Native and cross-platform mobile apps.",
  },
  {
    href: "/services/qa",
    title: "QA & Testing",
    description: "Quality assurance and testing services.",
  },
  {
    href: "/services/architecture",
    title: "Architecture",
    description: "System and solution architecture design.",
  },
  {
    href: "/services/devops",
    title: "DevOps",
    description: "CI/CD, monitoring, and infrastructure as code.",
  },
  {
    href: "/services/data",
    title: "Data Engineering",
    description: "Data pipelines, warehousing, and ETL.",
  },
  {
    href: "/services/ai",
    title: "AI & ML",
    description: "Machine learning models and AI integrations.",
  },
  {
    href: "/services/compliance",
    title: "Compliance",
    description: "Regulatory compliance and risk management.",
  },
];
