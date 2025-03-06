import Sidebar from "../../components/dashboard/Sidebar";
import CustomBreadcrumb from "../../components/dashboard/CustomBreadcrumb";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar (Scrollable) */}
      <Sidebar />

      {/* Main Content (Scrollable) */}
      <main className="flex-1 p-6 overflow-auto h-screen bg-secondary">
        {/* Breadcrumb */}
        <CustomBreadcrumb />
        {children}
      </main>
    </div>
  );
}
