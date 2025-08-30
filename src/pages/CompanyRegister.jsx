import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import graduationImage from "../assets/graduation.svg";

export default function CompanyRegister() {
  const [role, setRole] = useState("company");

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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 shadow-xl">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-white">1.1 Register as Company</h1>
            <h2 className="text-2xl font-bold text-white mt-4">Create Your Account</h2>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-center mb-4">
                <RadioGroup defaultValue="company" className="flex gap-6" onValueChange={setRole}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="r-student" checked={role === "student"} />
                    <Label htmlFor="r-student" className="text-white">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="company" id="r-company" checked={role === "company"} />
                    <Label htmlFor="r-company" className="text-white">Company</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tpo" id="r-tpo" checked={role === "tpo"} />
                    <Label htmlFor="r-tpo" className="text-white">TPO</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-1">
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Enter full name" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter password" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="confirm-password" className="text-white">Confirm Password</Label>
                <Input 
                  id="confirm-password" 
                  type="password" 
                  placeholder="Enter password" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="hr-contact" className="text-white">HR Contact</Label>
                <Input 
                  id="hr-contact" 
                  type="text" 
                  placeholder="HR Contact Person" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="contact-number" className="text-white">Contact Number</Label>
                <Input 
                  id="contact-number" 
                  type="text" 
                  placeholder="Enter Contact Number" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors"
            >
              Create Account
            </Button>

            <div className="text-center mt-4">
              <p className="text-white/80 text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-300 hover:text-blue-200 hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}