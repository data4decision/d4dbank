// StepsProcess.jsx
import React from "react";

const StepsProcess = ({ darkMode }) => {
  const primaryBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const textColor = darkMode ? "text-[#0b0b5c]" : "text-white";
  const text = darkMode ? "text-white" : "text-[#f47b20]";
  const bankBg = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const border = darkMode ? "border-[#0b0b5c]" : "border-[#f47b20]";

  return (
    <section className={`w-full ${bankBg}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-8 md:grid-cols-3">
        {/* Step 1 */}
        <StepCard
          num="01"
          title="Apply Here"
          text="Perfectly simple & easy to distinguish of choice is prevents."
          primaryBg={primaryBg}
          textColor={textColor}
          border={border}
          bankBg={bankBg}
        />
        {/* Step 2 */}
        <StepCard
          num="02"
          title="Get Call Back"
          text="Claims off duty or the obligations it will pleasures be repudiated."
          primaryBg={primaryBg}
          textColor={textColor}
          border={border}
          bankBg={bankBg}
        />
        {/* Step 3 */}
        <StepCard
          num="03"
          title="Process Your Request"
          text="Demoralized by charms pleasure of the they cannot and trouble."
          primaryBg={primaryBg}
          textColor={textColor}
          border={border}
          bankBg={bankBg}
        />
      </div>
    </section>
  );
};

const StepCard = ({ num, title, text, primaryBg, textColor, border, bankBg }) => {
  return (
    <div className="group flex flex-col items-center text-center space-y-5 cursor-pointer">
      {/* Step number circle */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full ${primaryBg} text-white font-semibold shadow-sm ring-1 ${border} transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#0b0b5c]`}
      >
        {num}
      </div>

      {/* Card box */}
      <div
        className={`flex flex-row gap-4 rounded-xl ${border} ${primaryBg} p-6 shadow-sm transition-all duration-300 group-hover:flex-row-reverse group-hover:shadow-md`}
      >
        <div className="min-w-0">
          <h3 className={`text-[15px] md:text-[25px] sm:text-[25px] font-semibold  ${text}`}>{title}</h3>
          <p className={`mt-2 text-[15px] md:text-[20px] sm:text-[20px]  ${text}`}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default StepsProcess;