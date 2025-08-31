import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import graduationImage from "../assets/graduation.svg";

export default function StudentRegister() {
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    roll: "",
    branch: "",
    graduation: "",
    hrContact: "",
    contactNumber: ""
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5002/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, ...formData }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("User registered successfully!");
        console.log(data);
      } else {
        alert(data.message || "Error registering user");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        //style={{ backgroundImage: url(${graduationImage}) }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-purple-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 shadow-xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">Create Your Account</h2>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex justify-center mb-4">
              <RadioGroup defaultValue="student" className="flex gap-6" onValueChange={setRole}>
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

            {/* Common Fields */}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-white">Name</Label>
              <Input id="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter full name" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input id="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
              <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
            </div>

            {/* Student Fields */}
            {role === "student" && (
              <>
                <div className="space-y-1">
                  <Label htmlFor="roll" className="text-white">Roll Number</Label>
                  <Input id="roll" type="text" value={formData.roll} onChange={handleChange} placeholder="Enter roll number" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="branch" className="text-white">Branch</Label>
                  <Input id="branch" type="text" value={formData.branch} onChange={handleChange} placeholder="Enter branch" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="graduation" className="text-white">Graduation Year</Label>
                  <Input id="graduation" type="text" value={formData.graduation} onChange={handleChange} placeholder="Enter graduation year" />
                </div>
              </>
            )}

            {/* Company Fields */}
            {role === "company" && (
              <>
                <div className="space-y-1">
                  <Label htmlFor="hrContact" className="text-white">HR Contact Person</Label>
                  <Input id="hrContact" type="text" value={formData.hrContact} onChange={handleChange} placeholder="HR Contact Person" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="contactNumber" className="text-white">Contact Number</Label>
                  <Input id="contactNumber" type="text" value={formData.contactNumber} onChange={handleChange} placeholder="Enter Contact Number" />
                </div>
              </>
            )}

            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
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