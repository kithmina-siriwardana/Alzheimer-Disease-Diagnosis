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
import { IoMdLogOut } from "react-icons/io";
import Image from "next/image";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  // Toggle sidebar collapse
  const toggleCollapse = () => setCollapsed(!collapsed);

  // Sidebar items data
  const sidebarItems = [
    {
      href: "/dashboard",
      icon: <FiHome className="h-5 w-5" />,
      label: "Home",
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/users",
      icon: <FiUsers className="h-5 w-5" />,
      label: "Users",
      active: pathname.startsWith("/dashboard/users"),
    },
    {
      href: "/dashboard/risk-analysis",
      icon: <FiActivity className="h-5 w-5" />,
      label: "Risk Analysis",
      active: pathname.startsWith("/dashboard/risk-analysis"),
    },
  ];

  return (
    <div
      className={`bg-primary text-white transition-all duration-300 h-screen overflow-y-auto flex flex-col ${
        collapsed ? "w-20 items-center" : "w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center p-4 mt-5">
        {!collapsed && (
          // <h2 className="text-2xl font-bold">Dashboard</h2>

          <div className="ml-7 flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={130}
              height={50}
              className="bg-black"
            />
          </div>
        )}

        <button
          onClick={toggleCollapse}
          className="text-white p-2 rounded-md hover:bg-blue-100 hover:text-sidebarBtnTextActive focus:outline-none transition-colors"
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
        <ul className="space-y-4 px-4">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.href} {...item} collapsed={collapsed} />
          ))}
        </ul>
      </nav>

      <div className="flex mb-4 p-4 w-full justify-between items-center">
        <div className="flex w-full items-center">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={50}
            height={50}
          />
          <div className="flex flex-col ml-3">
            <span className="text-base">John Doe</span>
            <span className="text-xs">Admin</span>
          </div>
        </div>
        <IoMdLogOut size={24} className="cursor-pointer" />
      </div>
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
          active
            ? "bg-sidebarBtnActive text-sidebarBtnTextActive"
            : "hover:bg-sidebarBtnHover hover:text-sidebarBtnTextActive"
        }`}
      >
        {icon}
        {!collapsed && <span>{label}</span>}
      </Link>
    </li>
  );
}
