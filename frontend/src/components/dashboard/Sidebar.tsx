"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname(); // Get the current route

  return (
    <div
      className={`bg-primary text-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        {!collapsed && <h2 className="text-lg font-bold">Admin Dashboard</h2>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white p-2 rounded-md focus:outline-none"
        >
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l-7 7 7 7"
              />
            </svg>
          )}
        </button>
      </div>

      <nav className="mt-8">
        <ul className="space-y-4 px-4">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center space-x-3 p-3 rounded-md ${
                pathname === "/dashboard" ? "bg-blue-600" : "hover:bg-blue-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4v16h18V4H3zm0 0l9 7 9-7"
                />
              </svg>
              {!collapsed && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/users"
              className={`flex items-center space-x-3 p-3 rounded-md ${
                pathname === "/dashboard/users"
                  ? "bg-blue-600"
                  : "hover:bg-blue-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
                />
              </svg>
              {!collapsed && <span>Users</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/risk-analysis"
              className={`flex items-center space-x-3 p-3 rounded-md ${
                pathname === "/dashboard/risk-analysis"
                  ? "bg-blue-600"
                  : "hover:bg-blue-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 13l4 4L12 7l4 10 4-4"
                />
              </svg>
              {!collapsed && <span>Risk Analysis</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
