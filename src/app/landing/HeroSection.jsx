import React from "react";

const HeroSection = () => {
  return (
    <main className="container mx-auto max-w-screen-xl px-4 py-4 sm:py-8 flex flex-col text-center sm:text-left md:flex-row gap-0 items-center md:items-start justify-between">
      {/* Left Content */}
      <div className="space-y-6 text-center mt-7 mb-10 sm:mb-0 sm:mt-10 lg:text-left">
        <div className="space-y-2 sm:space-y-4">
          <h1 className="text-[24px] leading-7 sm:text-5xl !font-light text-white">
            Planning to
            <div className="text-[40px] text-center sm:text-left sm:text-[86px] leading-[1]">Study in the UK?</div>
          </h1>
          <div className="bg-[#f6313f] animate-pulse text-white text-xl sm:text-5xl font-light py-2 px-4 inline-block rounded-sm">
            Apply for Upcoming Intakes 
          </div>
          <br />
          <div className="bg-[#f6313f] animate-pulse text-white text-xl sm:text-5xl font-light py-2 px-4 inline-block rounded-sm">
            with Planet Education
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div
        id="apply-now"
        className="relative sm:left-20 sm:-top-5 bg-gradient-to-br from-[#f6cb3d] to-[#f6cb3d]/90 p-6 !pt-14 shadow-xl max-w-[400px] custom-div rounded-sm"
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

          <form className="space-y-4">
            <input
              placeholder="Name"
              className="w-full bg-white p-2 "
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="w-full bg-white p-2 "
              required
            />
            <input
              placeholder="Phone Number"
              type="tel"
              className="w-full bg-white p-2 "
              required
            />
            <select
              className="w-full bg-white p-2"
              required
            >
              <option value="" disabled selected>Current Level of Education</option>
              <option value="12th Pass">12th Pass</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
            </select>
            <select
              className="w-full bg-white p-2"
              required
            >
              <option value="" disabled selected>Prefered Study Level</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="PhD">PhD</option>
            </select>
            <select
              className="w-full bg-white p-2"
              required
            >
              <option value="" disabled selected>Have you taken up IELET/PTE exam?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {/* <input
              placeholder="Prefered Study Level"
              className="w-full bg-white p-2"
              required
            /> */}
            {/* <input
              placeholder="Have you taken up IELET/PTE exam?"
              className="w-full bg-white p-2"
              required
            /> */}
            <button
              type="submit"
              className="px-10 rounded-sm py-2 block mx-auto bg-[#1a237e] hover:bg-[#1a237e]/90 text-white  text-[1.4rem] font-normal animate-bounce"
              style={{ marginTop: "2.5rem" }}
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
