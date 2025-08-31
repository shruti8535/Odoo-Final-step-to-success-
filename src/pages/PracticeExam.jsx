import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

export default function PracticeExam() {
  const [activeTab, setActiveTab] = useState("practice");
  
  // Mock data for practice materials
  const practiceMaterials = [
    {
      id: 1,
      title: "Data Structures & Algorithms",
      description: "Practice fundamental DSA concepts with interactive exercises",
      progress: 65,
      topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"],
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Learn modern web development with hands-on projects",
      progress: 42,
      topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "API Integration"],
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Database Management",
      description: "Master SQL and NoSQL database concepts",
      progress: 28,
      topics: ["SQL Queries", "Database Design", "Indexing", "MongoDB", "Redis"],
      difficulty: "Advanced"
    },
  ];
  
  // Mock data for upcoming exams
  const upcomingExams = [
    {
      id: 1,
      title: "Technical Assessment - TechCorp",
      date: "May 20, 2024",
      time: "10:00 AM - 12:00 PM",
      topics: ["Data Structures", "Algorithms", "Problem Solving"],
      status: "Registered"
    },
    {
      id: 2,
      title: "Aptitude Test - FinTech Ltd",
      date: "May 25, 2024",
      time: "2:00 PM - 3:30 PM",
      topics: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability"],
      status: "Registration Open"
    },
    {
      id: 3,
      title: "Coding Challenge - InnovateTech",
      date: "June 5, 2024",
      time: "9:00 AM - 1:00 PM",
      topics: ["Problem Solving", "Optimization", "Code Quality"],
      status: "Coming Soon"
    },
  ];
  
  // Mock data for past exams
  const pastExams = [
    {
      id: 1,
      title: "Mock Placement Test",
      date: "April 15, 2024",
      score: "85/100",
      feedback: "Good performance in problem-solving. Need improvement in time management."
    },
    {
      id: 2,
      title: "Aptitude Practice Test",
      date: "April 2, 2024",
      score: "72/100",
      feedback: "Strong in quantitative, needs improvement in verbal reasoning."
    },
  ];

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
              <Link to="/practice" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium bg-blue-200 rounded">Practice & Exam</Link>
              <Link to="/resume" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Resume builder</Link>
              <Link to="/profile" className="text-blue-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mock Test Card */}
<div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
  <h3 className="text-lg font-medium text-gray-900">Mock Placement Test</h3>
  <p className="text-gray-600 mt-2">
    Take a full-length mock test to prepare for real placements.
  </p>
  <div className="flex justify-end mt-4">
    {/* <Link to="/mocktest/1">
      <Button className="bg-blue-600 hover:bg-blue-700">
        Start Mock Test
      </Button>
    </Link> */}
    <a
      href="https://www.indiabix.com/aptitude/questions-and-answers/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="bg-blue-600 hover:bg-blue-700">
        Start Mock Test
      </Button>
    </a>
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Practice & Exam Portal</h1>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'practice' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('practice')}
          >
            Practice Materials
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'upcoming' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Exams
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'past' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('past')}
          >
            Past Exams
          </button>
        </div>
        
        {/* Practice Materials Tab */}
        {activeTab === 'practice' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceMaterials.map((material) => (
                <div key={material.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold text-gray-900">{material.title}</h2>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${material.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : material.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {material.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{material.description}</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{material.progress}%</span>
                      </div>
                      <Progress value={material.progress} className="h-2" />
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">Topics Covered:</h3>
                      <div className="flex flex-wrap gap-2">
                        {material.topics.map((topic, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Continue Learning
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Recommended Practice</h2>
              <p className="text-blue-700 mb-4">Based on your upcoming exams and performance, we recommend focusing on these areas:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-medium text-gray-900 mb-2">Data Structures</h3>
                  <p className="text-gray-600 text-sm">Focus on Trees and Graphs for upcoming technical assessments</p>
                  <Button className="mt-3 w-full bg-blue-600 hover:bg-blue-700">
                   <a href="https://test.sanfoundry.com/data-structure-tests/?utm_source=chatgpt.com" target="_blank">
   Practice Data Structure Test
</a>

                  </Button>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-medium text-gray-900 mb-2">Aptitude</h3>
                  <p className="text-gray-600 text-sm">Improve your quantitative and logical reasoning skills</p>
                  <Button className="mt-3 w-full bg-blue-600 hover:bg-blue-700">
                    <a href="https://test.sanfoundry.com/data-structure-tests/?utm_source=chatgpt.com">
  <a href="https://aptitude-test.com/?utm_source=chatgpt.com">
  Take the Aptitude Test
</a>

</a>

                  </Button>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-medium text-gray-900 mb-2">Problem Solving</h3>
                  <p className="text-gray-600 text-sm">Practice algorithmic problem solving with time constraints</p>
                  <Button className="mt-3 w-full bg-blue-600 hover:bg-blue-700">
                 <a href="https://www.practiceaptitudetests.com/?utm_source=chatgpt.com">
  Take Problem Solving Test
</a>

                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Upcoming Exams Tab */}
        {activeTab === 'upcoming' && (
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-8">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Exam Calendar</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topics</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {upcomingExams.map((exam) => (
                        <tr key={exam.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{exam.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{exam.date}</div>
                            <div className="text-sm text-gray-500">{exam.time}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-wrap gap-1">
                              {exam.topics.map((topic, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded ${exam.status === 'Registered' ? 'bg-green-100 text-green-800' : exam.status === 'Registration Open' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                              {exam.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {exam.status === 'Registered' ? (
                              <Button className="bg-blue-600 hover:bg-blue-700" size="sm">View Details</Button>
                            ) : exam.status === 'Registration Open' ? (
                              <Button className="bg-green-600 hover:bg-green-700" size="sm">Register Now</Button>
                            ) : (
                              <Button className="bg-gray-600 hover:bg-gray-700" size="sm" disabled>Coming Soon</Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Exam Preparation Tips</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Review the exam syllabus and focus on high-priority topics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Practice with time constraints to improve speed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Take mock tests to familiarize yourself with the exam pattern</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Join study groups for collaborative learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Maintain a healthy routine for optimal performance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-blue-500 mr-3">📚</div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Previous Year Question Papers</h3>
                        <p className="text-xs text-gray-500">Access past exam papers for practice</p>
                      </div>
                      <Button className="ml-auto bg-blue-600 hover:bg-blue-700" size="sm">View</Button>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-blue-500 mr-3">🎬</div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Video Tutorials</h3>
                        <p className="text-xs text-gray-500">Learn concepts through video explanations</p>
                      </div>
                      <Button className="ml-auto bg-blue-600 hover:bg-blue-700" size="sm">View</Button>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-blue-500 mr-3">📝</div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Study Materials</h3>
                        <p className="text-xs text-gray-500">Download comprehensive study guides</p>
                      </div>
                      <Button className="ml-auto bg-blue-600 hover:bg-blue-700" size="sm">View</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Past Exams Tab */}
        {activeTab === 'past' && (
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-8">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Exam History</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pastExams.map((exam) => (
                        <tr key={exam.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{exam.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{exam.date}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-green-600">{exam.score}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{exam.feedback}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Button className="bg-blue-600 hover:bg-blue-700" size="sm">View Details</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Average Score</h3>
                    <div className="text-3xl font-bold text-blue-600">78.5%</div>
                    <p className="text-xs text-gray-600 mt-1">Across all exams</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Highest Score</h3>
                    <div className="text-3xl font-bold text-green-600">85%</div>
                    <p className="text-xs text-gray-600 mt-1">Mock Placement Test</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Exams Completed</h3>
                    <div className="text-3xl font-bold text-purple-600">5</div>
                    <p className="text-xs text-gray-600 mt-1">In the last 3 months</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3">Strength Areas</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Problem Solving</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Data Structures</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Algorithms</span>
                      <span className="font-medium">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3">Areas for Improvement</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Time Management</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Verbal Reasoning</span>
                      <span className="font-medium">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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