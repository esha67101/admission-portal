// Small Component - Quick Action Buttons


import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function QuickActions() {
  const actions = [
    { icon: "📝", label: "New Application", href: "/admission", variant: "primary" as const },
    { icon: "👥", label: "View Students", href: "/students", variant: "secondary" as const },
    { icon: "📊", label: "Reports", href: "/dashboard", variant: "secondary" as const },
    { icon: "⚙️", label: "Settings", href: "/dashboard", variant: "secondary" as const },
  ];

  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <Link key={index} href={action.href}>
            <Button variant={action.variant} size="md" className="w-full">
              <span className="mr-2">{action.icon}</span>
              {action.label}
            </Button>
          </Link>
        ))}
      </div>
    </Card>
  );
}