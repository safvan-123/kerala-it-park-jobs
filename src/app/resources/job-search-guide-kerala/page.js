import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata = {
  title: "Job Search Guide for Freshers in Kerala | Kerala IT Park Jobs",

  description:
    "A practical job search guide for freshers in Kerala covering career direction, resume preparation, applications, networking, interviews and job search safety.",

  alternates: {
    canonical: "/resources/job-search-guide-kerala",
  },
};

const steps = [
  {
    number: "01",
    title: "Choose Your Target Role",
    text: "Identify two or three realistic roles based on your education, skills and interests. A clear target helps you prepare a better resume and search more effectively.",
  },
  {
    number: "02",
    title: "Prepare a Focused Resume",
    text: "Keep your resume relevant to the role. Highlight useful projects, internships, technical skills and measurable achievements instead of adding unnecessary information.",
  },
  {
    number: "03",
    title: "Build Your Online Profile",
    text: "Keep your LinkedIn, GitHub or portfolio updated when relevant to your career. Employers may review these profiles before contacting you.",
  },
  {
    number: "04",
    title: "Search Consistently",
    text: "Check suitable opportunities regularly instead of searching only once every few weeks. Consistency helps you apply earlier to relevant openings.",
  },
  {
    number: "05",
    title: "Apply Selectively",
    text: "Read the requirements carefully and apply when your profile reasonably matches the opportunity. Quality applications are usually better than completely random applications.",
  },
  {
    number: "06",
    title: "Track Your Applications",
    text: "Maintain a simple list of company, role, date applied, status and follow-up. This keeps your job search organized.",
  },
];

const safetyTips = [
  "Verify the company and role before sharing sensitive information.",
  "Be cautious if someone asks for money simply to attend an interview.",
  "Read the official job description whenever it is available.",
  "Check email domains and company websites when communication looks suspicious.",
  "Never share passwords, OTPs or banking credentials with recruiters.",
];

export default function JobSearchGuidePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Career Resources", href: "/resources" },
          { name: "Job Search Guide" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F4F7FF]">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#3047D8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] shadow-sm">
              Fresher Job Search
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
              Job Search Guide for Freshers in Kerala
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
              A successful job search is not only about sending more
              applications. It is about improving your profile, choosing the
              right opportunities and staying consistent long enough to find
              the right match.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Start Smarter
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#11194F] sm:text-3xl lg:text-4xl">
              Stop Applying Without a Direction
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            <p>
              Many freshers apply to completely different roles using the same
              resume. That can make the job search less effective.
            </p>

            <p>
              Start by deciding what you are targeting. Then prepare your
              resume, projects and interview skills around that direction.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Your Action Plan
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              6 Steps to Improve Your Job Search
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F7FF] text-xs font-bold text-[#3047D8] transition-all duration-300 group-hover:bg-[#3047D8] group-hover:text-white">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#11194F]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY ROUTINE */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[28px] bg-[#11194F] p-6 text-white sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200">
              Simple Routine
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              A Practical Daily Job Search Routine
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                ["20 Min", "Search relevant vacancies"],
                ["20 Min", "Apply carefully"],
                ["20 Min", "Improve one career skill"],
                ["10 Min", "Track applications"],
              ].map(([time, text]) => (
                <div
                  key={text}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <p className="text-sm font-bold text-blue-200">{time}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-200">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
            Stay Safe
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl">
            Check Opportunities Before You Proceed
          </h2>

          <div className="mt-8 space-y-3">
            {safetyTips.map((tip) => (
              <div
                key={tip}
                className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-[#3047D8]/30"
              >
                <span className="font-bold text-[#3047D8]">✓</span>

                <p className="text-sm leading-7 text-gray-600">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#11194F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Stay Consistent Even When Results Take Time
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Job searching can take time. Use that time to keep improving your
            resume, skills, projects and interview readiness.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/resources/resume-guide-for-freshers"
              className="rounded-xl bg-[#3047D8] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#3B5BFF]"
            >
              Improve Your Resume
            </Link>

            <Link
              href="/fresher-jobs-kerala"
              className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              Explore Fresher Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}