import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata = {
  title: "Resume Guide for Freshers | Kerala IT Park Jobs",

  description:
    "Learn how to create a professional fresher resume with the right structure, skills, projects, internships and common resume mistakes to avoid.",

  alternates: {
    canonical: "/resources/resume-guide-for-freshers",
  },
};

const resumeSections = [
  {
    title: "Contact Information",
    text: "Include your name, phone number, professional email address, location and relevant professional links.",
  },
  {
    title: "Professional Summary",
    text: "Write two or three lines explaining your background, strongest skills and the type of opportunity you are targeting.",
  },
  {
    title: "Education",
    text: "Mention qualification, institution, graduation year and relevant academic information clearly.",
  },
  {
    title: "Skills",
    text: "List skills that are actually relevant to the position. Avoid adding tools you cannot explain during an interview.",
  },
  {
    title: "Projects",
    text: "Projects can be especially valuable for freshers. Explain what you built, what technologies you used and your contribution.",
  },
  {
    title: "Internships & Experience",
    text: "Include internships, freelance work, volunteering or practical experience when it adds value to the role.",
  },
];

const mistakes = [
  "Using the same resume for every type of role",
  "Adding skills you cannot explain",
  "Long paragraphs instead of concise information",
  "Spelling or formatting mistakes",
  "Unprofessional email addresses",
  "Adding unnecessary personal information",
  "Listing projects without explaining your contribution",
];

export default function ResumeGuidePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Career Resources", href: "/resources" },
          { name: "Resume Guide" },
        ]}
      />

      <section className="relative overflow-hidden bg-[#F4F7FF] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#3047D8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] shadow-sm">
            Resume Preparation
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
            Resume Guide for Freshers
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
            Your resume does not need to be complicated. It needs to make your
            value easy to understand. A clear, focused resume can help an
            employer quickly see your skills, projects and potential.
          </p>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-[#3047D8]/10 bg-[#F8FAFC] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Remember
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl">
              You Do Not Need Years of Experience to Show Potential
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              As a fresher, employers may look at your education, projects,
              internships, technical skills, communication and willingness to
              learn. Your resume should make those strengths easy to identify.
            </p>
          </div>
        </div>
      </section>

      {/* STRUCTURE */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Resume Structure
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              What Your Fresher Resume Should Include
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resumeSections.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F7FF] text-xs font-bold text-[#3047D8] transition-all duration-300 group-hover:bg-[#3047D8] group-hover:text-white">
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#11194F]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE ORDER */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Simple Format
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl">
              Recommended Fresher Resume Order
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Keep the most relevant information easy to find. For many
              freshers, this simple structure works well.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "1. Name & Contact Information",
              "2. Professional Summary / Career Objective",
              "3. Education",
              "4. Technical / Relevant Skills",
              "5. Projects",
              "6. Internship / Experience",
              "7. Certifications or Achievements",
              "8. Relevant Additional Information",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-[#F8FAFC] px-5 py-4 text-sm font-semibold text-[#11194F] transition-all duration-300 hover:translate-x-1 hover:border-[#3047D8]/30"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISTAKES */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#11194F] sm:text-3xl">
            Common Resume Mistakes to Avoid
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4"
              >
                <span className="font-bold text-red-500">×</span>
                <p className="text-sm leading-7 text-gray-600">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#11194F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Your Resume Should Grow as Your Skills Grow
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Review your resume regularly. Every meaningful project,
            internship, certification or new skill can strengthen your profile.
          </p>

          <Link
            href="/resources/interview-preparation"
            className="mt-7 inline-flex rounded-xl bg-[#3047D8] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#3B5BFF]"
          >
            Prepare for Interviews →
          </Link>
        </div>
      </section>
    </>
  );
}