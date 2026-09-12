import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata = {
  title: "Software Career Roadmap for Freshers | Kerala IT Park Jobs",

  description:
    "Explore software career paths including frontend, backend, full stack, software testing, data analytics and DevOps with practical learning guidance.",

  alternates: {
    canonical: "/resources/software-career-roadmap",
  },
};

const careers = [
  {
    title: "Frontend Development",
    skills: "HTML, CSS, JavaScript, React, responsive design, Git",
    link: "/frontend-developer-jobs-kerala",
  },
  {
    title: "Backend Development",
    skills: "Programming, APIs, databases, authentication, server concepts",
    link: "/backend-developer-jobs-kerala",
  },
  {
    title: "Full Stack Development",
    skills: "Frontend + backend + databases + deployment fundamentals",
    link: "/full-stack-developer-jobs-kerala",
  },
  {
    title: "Software Testing / QA",
    skills: "Testing concepts, test cases, bug reporting, API testing, automation basics",
    link: "/software-testing-jobs-kerala",
  },
  {
    title: "Data Analytics",
    skills: "Excel, SQL, data visualization, statistics and analytical thinking",
    link: "/data-analyst-jobs-kerala",
  },
  {
    title: "DevOps",
    skills: "Linux, networking, Git, cloud, CI/CD, containers and automation",
    link: "/devops-jobs-kerala",
  },
];

export default function SoftwareCareerRoadmapPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Career Resources", href: "/resources" },
          { name: "Software Career Roadmap" },
        ]}
      />

      <section className="relative overflow-hidden bg-[#F4F7FF] py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] shadow-sm">
            Software Careers
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
            Choose a Software Career Path with Better Clarity
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
            You do not need to learn every technology. Start by choosing a
            direction, build strong fundamentals and create projects that show
            what you can do.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-[28px] border border-[#3047D8]/10 bg-[#F8FAFC] p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[#11194F] sm:text-3xl">
              Do Not Choose a Technology Only Because It Is Trending
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Consider what type of work you enjoy, what you are willing to
              practise consistently and what roles you can realistically build
              toward. Strong fundamentals usually remain useful even when
              specific tools change.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Explore Paths
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              Popular Software Career Directions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {careers.map((career) => (
              <Link
                key={career.title}
                href={career.link}
                className="group rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8]">
                  {career.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {career.skills}
                </p>

                <span className="mt-6 inline-flex text-sm font-bold text-[#3047D8]">
                  Explore Related Opportunities →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-[#11194F] sm:text-3xl">
            A Simple Learning Roadmap
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Learn Fundamentals", "Understand the core concepts before chasing advanced tools."],
              ["02", "Practise Regularly", "Build small exercises and solve practical problems."],
              ["03", "Build Projects", "Create projects that demonstrate your skills."],
              ["04", "Apply & Improve", "Start applying while continuing to learn from feedback."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="group rounded-2xl border border-gray-200 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30"
              >
                <span className="text-xs font-bold text-[#3047D8]">{number}</span>

                <h3 className="mt-3 font-bold text-[#11194F]">{title}</h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11194F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Build Depth Before Trying to Learn Everything
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            A focused skill set with real projects is often more useful than a
            long list of technologies you only know at a basic level.
          </p>

          <Link
            href="/it-jobs-kerala"
            className="mt-7 inline-flex rounded-xl bg-[#3047D8] px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#3B5BFF]"
          >
            Explore IT Career Opportunities →
          </Link>
        </div>
      </section>
    </>
  );
}