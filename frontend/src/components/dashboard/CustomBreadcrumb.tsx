"use client";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CustomBreadcrumb() {
  const pathname = usePathname();

  // Define breadcrumb items dynamically based on the current pathname
  const breadcrumbItems = [
    {
      title: <HomeOutlined />,
      href: "/dashboard",
    },

    ...(pathname.startsWith("/dashboard/users")
      ? [
          {
            title: "Users",
            href: "/dashboard/users",
          },
        ]
      : []),
    ...(pathname.startsWith("/dashboard/risk-analysis")
      ? [
          {
            title: "Risk Analysis",
            href: "/dashboard/risk-analysis",
          },
        ]
      : []),
    ...(pathname === "/dashboard/risk-analysis/create"
      ? [
          {
            title: "New Record",
            href: "/dashboard/risk-analysis/create",
          },
        ]
      : []),
  ];

  return (
    <div className="mb-6">
      <Breadcrumb
        separator=">"
        items={breadcrumbItems.map((item) => ({
          title: item.href ? (
            <Link href={item.href} className="text-blue-200">
              {item.title}
            </Link>
          ) : (
            <span className="text-blue-200">{item.title}</span>
          ),
          key: item.href,
        }))}
      />
    </div>
  );
}
