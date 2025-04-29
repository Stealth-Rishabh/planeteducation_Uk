import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    qualification: "", // Current Level of Education
    course: "", // Prefered Study Level
    ielts: "", // IELTS/PTE exam status
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  // Get UTM parameters when component mounts
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFormData((prevState) => ({
      ...prevState,
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || "",
      utm_content: urlParams.get("utm_content") || "",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear previous error for this field
    setErrors((prev) => ({ ...prev, [name]: "" }));

    // Validation logic for each field
    switch (name) {
      case "Name":
        if (value && !validateName(value)) {
          setErrors((prev) => ({
            ...prev,
            Name: "Only letters and spaces are allowed",
          }));
          return; // Don't update the value if invalid
        }
        break;

      case "phone":
        // Prevent non-numeric input
        if (value && !/^\d*$/.test(value)) {
          return;
        }

        // Check first digit if entering first number
        if (
          value.length === 1 &&
          (parseInt(value) < 6 || parseInt(value) > 9)
        ) {
          setErrors((prev) => ({
            ...prev,
            phone: "Phone number must start with 6-9",
          }));
          return;
        }

        // Limit to 10 digits
        if (value.length > 10) {
          return;
        }

        // Validate complete phone number
        if (value.length === 10 && !validatePhone(value)) {
          setErrors((prev) => ({
            ...prev,
            phone: "Please enter a valid 10-digit phone number",
          }));
        }
        break;

      case "email":
        // Don't show email error while typing
        break;

      default:
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add handleBlur for email validation
  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "email" && value) {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};

    if (!formData.Name || !validateName(formData.Name)) {
      newErrors.Name = "Please enter a valid name (letters only)";
    }

    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone =
        "Please enter a valid 10-digit phone number starting with 6-9";
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.qualification) {
      newErrors.qualification = "Please select your current education level";
    }

    if (!formData.course) {
      newErrors.course = "Please select your preferred study level";
    }

    if (!formData.ielts) {
      newErrors.ielts = "Please select your IELTS/PTE status";
    }

    // If there are any errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://uk.planeteducation.info/ukPlanetAPI.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            submission_url: window.location.href,
            referrer: document.referrer || "",
          }),
        }
      );

      if (response.ok) {
        window.location.href = "/thankyou.html";
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto max-w-screen-xl px-4 py-4 sm:py-8 flex flex-col text-center md:text-right md:flex-row gap-0 items-center md:items-end justify-between">
      {/* Left Content */}
      {/* <div className="space-y-6 text-center mt-7 mb-10 sm:mb-0 sm:mt-10 lg:text-left">
        <div className="space-y-2 sm:space-y-4">
          <h1 className="text-[24px] leading-7 sm:text-5xl !font-light text-white">
            Planning to
            <div className="text-[40px] text-center sm:text-left sm:text-[86px] leading-[1]">Study in the UK?</div>
          </h1>
          <div className="bg-[#f6313f] animate-pulse text-white text-xl sm:text-5xl font-light py-2 px-4 inline-block rounded-sm">
            Apply for Upcoming Intakes 
          </div>
          <br />
          <div className="bg-[#f6313f] animate-pulse text-white text-xl sm:text-5xl font-light py-2 px-4 inline-block rounded-sm">
            with Planet Education
          </div>
        </div>
      </div> */}

      {/* Right Form */}
      <div
        id="apply-now"
        className="relative top-[17rem] sm:top-0 md:ml-auto bg-gradient-to-br from-[#f6cb3d] to-[#f6cb3d]/90 p-6 !pt-14 shadow-xl max-w-[400px] custom-div rounded-sm"
      >
        <div className="relative">
          <h3 className="text-lg sm:text-xl text-center font-bold text-black">
            Sign-up to choose your best-fit
          </h3>
          <h3 className="text-lg sm:text-xl text-center font-bold text-black">
            university or college with our
          </h3>
          <h3 className="text-lg sm:text-xl text-center font-bold text-black mb-6">
            expert counselors.
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Name"
                className={`w-full bg-white p-2 ${
                  errors.Name ? "border-red-500 border" : ""
                }`}
                required
              />
              {errors.Name && (
                <p className="text-red-500 text-xs mt-1">{errors.Name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                type="email"
                className={`w-full bg-white p-2 ${
                  errors.email ? "border-red-500 border" : ""
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                type="tel"
                className={`w-full bg-white p-2 ${
                  errors.phone ? "border-red-500 border" : ""
                }`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className={`w-full bg-white p-2 ${
                  errors.qualification ? "border-red-500 border" : ""
                }`}
                required
              >
                <option value="">Current Level of Education</option>
                <option value="12th Pass">12th Pass</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
              </select>
              {errors.qualification && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.qualification}
                </p>
              )}
            </div>

            <div>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`w-full bg-white p-2 ${
                  errors.course ? "border-red-500 border" : ""
                }`}
                required
              >
                <option value="">Prefered Study Level</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="PhD">PhD</option>
              </select>
              {errors.course && (
                <p className="text-red-500 text-xs mt-1">{errors.course}</p>
              )}
            </div>

            <div>
              <select
                name="ielts"
                value={formData.ielts}
                onChange={handleChange}
                className={`w-full bg-white p-2 ${
                  errors.ielts ? "border-red-500 border" : ""
                }`}
                required
              >
                <option value="">Have you taken up IELET/PTE exam?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.ielts && (
                <p className="text-red-500 text-xs mt-1">{errors.ielts}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-10 rounded-sm py-2 block mx-auto bg-[#1a237e] hover:bg-[#1a237e]/90 text-white text-[1.4rem] font-normal ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "animate-bounce"
              }`}
              style={{ marginTop: "2.5rem" }}
            >
              {isSubmitting ? "Submitting..." : "Register Now"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
