import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import graduationImage from "../assets/graduation.svg";

export default function TPOLogin() {
  const [role, setRole] = useState("tpo");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Static TPO credentials
  const STATIC_EMAIL = "tpocgc@gmail.com";
  const STATIC_PASSWORD = "tpo123";

  const handleLogin = () => {
    if (role === "tpo") {
      if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
        navigate("/tpo/dashboard");
      } else {
        setError("Invalid email or password for TPO login");
      }
    } else if (role === "student") {
      navigate("/student/dashboard");
    } else if (role === "company") {
      navigate("/company/dashboard");
    }
  };

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
            <h2 className="text-2xl font-bold text-white">TPO Login</h2>
            <p className="text-white/70 mt-2">Training & Placement Officer Portal</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <div className="flex justify-center mb-4">
                <RadioGroup defaultValue="tpo" className="flex gap-6" onValueChange={setRole}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="t-student" checked={role === "student"} />
                    <Label htmlFor="t-student" className="text-white">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="company" id="t-company" checked={role === "company"} />
                    <Label htmlFor="t-company" className="text-white">Company</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tpo" id="t-tpo" checked={role === "tpo"} />
                    <Label htmlFor="t-tpo" className="text-white">TPO</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-1">
                <Label htmlFor="tpo-email" className="text-white">Email</Label>
                <Input 
                  id="tpo-email" 
                  type="email" 
                  placeholder="Enter email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="tpo-password" className="text-white">Password</Label>
                <Input 
                  id="tpo-password" 
                  type="password" 
                  placeholder="Enter password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>
            </div>

            {/* Error message */}
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            <Button 
              type="button" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors"
              onClick={handleLogin}
            >
              Login
            </Button>

            <div className="text-center mt-4">
              <p className="text-white/80 text-sm">
                <Link to="/forgot-password" className="text-blue-300 hover:text-blue-200 hover:underline">
                  Forgot password?
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
