"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FiHome,
  FiUsers,
  FiActivity,
  FiMenu,
  FiChevronLeft,
} from "react-icons/fi";
import { SidebarItemProps } from "@/types/risk-analysis";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  // Toggle sidebar collapse
  const toggleCollapse = () => setCollapsed(!collapsed);

  // Sidebar items data
  const sidebarItems = [
    {
      href: "/dashboard",
      icon: <FiHome className="h-6 w-6" />,
      label: "Home",
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/users",
      icon: <FiUsers className="h-6 w-6" />,
      label: "Users",
      active: pathname.startsWith("/dashboard/users"),
    },
    {
      href: "/dashboard/risk-analysis",
      icon: <FiActivity className="h-6 w-6" />,
      label: "Risk Analysis",
      active: pathname.startsWith("/dashboard/risk-analysis"),
    },
  ];

  return (
    <div
      className={`bg-primary text-white transition-all duration-300 h-screen overflow-y-auto flex flex-col ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center p-4">
        {!collapsed && <h2 className="text-lg font-bold">Admin Dashboard</h2>}
        <button
          onClick={toggleCollapse}
          className="text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none transition-colors"
        >
          {collapsed ? (
            <FiMenu className="h-6 w-6" />
          ) : (
            <FiChevronLeft className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-8 flex-1 overflow-y-auto">
        <ul className="space-y-2 px-4">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.href} {...item} collapsed={collapsed} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

function SidebarItem({
  href,
  icon,
  label,
  active,
  collapsed,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${
          active ? "bg-blue-600" : "hover:bg-blue-500"
        }`}
      >
        {icon}
        {!collapsed && <span>{label}</span>}
      </Link>
    </li>
  );
}
