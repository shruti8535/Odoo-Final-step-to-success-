import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function CompanyDashboard() {
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
            <div className="flex space-x-6">
              <Link to="/company/dashboard" className="text-blue-800 hover:text-blue-600 font-medium">
                Dashboard
              </Link>
              <Link to="/company/jobs" className="text-blue-800 hover:text-blue-600 font-medium">
                Post Jobs
              </Link>
              <Link to="/company/applications" className="text-blue-800 hover:text-blue-600 font-medium">
                Applications
              </Link>
              <Link to="/company/candidates" className="text-blue-800 hover:text-blue-600 font-medium">
                Candidates
              </Link>
              <Link to="/company/history" className="text-blue-800 hover:text-blue-600 font-medium">
                History
              </Link>
              <Link to="/company/profile" className="text-blue-800 hover:text-blue-600 font-medium">
                Profile
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  AC
                </div>
                <span className="text-blue-800 font-medium">Acme Corp</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Acme Corp <span className="text-yellow-500">👋</span></h1>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Posted Jobs Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Posted Jobs</h2>
            <div className="text-3xl font-bold text-gray-900">8</div>
          </div>

          {/* Active Applications Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-4 text-amber-500">Active Applications</h2>
            <div className="text-3xl font-bold text-amber-500">42</div>
          </div>

          {/* Hired Candidates Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Hired Candidates</h2>
            <div className="text-3xl font-bold text-green-600">12</div>
          </div>
        </div>

        {/* Recent Applications Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Applications</h2>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied On</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-medium">JS</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">John Smith</div>
                        <div className="text-sm text-gray-500">john.smith@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Software Engineer</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">May 15, 2024</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Under Review
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button className="bg-blue-600 hover:bg-blue-700 mr-2" size="sm">View</Button>
                    <Button className="bg-green-600 hover:bg-green-700" size="sm">Shortlist</Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-medium">AP</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Alice Parker</div>
                        <div className="text-sm text-gray-500">alice.p@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Frontend Developer</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">May 14, 2024</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Shortlisted
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button className="bg-blue-600 hover:bg-blue-700 mr-2" size="sm">View</Button>
                    <Button className="bg-purple-600 hover:bg-purple-700" size="sm">Schedule</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Upcoming Recruitment Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Technical Assessment Round</h3>
                  <p className="text-sm text-gray-500 mt-1">Software Engineer Position</p>
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  May 20, 2024
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">Online coding assessment for 15 shortlisted candidates.</p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Manage Event</Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Campus Recruitment Drive</h3>
                  <p className="text-sm text-gray-500 mt-1">Multiple Positions</p>
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  May 25, 2024
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">On-campus recruitment for various roles at the university.</p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Manage Event</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}