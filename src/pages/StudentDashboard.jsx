import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-blue-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <h2 className="text-blue-800 text-xl font-bold">🎓 Placement Tracker Portal</h2>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link to="/student/dashboard" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium bg-blue-200 rounded">Dashboard</Link>
              <Link to="/jobs" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Jobs</Link>
              <Link to="/practice" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Practice & Exam</Link>
              <Link to="/resume" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Resume builder</Link>
              <Link to="/profile" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome, Student!</h1>
          <p className="text-gray-600">Here's your placement activity overview</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Applied Jobs Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Applied Jobs</h2>
              <span className="text-2xl font-bold text-blue-600">12</span>
            </div>
            <p className="text-gray-600 text-sm">4 new applications this week</p>
          </div>

          {/* Upcoming Exams Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Exams</h2>
              <span className="text-2xl font-bold text-yellow-600">3</span>
            </div>
            <p className="text-gray-600 text-sm">Next: Technical Assessment (May 20)</p>
          </div>

          {/* Placement Status Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Placement Status</h2>
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <p className="text-gray-600 text-sm">2 interviews scheduled</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600">You have 2 recent job applications and 3 upcoming exams.</p>
          </div>
        </div>
      </div>
    </div>
  );
}