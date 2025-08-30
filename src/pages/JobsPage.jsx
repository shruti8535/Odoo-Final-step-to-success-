import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  // Mock data for job listings
  const jobListings = [
    {
      id: 1,
      title: "Software Engineer - Company 1",
      location: "Bangalore",
      package: "6-8 LPA",
      eligibility: "Min 7.0 CGPA, CS/IT"
    },
    {
      id: 2,
      title: "Software Engineer - Company 2",
      location: "Bangalore",
      package: "6-8 LPA",
      eligibility: "Min 7.0 CGPA, CS/IT"
    },
    {
      id: 3,
      title: "Software Engineer - Company 3",
      location: "Bangalore",
      package: "6-8 LPA",
      eligibility: "Min 7.0 CGPA, CS/IT"
    },
    {
      id: 4,
      title: "Software Engineer - Company 4",
      location: "Bangalore",
      package: "6-8 LPA",
      eligibility: "Min 7.0 CGPA, CS/IT"
    },
    {
      id: 5,
      title: "Software Engineer - Company 5",
      location: "Bangalore",
      package: "6-8 LPA",
      eligibility: "Min 7.0 CGPA, CS/IT"
    },
    {
      id: 6,
      title: "Software Engineer - Company 6",
      location: "Bangalore",
      package: "6-8 LPA",
      eligibility: "Min 7.0 CGPA, CS/IT"
    },
  ];

  // Mock data for applications
  const myApplications = [
    {
      id: 1,
      company: "TechCorp",
      role: "Backend Developer",
      status: "Shortlisted"
    },
    {
      id: 2,
      company: "FinTech Ltd",
      role: "Data Analyst",
      status: "Interview Scheduled"
    },
    {
      id: 3,
      company: "MarketPro",
      role: "Marketing Intern",
      status: "Offer Received"
    },
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Here you would handle the form submission
    alert("Application submitted successfully!");
    setShowApplicationForm(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Shortlisted":
        return "text-blue-600";
      case "Interview Scheduled":
        return "text-orange-600";
      case "Offer Received":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

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
              <Link to="/student/dashboard" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              <Link to="/jobs" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium bg-blue-200 rounded">Jobs</Link>
              <Link to="/practice" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Practice & Exam</Link>
              <Link to="/resume" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Resume builder</Link>
              <Link to="/profile" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Job Applications</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-auto">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Domain</option>
              <option value="software">Software Development</option>
              <option value="data">Data Science</option>
              <option value="design">UI/UX Design</option>
            </select>
          </div>
          <div className="w-full md:w-auto">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Package</option>
              <option value="0-5">0-5 LPA</option>
              <option value="5-10">5-10 LPA</option>
              <option value="10+">10+ LPA</option>
            </select>
          </div>
          <div className="w-full md:w-auto">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Location</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="pune">Pune</option>
            </select>
          </div>
        </div>

        {/* Job Listings */}
        {!showApplicationForm ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h2>
                  <p className="text-gray-600 mb-1">{job.location} | {job.package}</p>
                  <p className="text-gray-600 mb-4">Eligibility: {job.eligibility}</p>
                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => handleApply(job)} 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                      Apply
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* My Applications Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">My Applications</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {myApplications.map((app) => (
                      <tr key={app.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{app.company}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{app.role}</td>
                        <td className={`px-6 py-4 whitespace-nowrap ${getStatusColor(app.status)}`}>{app.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* Application Form */
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="text-orange-500 text-2xl mr-2">📝</div>
              <h2 className="text-2xl font-bold text-orange-500">Apply for Job</h2>
            </div>
            
            <form onSubmit={handleSubmitApplication}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                  Enter your full name
                </label>
                <input 
                  type="text" 
                  id="fullName" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="enrollmentNumber">
                  Enrollment Number
                </label>
                <input 
                  type="text" 
                  id="enrollmentNumber" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter enrollment number"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
                  Branch
                </label>
                <select 
                  id="branch" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">-- Select Branch --</option>
                  <option value="cse">Computer Science</option>
                  <option value="it">Information Technology</option>
                  <option value="ece">Electronics & Communication</option>
                  <option value="eee">Electrical Engineering</option>
                  <option value="mech">Mechanical Engineering</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passingYear">
                  Passing Year
                </label>
                <select 
                  id="passingYear" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">-- Select Year --</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter phone number"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                  Resume
                </label>
                <div className="flex items-center">
                  <label className="w-full flex items-center px-3 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                    <span className="text-blue-600 mr-2">Choose File</span>
                    <span className="text-gray-500 text-sm">No file chosen</span>
                    <input type="file" className="hidden" id="resume" accept=".pdf,.doc,.docx" />
                  </label>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
                  Cover Letter
                </label>
                <textarea 
                  id="coverLetter" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  rows="4"
                  placeholder="Write a short cover letter..."
                ></textarea>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  onClick={() => setShowApplicationForm(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="bg-blue-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-blue-800">Placement Tracker Portal</p>
        </div>
      </footer>
    </div>
  );
}