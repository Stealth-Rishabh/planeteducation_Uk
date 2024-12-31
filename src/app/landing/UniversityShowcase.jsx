import React from "react";
import study from "../../assets/Study.png";

const UniversityShowcase = () => {
  return (
    <div className="flex justify-center items-center pt-16 bg-white p-4">
      <div className="relative w-full max-w-[1200px] bg-[#B12830] rounded-3xl px-4 sm:px-8 py-8">
        <h2 className="text-[#F7CB3B] text-3xl font-semibold text-center mb-8">
          Our Students Studying at
        </h2>

        <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 max-w-[800px]">
          {/* University of Edinburgh */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img
              src="/placeholder.svg"
              alt="University of Edinburgh"
              className="max-h-16 object-contain"
            />
          </div>

          {/* Manchester University */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img
              src="/placeholder.svg"
              alt="Manchester University"
              className="max-h-16 object-contain"
            />
          </div>

          {/* Warwick University */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img
              src="/placeholder.svg"
              alt="Warwick University"
              className="max-h-16 object-contain"
            />
          </div>

          {/* Ulster University */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img
              src="/placeholder.svg"
              alt="Ulster University"
              className="max-h-16 object-contain"
            />
          </div>

          {/* Southampton University */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img
              src="/placeholder.svg"
              alt="University of Southampton"
              className="max-h-16 object-contain"
            />
          </div>

          {/* Newcastle University */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img
              src="/placeholder.svg"
              alt="Newcastle University"
              className="max-h-16 object-contain"
            />
          </div>

          {/* Coventry University */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img
              src="/placeholder.svg"
              alt="Coventry University"
              className="max-h-16 object-contain"
            />
          </div>

          {/* University College Birmingham */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <img
              src="/placeholder.svg"
              alt="University College Birmingham"
              className="max-h-16 object-contain"
            />
          </div>

          {/* More text box */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
            <span className="text-gray-800 text-lg">&amp; many more..</span>
          </div>
        </div>

        {/* Person image */}
        <div className="absolute -right-[86px] top-[42.4%] transform -translate-y-1/2 hidden lg:block">
          <img
            src={study}
            alt="Education Consultant"
            className="h-[520px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default UniversityShowcase;
