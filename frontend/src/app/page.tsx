export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to the App</h1>
      <p className="text-gray-600">Select an option below:</p>
      <div className="mt-4 space-x-4">
        <a
          href="/dashboard"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Admin Dashboard
        </a>
        <a href="/client" className="px-4 py-2 bg-green-600 text-white rounded">
          Client App
        </a>
      </div>
    </main>
  );
}
