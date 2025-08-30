import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function TPODashboard() {
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
              <Link to="/tpo/dashboard" className="text-blue-800 hover:text-blue-600 font-medium">
                Dashboard
              </Link>
              <Link to="/tpo/companies" className="text-blue-800 hover:text-blue-600 font-medium">
                Companies
              </Link>
              <Link to="/tpo/students" className="text-blue-800 hover:text-blue-600 font-medium">
                Students
              </Link>
              <Link to="/tpo/jobs" className="text-blue-800 hover:text-blue-600 font-medium">
                Jobs
              </Link>
              <Link to="/tpo/events" className="text-blue-800 hover:text-blue-600 font-medium">
                Events
              </Link>
              <Link to="/tpo/reports" className="text-blue-800 hover:text-blue-600 font-medium">
                Reports
              </Link>
              <Link to="/tpo/profile" className="text-blue-800 hover:text-blue-600 font-medium">
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
                  TP
                </div>
                <span className="text-blue-800 font-medium">TPO Admin</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, TPO Admin <span className="text-yellow-500">👋</span></h1>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Registered Students Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Registered Students</h2>
            <div className="text-3xl font-bold text-gray-900">520</div>
          </div>

          {/* Registered Companies Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Registered Companies</h2>
            <div className="text-3xl font-bold text-gray-900">48</div>
          </div>

          {/* Active Jobs Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-4 text-amber-500">Active Jobs</h2>
            <div className="text-3xl font-bold text-amber-500">32</div>
          </div>

          {/* Placement Rate Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Placement Rate</h2>
            <div className="text-3xl font-bold text-green-600">78%</div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Events</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">Add New Event</Button>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Technical Assessment</div>
                    <div className="text-sm text-gray-500">Software Engineer</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-medium">AC</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Acme Corp</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">May 20, 2024</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Online</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button className="bg-blue-600 hover:bg-blue-700 mr-2" size="sm">Edit</Button>
                    <Button className="bg-gray-600 hover:bg-gray-700" size="sm">Details</Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Campus Recruitment Drive</div>
                    <div className="text-sm text-gray-500">Multiple Positions</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-medium">MC</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Multiple Companies</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">May 25, 2024</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Main Auditorium</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Planning
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button className="bg-blue-600 hover:bg-blue-700 mr-2" size="sm">Edit</Button>
                    <Button className="bg-gray-600 hover:bg-gray-700" size="sm">Details</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Placement Statistics Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Placement Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Department-wise Placement</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Computer Science</span>
                    <span className="text-sm font-medium text-gray-700">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Electronics</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Mechanical</span>
                    <span className="text-sm font-medium text-gray-700">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Civil</span>
                    <span className="text-sm font-medium text-gray-700">62%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Top Recruiting Companies</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium">TC</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Tech Corp</div>
                      <div className="text-xs text-gray-500">Software & IT</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">24 Offers</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium">AC</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Acme Corp</div>
                      <div className="text-xs text-gray-500">Software & IT</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">18 Offers</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium">GI</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Global Inc</div>
                      <div className="text-xs text-gray-500">Finance</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">15 Offers</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium">IS</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Innovative Solutions</div>
                      <div className="text-xs text-gray-500">Product Development</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">12 Offers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}