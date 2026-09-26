import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata = {
  title:
    "Placement Preparation for Freshers | IT Jobs, Aptitude & Interview Guide",

  description:
    "Placement preparation guide for freshers covering aptitude, communication, technical interview preparation, projects, resumes, mock interviews and IT job readiness.",

  alternates: {
    canonical: "/resources/placement-preparation",
  },

  openGraph: {
    title:
      "Placement Preparation for Freshers | Kerala IT Park Jobs",
    description:
      "Prepare for IT placements with aptitude, communication, technical preparation, projects, resume guidance and mock interview practice.",
    url: "https://keralaitparkjobs.in/resources/placement-preparation",
    siteName: "Kerala IT Park Jobs",
    type: "article",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const areas = [
  {
    title: "Aptitude & Reasoning",
    text: "Practise quantitative aptitude, logical reasoning, basic mathematics and problem-solving regularly for fresher placement tests and recruitment assessments.",
  },
  {
    title: "Communication Skills",
    text: "Work on clear introductions, professional speaking, explaining your thoughts confidently and answering HR interview questions in a structured way.",
  },
  {
    title: "Technical Knowledge",
    text: "Review programming, database, web, testing or other technical fundamentals related to your target IT role and practise common interview questions.",
  },
  {
    title: "Projects",
    text: "Be ready to explain your project objective, technologies used, implementation, challenges, solutions and your individual contribution.",
  },
  {
    title: "Resume",
    text: "Keep your fresher resume concise, relevant and aligned with the IT or software roles you are targeting.",
  },
  {
    title: "Mock Interviews",
    text: "Practise with friends, trainers or by recording yourself to improve communication, technical answers and interview confidence.",
  },
];

export default function PlacementPreparationPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Placement Preparation Guide for Freshers",
    description:
      "Placement preparation guide for freshers covering aptitude, communication, technical preparation, projects, resume building and interview readiness.",
    url: "https://keralaitparkjobs.in/resources/placement-preparation",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://keralaitparkjobs.in/resources/placement-preparation",
    },
    publisher: {
      "@type": "Organization",
      name: "Kerala IT Park Jobs",
      url: "https://keralaitparkjobs.in",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Career Resources",
        item: "https://keralaitparkjobs.in/resources",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Placement Preparation",
        item:
          "https://keralaitparkjobs.in/resources/placement-preparation",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Breadcrumb
        items={[
          { name: "Career Resources", href: "/resources" },
          { name: "Placement Preparation" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F4F7FF] py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] shadow-sm">
            Placement Preparation
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl md:text-5xl lg:text-6xl">
            Placement Preparation Guide for Freshers
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
            Prepare for IT and software placements with a structured approach
            to aptitude, communication, technical skills, projects, resumes
            and interviews. Good preparation helps you become ready before
            the right opportunity arrives.
          </p>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Fresher Placement Preparation
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              6 Important Areas to Prepare
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Focus on these areas before attending campus placements,
              walk-in interviews, fresher recruitment drives and IT job
              interviews.
            </p>
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

      {/* TECHNICAL PREPARATION */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              IT Placement Preparation
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              Prepare for Technical and Software Job Interviews
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Your technical preparation should match the role you are
              targeting. Freshers applying for software and IT jobs should be
              ready to explain fundamentals, projects and practical skills.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Revise Fundamentals",
                text: "Review important concepts related to programming, databases, web development, testing, networking or your chosen technical area.",
              },
              {
                title: "Prepare Projects",
                text: "Know how to explain your project flow, technologies used, database structure, features, challenges and your contribution.",
              },
              {
                title: "Practise Questions",
                text: "Practise coding, debugging, technical questions and role-specific interview problems before attending recruitment processes.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[24px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
              >
                <span className="text-xs font-bold text-[#3047D8]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#11194F]">
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

      {/* WEEKLY PLAN */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-[#11194F] sm:text-3xl">
            A Simple Weekly Placement Preparation Plan
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-gray-600 sm:text-base">
            Follow a simple routine each week instead of trying to prepare
            everything immediately before an interview.
          </p>

          <div className="mt-10 space-y-3">
            {[
              ["Monday", "Aptitude + logical reasoning practice"],
              ["Tuesday", "Programming / technical fundamentals"],
              ["Wednesday", "Project improvement / portfolio / GitHub"],
              ["Thursday", "Communication + HR interview questions"],
              ["Friday", "Technical interview questions + coding practice"],
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

      {/* RELATED PREPARATION */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Career Preparation
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              Continue Your IT Job Preparation
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Placement preparation works best when your resume, interview
              skills and job search strategy are improved together.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Link
              href="/resources/interview-preparation"
              className="group rounded-[24px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#11194F]">
                Interview Preparation
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Practise HR questions, technical interviews, communication and
                project explanations before attending interviews.
              </p>
            </Link>

            <Link
              href="/resources/resume-guide-for-freshers"
              className="group rounded-[24px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#11194F]">
                Resume Guide for Freshers
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Build a clear fresher resume highlighting technical skills,
                projects, internships and relevant achievements.
              </p>
            </Link>

            <Link
              href="/resources/job-search-guide-kerala"
              className="group rounded-[24px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#11194F]">
                Kerala Job Search Guide
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Learn how to search consistently, choose target roles and
                improve your job application strategy.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* IT JOB LINKS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8]">
              Explore Opportunities
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#11194F] sm:text-3xl lg:text-4xl">
              Explore IT and Fresher Jobs in Kerala
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/it-jobs-kerala"
              className="group rounded-[24px] border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#11194F]">
                IT Jobs in Kerala
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Explore software and technology career opportunities across
                Kerala.
              </p>
            </Link>

            <Link
              href="/fresher-jobs-kerala"
              className="group rounded-[24px] border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#11194F]">
                Fresher Jobs in Kerala
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Explore entry-level and fresher opportunities across Kerala.
              </p>
            </Link>

            <Link
              href="/infopark-jobs"
              className="group rounded-[24px] border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#11194F]">
                Infopark Jobs
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Explore IT and software career opportunities around Infopark
                Kochi.
              </p>
            </Link>

            <Link
              href="/technopark-jobs"
              className="group rounded-[24px] border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3047D8]/30 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#11194F]">
                Technopark Jobs
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Explore fresher and IT career opportunities around Technopark
                Trivandrum.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#11194F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Prepare Before the Right IT Opportunity Arrives
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Build your aptitude, communication, technical knowledge, projects
            and interview readiness consistently so that you are prepared when
            suitable fresher and IT job opportunities appear.
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