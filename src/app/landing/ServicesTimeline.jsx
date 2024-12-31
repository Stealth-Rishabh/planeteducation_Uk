import React from "react";

const services = [
  {
    title: "Student Profile Analysis",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
  },
  {
    title: "Career Counseling",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Course/ University Selection",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Application & Admission Assistance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
      </svg>
    ),
  },
  {
    title: "Financial Aid & Scholarship",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
        <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
        <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
      </svg>
    ),
  },
  {
    title: "Pre-Departure Briefing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
  {
    title: "Post-Arrival Assistance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a3 3 0 0 1 4.22 0l2.4 2.4" />
        <path d="m18 15-2-2" />
        <path d="m15 18-2-2" />
      </svg>
    ),
  },
];

export default function ServicesTimeline() {
  const [isVisible, setIsVisible] = React.useState(false);
  const timelineRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        className={`text-center mb-16 sm:mb-20 ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Services
        </h2>
      </div>

      <div className="relative" ref={timelineRef}>
        {/* Timeline line */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 h-[80%] md:h-1 w-1 md:w-4/5 mx-auto bg-amber-200 top-[105px] md:top-10 ${
            isVisible
              ? "animate-growLine"
              : "scale-y-0 md:scale-y-100 md:scale-x-0"
          }`}
        />

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-16 md:gap-8 md:grid-cols-7">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col items-center relative ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon circle */}
              <div className="relative mb-4 z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-lg transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
              </div>

              {/* Service title */}
              <h3 className="text-sm bg-white py-2 z-10 font-medium text-gray-900 text-center sm:text-base md:mb-0">
                {service.title}
              </h3>

              {/* Connecting dot */}
              {index < services.length - 1 && (
                <div className="absolute h-[10px] w-[10px] shadow-lg bg-amber-500 rounded-full left-1/2 -translate-x-1/2 top-[150px] md:top-[37px] md:left-auto md:-right-[40%] md:transform md:translate-x-[40%] animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
