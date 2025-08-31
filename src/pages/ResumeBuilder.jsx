import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [resumeVersions, setResumeVersions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const previewRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    objective: "",
    skills: "",
    project: "",
    degree: "",
    year: "",
    university: "",
    cgpa: "",
    certificate: "",
    certYear: "",
    org: "",
    template: 1,
  });

  // fetch saved resumes
  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/resumes");
      const data = await res.json();
      setResumeVersions(data || []);
    } catch (err) {
      console.error("Fetch resumes error:", err);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((p) => ({ ...p, [id]: value }));
  };

  const saveToDB = async () => {
    try {
      const payload = { ...formData, template: selectedTemplate };
      if (isEditing && editingId) {
        const res = await fetch(`http://localhost:5000/api/resumes/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const result = await res.json();
        setResumeVersions((prev) => prev.map((r) => (r._id === editingId ? result.resume : r)));
        setIsEditing(false);
        setEditingId(null);
        alert("Updated ✅");
      } else {
        const res = await fetch("http://localhost:5000/api/resumes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const result = await res.json();
        setResumeVersions((prev) => [result.resume, ...prev]);
        alert("Saved ✅");
      }
      // reset form if you'd like:
      // setFormData({...}); 
    } catch (err) {
      console.error("Save error:", err);
      alert("Save failed — check console.");
    }
  };

  const deleteResume = async (id) => {
    if (!confirm("Delete this resume?")) return;
    try {
      await fetch(`http://localhost:5000/api/resumes/${id}`, { method: "DELETE" });
      setResumeVersions((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const startEdit = (version) => {
    setIsEditing(true);
    setEditingId(version._id);
    setSelectedTemplate(version.template || 1);
    // map backend fields to form
    setFormData({
      name: version.name || "",
      email: version.email || "",
      contact: version.contact || "",
      location: version.location || "",
      objective: version.objective || "",
      skills: version.skills || "",
      project: version.project || "",
      degree: version.degree || "",
      year: version.year || "",
      university: version.university || "",
      cgpa: version.cgpa || "",
      certificate: version.certificate || "",
      certYear: version.certYear || "",
      org: version.org || "",
      template: version.template || 1,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // generate pdf from previewRef (current formData)
  const generatePDF = async () => {
    try {
      // ensure preview reflects latest template selection
      const el = previewRef.current;
      if (!el) {
        alert("Preview not ready");
        return;
      }
      // render at higher scale for better quality
      const canvas = await html2canvas(el, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${(formData.name || "resume").replace(/\s+/g, "_")}.pdf`);
    } catch (err) {
      console.error("PDF generation error:", err);
      alert("Failed to generate PDF — check console.");
    }
  };

  // download resume from saved version: populate preview quickly then generate pdf
  const downloadSavedResume = async (version) => {
    // populate preview with version data, then generate PDF shortly after to let React render preview
    setSelectedTemplate(version.template || 1);
    setFormData({
      name: version.name || "",
      email: version.email || "",
      contact: version.contact || "",
      location: version.location || "",
      objective: version.objective || "",
      skills: version.skills || "",
      project: version.project || "",
      degree: version.degree || "",
      year: version.year || "",
      university: version.university || "",
      cgpa: version.cgpa || "",
      certificate: version.certificate || "",
      certYear: version.certYear || "",
      org: version.org || "",
      template: version.template || 1,
    });
    // small delay to let React paint preview before capturing
    setTimeout(() => generatePDF(), 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-blue-800 text-xl font-bold">🎓 Placement Tracker Portal</Link>
            <div className="flex space-x-4">
              <Link to="/student/dashboard" className="text-blue-800 px-3 py-2">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Templates */}
          <h2 className="text-2xl font-bold text-orange-500 mb-4">📄 Select a Resume Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[1, 2, 3].map((t) => (
              <div key={t} className={`border rounded-lg p-4 ${selectedTemplate === t ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}>
                <h3 className="text-lg mb-2">Template {t}</h3>
                <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500 mb-3">Preview</div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setSelectedTemplate(t)}>Select Template</Button>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold mb-4">1. Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="contact">Contact</Label>
                <Input id="contact" value={formData.contact} onChange={handleChange} placeholder="+1234567890" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" value={formData.location} onChange={handleChange} placeholder="City, State" className="mt-1" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold mb-4">2. Career Objective</h3>
            <textarea id="objective" value={formData.objective} onChange={handleChange}
              className="w-full border p-2 rounded" rows="3" placeholder="Aspiring Software Engineer..." />
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold mb-4">3. Skills</h3>
            <Input id="skills" value={formData.skills} onChange={handleChange} placeholder="JavaScript, React..." />
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold mb-4">4. Projects</h3>
            <textarea id="project" value={formData.project} onChange={handleChange}
              className="w-full border p-2 rounded" rows="3" placeholder="Project 1: ..." />
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold mb-4">5. Education Details</h3>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <Input id="degree" value={formData.degree} onChange={handleChange} placeholder="B.Tech" />
              <Input id="year" value={formData.year} onChange={handleChange} placeholder="2024" />
              <Input id="university" value={formData.university} onChange={handleChange} placeholder="University" />
              <Input id="cgpa" value={formData.cgpa} onChange={handleChange} placeholder="8.5" />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold mb-4">6. Additional Information</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <Input id="certificate" value={formData.certificate} onChange={handleChange} placeholder="Certificate" />
              <Input id="certYear" value={formData.certYear} onChange={handleChange} placeholder="Year" />
              <Input id="org" value={formData.org} onChange={handleChange} placeholder="Organization" />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button className="bg-gray-600 hover:bg-gray-700" onClick={saveToDB}>
              {isEditing ? "Update" : "Save"}
            </Button>
            <div className="flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => generatePDF()}>
                Generate Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Preview + Resume Versions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Preview (used for PDF) */}
          <div ref={previewRef} className="bg-white rounded-lg shadow-md p-6">
            {/* Simple dynamic template (you can style per selectedTemplate) */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">{formData.name || "Your Name"}</h1>
                <p>{formData.email} · {formData.contact} · {formData.location}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">Template {selectedTemplate}</p>
              </div>
            </div>

            <hr className="my-3" />
            <h2 className="font-semibold">Objective</h2>
            <p>{formData.objective}</p>

            <h2 className="font-semibold mt-3">Skills</h2>
            <p>{formData.skills}</p>

            <h2 className="font-semibold mt-3">Projects</h2>
            <p>{formData.project}</p>

            <h2 className="font-semibold mt-3">Education</h2>
            <p>{formData.degree} — {formData.university} ({formData.year}) · {formData.cgpa}</p>

            <h2 className="font-semibold mt-3">Certificates</h2>
            <p>{formData.certificate} ({formData.certYear}) — {formData.org}</p>
          </div>

          {/* Resume Versions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">📂 Your Resume Versions</h2>
            <div className="space-y-4">
              {resumeVersions.length === 0 && <p className="text-gray-500">No saved resumes yet.</p>}
              {resumeVersions.map((v) => (
                <div key={v._id} className="border rounded p-3 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{v.name || "Untitled Resume"}</h3>
                      <p className="text-sm text-gray-500">Template {v.template} · {new Date(v.updatedAt || v.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600" onClick={() => startEdit(v)}>Edit</Button>
                      <Button size="sm" className="bg-gray-600" onClick={() => downloadSavedResume(v)}>Download</Button>
                      <Button size="sm" className="bg-red-600" onClick={() => deleteResume(v._id)}>Delete</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-blue-100 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-blue-800">Placement Tracker Portal</div>
      </footer>
    </div>
  );
}
