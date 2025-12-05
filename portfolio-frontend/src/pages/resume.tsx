import React from "react";

type Props = {
  resumeUrl: string; // Link to your PDF resume
};

const ResumeDownloadPage: React.FC<Props> = ({ resumeUrl }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">My Resume</h1>
        <p className="text-gray-600 mb-6">
          Thank you for visiting my portfolio! You can download my resume below
          to learn more about my experience and skills.
        </p>

        <a
          href="/Filimon_Alem_Resume.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Download Resume
        </a>

        <p className="text-gray-400 text-sm mt-4">
          PDF format. Updated regularly.
        </p>
      </div>
    </section>
  );
};

export default ResumeDownloadPage;
