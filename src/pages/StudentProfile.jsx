import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Mail, Phone, GraduationCap, Building, BookOpen, Award, Star } from "lucide-react";
import { Button } from "../components/ui/button";

export default function StudentProfile() {
  const studentData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    branch: "Computer Science",
    department: "Engineering",
    college: "University of Technology",
    cgpa: "8.7",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    skills: [
      "React", "JavaScript", "Python", "Java", "Machine Learning",
      "Data Structures", "Algorithms", "Database Management", "Web Development", "Git"
    ]
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
              <Link to="/jobs" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Jobs</Link>
              <Link to="/practice" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Practice & Exam</Link>
              <Link to="/resume" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Resume builder</Link>
              <Link to="/profile" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium bg-blue-200 rounded">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="min-h-screen bg-blue-50 p-4">
          <div className="max-w-5xl mx-auto">

            <div className="grid md:grid-cols-3 gap-6">
              {/* Profile Card */}
              <Card className="md:col-span-1 bg-white rounded-xl shadow-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                      <AvatarFallback className="text-3xl font-semibold text-gray-500">SJ</AvatarFallback>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mt-2">{studentData.name}</h2>
                    <p className="text-gray-600 mb-6">{studentData.branch} Student</p>
                    
                    <div className="w-full space-y-3">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <a href={`mailto:${studentData.email}`} className="text-sm text-blue-600 hover:underline">{studentData.email}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{studentData.phone}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Information */}
              <Card className="md:col-span-2 bg-white rounded-xl shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    Academic Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <Building className="w-5 h-5 text-gray-500 mt-1" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">College</p>
                          <p className="text-gray-800">{studentData.college}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <BookOpen className="w-5 h-5 text-gray-500 mt-1" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Department</p>
                          <p className="text-gray-800">{studentData.department}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-gray-500 mt-1" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Branch</p>
                          <p className="text-gray-800">{studentData.branch}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-gray-500 mt-1" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">CGPA</p>
                          <div className="flex items-center gap-1">
                            <p className="text-xl font-semibold text-gray-800">{studentData.cgpa}</p>
                            <span className="text-sm text-gray-500">/ 10.0</span>
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Card */}
              <Card className="md:col-span-3 bg-white rounded-xl shadow-sm mt-6">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Skills & Technologies</h3>
                    <p className="text-gray-500 text-sm">Technical skills and areas of expertise</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {studentData.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${index < 3 
                          ? "bg-black text-white" 
                          : "bg-gray-100 text-gray-800"}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Placement Statistics */}
              <Card className="md:col-span-3 bg-white rounded-xl shadow-sm mt-6">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      Placement Statistics
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-blue-800 mb-1">Applied Jobs</h4>
                      <p className="text-2xl font-bold text-blue-600">12</p>
                      <p className="text-xs text-blue-600 mt-1">4 in the last month</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-green-800 mb-1">Interviews Attended</h4>
                      <p className="text-2xl font-bold text-green-600">5</p>
                      <p className="text-xs text-green-600 mt-1">2 upcoming</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-purple-800 mb-1">Offers Received</h4>
                      <p className="text-2xl font-bold text-purple-600">2</p>
                      <p className="text-xs text-purple-600 mt-1">1 accepted</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education History */}
              <Card className="md:col-span-3 bg-white rounded-xl shadow-sm mt-6">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      Education History
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-2 border-blue-500 pl-4 pb-6">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-800">Bachelor of Technology in Computer Science</h4>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2020 - 2024</span>
                      </div>
                      <p className="text-gray-600 mt-1">{studentData.college}</p>
                      <p className="text-sm mt-2 text-gray-700">CGPA: <span className="font-medium">{studentData.cgpa}/10.0</span></p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-800">Higher Secondary Education</h4>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2018 - 2020</span>
                      </div>
                      <p className="text-gray-600 mt-1">City High School</p>
                      <p className="text-sm mt-2 text-gray-700">Percentage: <span className="font-medium">92%</span></p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional sections removed as requested */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}