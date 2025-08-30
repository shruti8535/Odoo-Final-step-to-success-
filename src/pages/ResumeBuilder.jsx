import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

export default function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [resumeVersions, setResumeVersions] = useState([
    { id: 1, title: "Resume for Software Engineer", template: 1, updated: "2023-09-02" },
    { id: 2, title: "Resume for Data Analyst", template: 2, updated: "2023-09-01" },
  ]);

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
              <Link to="/jobs" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Jobs</Link>
              <Link to="/practice" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Practice & Exam</Link>
              <Link to="/resume" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium bg-blue-200 rounded">Resume builder</Link>
              <Link to="/profile" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-orange-500 flex items-center">
              <span className="mr-2">📄</span> Select a Resume Template
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className={`border rounded-lg p-4 ${selectedTemplate === 1 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <h3 className="text-lg font-medium mb-2">Template 1</h3>
                <div className="aspect-w-8 aspect-h-11 bg-gray-100 mb-3 flex items-center justify-center">
                  <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500">Preview</div>
                </div>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  onClick={() => setSelectedTemplate(1)}
                >
                  Select Template
                </Button>
              </div>
              
              <div className={`border rounded-lg p-4 ${selectedTemplate === 2 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <h3 className="text-lg font-medium mb-2">Template 2</h3>
                <div className="aspect-w-8 aspect-h-11 bg-gray-100 mb-3 flex items-center justify-center">
                  <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500">Preview</div>
                </div>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  onClick={() => setSelectedTemplate(2)}
                >
                  Select Template
                </Button>
              </div>
              
              <div className={`border rounded-lg p-4 ${selectedTemplate === 3 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <h3 className="text-lg font-medium mb-2">Template 3</h3>
                <div className="aspect-w-8 aspect-h-11 bg-gray-100 mb-3 flex items-center justify-center">
                  <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500">Preview</div>
                </div>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  onClick={() => setSelectedTemplate(3)}
                >
                  Select Template
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
              <span className="mr-2 text-blue-600">1</span> Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="contact">Contact</Label>
                <Input id="contact" placeholder="+1234567890" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State" className="mt-1" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
              <span className="mr-2 text-blue-600">2</span> Career Objective
            </h3>
            <div>
              <textarea 
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                rows="3"
                placeholder="Aspiring Software Engineer with a passion for innovative technology..."
              ></textarea>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
              <span className="mr-2 text-blue-600">3</span> Skills
            </h3>
            <div>
              <Input placeholder="JavaScript, React, Node.js..." className="mb-2" />
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">JavaScript</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">Node.js</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
              <span className="mr-2 text-blue-600">4</span> Projects
            </h3>
            <div className="mb-4">
              <textarea 
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                rows="3"
                placeholder="Project 1: Company Portal Project at XYZ Inc..."
              ></textarea>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
              <span className="mr-2 text-blue-600">5</span> Education Details
            </h3>
            <div className="grid grid-cols-4 gap-4 mb-2">
              <div className="font-medium">Degree</div>
              <div className="font-medium">Passing year</div>
              <div className="font-medium">University</div>
              <div className="font-medium">CGPA/Percentage</div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <Input placeholder="B.Tech" />
              <Input placeholder="2024" />
              <Input placeholder="University Name" />
              <Input placeholder="8.5" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 mb-4">
              + Add Another Education Entry
            </Button>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
              <span className="mr-2 text-blue-600">6</span> Additional Information
            </h3>
            <div className="mb-4">
              <Label htmlFor="certificates">Certificates/Achievements</Label>
              <Input id="certificates" placeholder="Certificate name" className="mt-1 mb-2" />
              <div className="grid grid-cols-3 gap-4 mt-2">
                <Input placeholder="Certificate name" />
                <Input placeholder="Year of certificate" />
                <Input placeholder="Issuing organization" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 mt-2">
                + Add Another Certificate
              </Button>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button className="bg-gray-600 hover:bg-gray-700">
              Save
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Generate Resume
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-orange-500 flex items-center mb-6">
            <span className="mr-2">📂</span> Your Resume Versions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeVersions.map(version => (
              <div key={version.id} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-1">{version.title}</h3>
                <p className="text-sm text-gray-500 mb-2">Template {version.template} | Last updated: {version.updated}</p>
                <div className="flex space-x-2 mt-2">
                  <Button className="bg-blue-600 hover:bg-blue-700" size="sm">Edit</Button>
                  <Button className="bg-gray-600 hover:bg-gray-700" size="sm">Download</Button>
                  <Button className="bg-red-600 hover:bg-red-700" size="sm">Delete</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-100 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-blue-800">Placement Tracker Portal</p>
        </div>
      </footer>
    </div>
  );
}