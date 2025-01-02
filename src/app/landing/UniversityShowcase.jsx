import React from "react";
import study from "../../assets/Study.png";
import Birmingham from "../../assets/Birmingham.svg";
import Chester from "../../assets/Chester.svg";
import Coventry from "../../assets/Coventry.svg";
import Cranfield from "../../assets/Cranfield.svg";
import Derby from "../../assets/Derby.svg";
import Middlesex from "../../assets/Middlesex.png";
import Northumbria from "../../assets/Northumbria.svg";
import Plymouth from "../../assets/Plymouth.svg";
import Roehampton from "../../assets/Roehampton.svg";
import Solent from "../../assets/Solent.svg";
import Southampton from "../../assets/Southampton.svg";
import Starthclyde from "../../assets/Starthclyde.jpg";
import Studygroup from "../../assets/Studygroup.svg";
import TCD from "../../assets/TCD.png";
import Ulaw from "../../assets/Ulaw.svg";
import Ulster from "../../assets/Ulster.png";
import Winchester from "../../assets/Winchester.svg";

const UniversityShowcase = () => {
  const universities = [
    { name: "University College Birmingham", image: Birmingham },
    { name: "University of Chester", image: Chester },
    { name: "Coventry University", image: Coventry },
    { name: "Cranfield University", image: Cranfield },
    { name: "University of Derby", image: Derby },
    { name: "Middlesex University", image: Middlesex },
    { name: "Northumbria University", image: Northumbria },
    { name: "University of Plymouth", image: Plymouth },
    { name: "University of Roehampton", image: Roehampton },
    { name: "Solent University", image: Solent },
    { name: "University of Southampton", image: Southampton },
    { name: "University of Strathclyde", image: Starthclyde },
    { name: "Study Group", image: Studygroup },
    { name: "Trinity College Dublin", image: TCD },
    { name: "The University of Law", image: Ulaw },
    { name: "Ulster University", image: Ulster },
    { name: "University of Winchester", image: Winchester },
  ];

  // Duplicate universities for smooth looping
  
  const firstGroup = universities.slice(0, 6);
  const secondGroup = universities.slice(6, 12);
  const thirdGroup = universities.slice(12);
  
  const duplicatedUniversities = [...firstGroup, ...firstGroup,];
  const duplicatedUniversities2 = [...secondGroup, ...secondGroup,];
  const duplicatedUniversities3 = [...thirdGroup, ...thirdGroup,];
  return (
    <div className="flex justify-center items-center pt-16 bg-white p-4">
      <div className="relative w-full max-w-[1200px] bg-[#B12830] rounded-3xl px-4 sm:px-8 py-8">
        <h2 className="text-[#F7CB3B] text-3xl font-semibold text-center mb-8">
          Our Students Studying at
        </h2>

        <div className="relative overflow-hidden space-y-4 max-w-[800px]">
          <div className="scroll-container flex gap-4 animate-marquee">
            {duplicatedUniversities.map((university, index) => (
              <div
                key={`${university.name}-${index}`}
                className="bg-white hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-3 flex items-center justify-center h-24 min-w-[250px]"
              >
                <img
                  src={university.image}
                  alt={university.name}
                  className="max-h-20 object-contain"
                />
              </div>
            ))}
            <div className="bg-white p-4 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center h-24 min-w-[250px]">
              <span className="text-gray-800 text-lg">&amp; many more..</span>
            </div>
          </div>
          <div className="scroll-container-inverse flex gap-4 animate-marquee">
            {duplicatedUniversities2.map((university, index) => (
              <div
                key={`${university.name}-${index}`}
                className="bg-white hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-3 flex items-center justify-center h-24 min-w-[250px]"
              >
                <img
                  src={university.image}
                  alt={university.name}
                  className="max-h-20 object-contain"
                />
              </div>
            ))}
            <div className="bg-white p-4 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center h-24 min-w-[250px]">
              <span className="text-gray-800 text-lg">&amp; many more..</span>
            </div>
          </div>
          <div className="scroll-container flex gap-4 animate-marquee">
            {duplicatedUniversities3.map((university, index) => (
              <div
                key={`${university.name}-${index}`}
                className="bg-white hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-3 flex items-center justify-center h-24 min-w-[250px]"
              >
                <img
                  src={university.image}
                  alt={university.name}
                  className="max-h-20 object-contain"
                />
              </div>
            ))}
            <div className="bg-white p-4 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center h-24 min-w-[250px]">
              <span className="text-gray-800 text-lg">&amp; many more..</span>
            </div>
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
