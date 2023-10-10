import React, { useState, useEffect } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetter: "",
    resume: null,
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation here if needed

    // Simulate submission success
    setSubmitted(true);
  };

  useEffect(() => {
    // Reset the form data after submission
    if (submitted) {
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          coverLetter: "",
          resume: null,
        });
        setSubmitted(false);
      }, 3000); // Reset after 3 seconds (you can adjust this)
    }
  }, [submitted]);

  // Render the success page with user data
  if (submitted) {
    return (
      <div>
        <h2>Application Submitted Successfully!</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Cover Letter Note: {formData.coverLetter}</p>
        {/* Display file details */}
        {formData.resume && (
          <p>
            Resume: {formData.resume.name} ({(formData.resume.size / 1024).toFixed(2)} KB)
          </p>
        )}
      </div>
    );
  }

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="coverLetter">Cover Letter Note:</label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="resume">Resume:</label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleFileChange}
        />
      </div>
      <button className="flex items-center gap-2 bg-slate-600 w-28 justify-center rounded-md py-2 text-white mt-8" type="submit">Apply</button>
    </form>
  );
};

export default ApplicationForm;
