import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import graduationImage from "../assets/graduation.svg";

export default function CompanyLogin() {
  const [role, setRole] = useState("company");
  const navigate = useNavigate();

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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Company Login</h2>
            <p className="text-white/70 mt-2">Recruiter Access Portal</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-center mb-4">
                <RadioGroup defaultValue="company" className="flex gap-6" onValueChange={setRole}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="c-student" checked={role === "student"} />
                    <Label htmlFor="c-student" className="text-white">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="company" id="c-company" checked={role === "company"} />
                    <Label htmlFor="c-company" className="text-white">Company</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tpo" id="c-tpo" checked={role === "tpo"} />
                    <Label htmlFor="c-tpo" className="text-white">TPO</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-1">
                <Label htmlFor="company-email" className="text-white">Email</Label>
                <Input 
                  id="company-email" 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="company-password" className="text-white">Password</Label>
                <Input 
                  id="company-password" 
                  type="password" 
                  placeholder="Enter password" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>
            </div>

            <Button 
              type="button" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors"
              onClick={() => {
                if (role === "student") {
                  navigate("/student/dashboard");
                } else if (role === "company") {
                  navigate("/company/dashboard");
                } else if (role === "tpo") {
                  navigate("/tpo/dashboard");
                }
              }}
            >
              Login
            </Button>

            <div className="text-center mt-4">
              <p className="text-white/80 text-sm">
                Don't have an account?{" "}
                <Link to="/company-register" className="text-blue-300 hover:text-blue-200 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}