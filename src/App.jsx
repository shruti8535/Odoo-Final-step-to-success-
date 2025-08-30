import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import graduationImage from "./assets/graduation.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import CompanyRegister from "./pages/CompanyRegister";
import TPOLogin from "./pages/TPOLogin";
import CompanyLogin from "./pages/CompanyLogin";
import StudentDashboard from "./pages/StudentDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import TPODashboard from "./pages/TPODashboard";
import JobsPage from "./pages/JobsPage";
import PracticeExam from "./pages/PracticeExam";
import ResumeBuilder from "./pages/ResumeBuilder";
import StudentProfile from "./pages/StudentProfile";

function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Full-screen Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${graduationImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-purple-900/70"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h2 className="text-white text-xl font-bold">🎓 Placement Portal</h2>
              </div>
              <div className="flex space-x-3">
                <Link to="/student-login">
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                    Student Login
                  </Button>
                </Link>
                <Link to="/tpo-login">
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                    TPO Login
                  </Button>
                </Link>
                <Link to="/company-login">
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                    Recruiter Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Success Badge */}
            <Badge className="mb-6 px-4 py-2 bg-green-500/20 text-green-100 border border-green-400/30 text-sm">
              ✨ Your Gateway to Success
            </Badge>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 text-white drop-shadow-2xl">
              Final Step to
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Success
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your academic journey into a professional triumph.
              <br className="hidden md:block" />
              Your dream career awaits just one click away.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/student-login">
                <Button
                  size="lg"
                  className="px-12 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  🚀 Explore Drives
                </Button>
              </Link>
              
              <div className="flex items-center gap-4 text-white/80">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm">Students Placed</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-sm">Companies</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="text-white mb-2">Top Companies</h3>
                <p className="text-gray-300 text-sm">Connect with leading organizations across industries</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-white mb-2">Quick Process</h3>
                <p className="text-gray-300 text-sm">Streamlined application and selection process</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-white mb-2">Career Guidance</h3>
                <p className="text-gray-300 text-sm">Expert mentorship and career counseling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/20 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/70">© 2024 Placement Portal. Empowering futures, one placement at a time.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/company-register" element={<CompanyRegister />} />
        <Route path="/tpo-login" element={<TPOLogin />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/tpo/dashboard" element={<TPODashboard />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/practice" element={<PracticeExam />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/profile" element={<StudentProfile />} />
      </Routes>
    </Router>
  );
}