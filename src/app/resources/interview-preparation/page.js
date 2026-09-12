import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata = {
  title: "Interview Preparation for Freshers | Kerala IT Park Jobs",

  description:
    "Interview preparation guide for freshers covering HR questions, communication, technical preparation, interview behaviour and practical tips.",

  alternates: {
    canonical: "/resources/interview-preparation",
  },
};

const questions = [
  {
    question: "Tell me about yourself.",
    tip: "Give a short introduction covering education, relevant skills, projects and the type of opportunity you are seeking.",
  },
  {
    question: "Why do you want this role?",
    tip: "Connect your interests and current skills to the role instead of giving a generic answer.",
  },
  {
    question: "What are your strengths?",
    tip: "Choose strengths you can support with an example from a project, academic activity, internship or real experience.",
  },
  {
    question: "What is one area you are improving?",
    tip: "Choose a genuine area and explain what you are doing to improve it.",
  },
  {
    question: "Why should we hire you?",
    tip: "Focus on your relevant skills, learning ability, attitude and how you can contribute to the role.",
  },
  {
    question: "Where do you see yourself in a few years?",
    tip: "Show that you want to build capability, take responsibility and grow professionally.",
  },
];

export default function InterviewPreparationPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Career Resources", href: "/resources" },
          { name: "Interview Preparation" },
        ]}
      />

      <section className="relative overflow-hidden bg-[#F4F7FF] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#3047D8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] shadow-sm">
            Interview Preparation
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
            Prepare to Communicate Your Value Clearly
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
            Interviews are not only tests of knowledge. They are opportunities
            to explain your skills, thinking, experience and potential clearly.
            Preparation helps you do that with greater confidence.
          </p>
        </div>
      </section>

      {/* PREPARE */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Know the Company",
                text: "Understand what the company does, the role you are interviewing for and why the opportunity interests you.",
              },
              {
                title: "Know Your Resume",
                text: "Be ready to explain every important skill, project, internship and achievement you included.",
              },
              {
                title: "Practice Speaking",
                text: "Practice answering questions aloud. Clear communication improves through repetition, not only reading.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[24px] border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
              >
                <span className="text-xs font-bold text-[#3047D8]">
                  0{index + 1}
                </span>

                <h2 className="mt-4 text-xl font-bold text-[#11194F]">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              HR Round
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              Common Questions You Should Practice
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {questions.map((item, index) => (
              <div
                key={item.question}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:translate-x-1 hover:border-[#3047D8]/30 hover:shadow-md sm:p-6"
              >
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4F7FF] text-xs font-bold text-[#3047D8]">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-bold text-[#11194F]">
                      {item.question}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE INTERVIEW */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-[28px] bg-[#11194F] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Before You Join the Interview
            </h2>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Review the job description",
                "Review your resume",
                "Prepare two or three project explanations",
                "Check camera, microphone and internet for online interviews",
                "Keep required documents ready",
                "Join or arrive a little early",
                "Prepare one or two questions for the interviewer",
                "Keep your answers concise and relevant",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm text-gray-200 transition-all duration-300 hover:bg-white/10"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-[#11194F] sm:text-3xl">
            One Interview Does Not Define Your Career
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Every interview gives you information about what employers ask,
            where your knowledge is strong and what you should improve next.
            Use that feedback to become better prepared for the next one.
          </p>

          <Link
            href="/resources/placement-preparation"
            className="mt-7 inline-flex rounded-xl bg-[#3047D8] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2538B8]"
          >
            Continue to Placement Preparation →
          </Link>
        </div>
      </section>
    </>
  );
}