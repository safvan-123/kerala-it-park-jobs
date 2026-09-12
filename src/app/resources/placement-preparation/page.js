import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata = {
  title: "Placement Preparation Guide for Freshers | Kerala IT Park Jobs",

  description:
    "Placement preparation guide for freshers covering aptitude, communication, technical preparation, projects, resumes and interview readiness.",

  alternates: {
    canonical: "/resources/placement-preparation",
  },
};

const areas = [
  {
    title: "Aptitude",
    text: "Practise quantitative aptitude, logical reasoning and basic problem-solving regularly.",
  },
  {
    title: "Communication",
    text: "Work on clear introductions, professional speaking and explaining your thoughts confidently.",
  },
  {
    title: "Technical Knowledge",
    text: "Review fundamentals related to your target role and practise common technical questions.",
  },
  {
    title: "Projects",
    text: "Be ready to explain your project objective, technology, implementation, challenges and contribution.",
  },
  {
    title: "Resume",
    text: "Keep your resume concise, relevant and aligned with the roles you are targeting.",
  },
  {
    title: "Mock Interviews",
    text: "Practise with friends, trainers or by recording yourself to identify areas for improvement.",
  },
];

export default function PlacementPreparationPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Career Resources", href: "/resources" },
          { name: "Placement Preparation" },
        ]}
      />

      <section className="relative overflow-hidden bg-[#F4F7FF] py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] shadow-sm">
            Placement Preparation
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
            Prepare Before the Opportunity Arrives
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
            Good placement preparation is not something to start the night
            before an interview. Build your aptitude, communication, technical
            knowledge and professional profile gradually.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              6 Areas to Prepare
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <div
                key={area.title}
                className="group rounded-[24px] border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
              >
                <span className="text-xs font-bold text-[#3047D8]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#11194F]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-[#11194F] sm:text-3xl">
            A Simple Weekly Preparation Plan
          </h2>

          <div className="mt-10 space-y-3">
            {[
              ["Monday", "Aptitude + reasoning practice"],
              ["Tuesday", "Technical fundamentals"],
              ["Wednesday", "Project improvement / portfolio"],
              ["Thursday", "Communication + HR questions"],
              ["Friday", "Technical interview questions"],
              ["Saturday", "Mock interview + resume review"],
              ["Sunday", "Review progress and plan the next week"],
            ].map(([day, activity]) => (
              <div
                key={day}
                className="flex flex-col justify-between gap-2 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:translate-x-1 hover:border-[#3047D8]/30 sm:flex-row sm:items-center"
              >
                <span className="font-bold text-[#11194F]">{day}</span>
                <span className="text-sm text-gray-600">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11194F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Preparation Builds Confidence
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Confidence usually improves when you know you have prepared.
            Practise regularly so that when an opportunity arrives, you can
            focus on presenting your best work.
          </p>

          <Link
            href="/resources/interview-preparation"
            className="mt-7 inline-flex rounded-xl bg-[#3047D8] px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#3B5BFF]"
          >
            Start Interview Preparation →
          </Link>
        </div>
      </section>
    </>
  );
}