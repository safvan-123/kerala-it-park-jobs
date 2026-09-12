const faqs = [
  {
    question: "Where can I find latest jobs in Kerala?",
    answer:
      "Kerala IT Park Jobs shares IT, non-IT, fresher, government, internship, private and walk-in opportunities through Instagram and WhatsApp communities.",
  },
  {
    question: "Where can I find fresher jobs in Kerala?",
    answer:
      "Kerala IT Park Jobs shares fresher, graduate, trainee, internship and entry-level opportunities from across Kerala.",
  },
  {
    question: "Do you share Infopark jobs?",
    answer:
      "Yes. Kerala IT Park Jobs shares relevant opportunities from Infopark Kochi and companies located in and around Kerala's major IT hubs.",
  },
  {
    question: "Do you share Technopark and Cyberpark jobs?",
    answer:
      "Yes. Kerala IT Park Jobs covers opportunities related to Technopark Trivandrum, Cyberpark Kozhikode and other Kerala technology hubs.",
  },
  {
    question: "Do you share non-IT jobs?",
    answer:
      "Yes. We share accounting, HR, sales, marketing, healthcare, customer service and other non-IT opportunities.",
  },
  {
    question: "How can I receive Kerala job updates?",
    answer:
      "Follow Kerala IT Park Jobs on Instagram and join our WhatsApp Channel or WhatsApp job communities.",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#3047D8]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#3B5BFF]/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3047D8]/10 bg-white px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3047D8] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3047D8]" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3047D8] sm:text-sm">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#11194F] sm:text-4xl lg:text-5xl">
            Questions About
            <span className="text-[#3047D8]"> Kerala Jobs?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
            Find quick answers about Kerala job updates, fresher opportunities,
            IT park jobs and how to stay connected with our community.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-10 space-y-4 sm:mt-12">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3047D8]/30 hover:shadow-[0_12px_30px_rgba(48,71,216,0.08)] open:border-[#3047D8]/25 open:shadow-[0_14px_35px_rgba(48,71,216,0.10)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6">
                <div className="flex min-w-0 items-center gap-4">
                  {/* NUMBER */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F7FF] text-xs font-bold text-[#3047D8] transition-all duration-300 group-open:bg-[#3047D8] group-open:text-white sm:h-11 sm:w-11">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-left text-sm font-bold leading-6 text-[#11194F] transition-colors duration-300 group-hover:text-[#3047D8] sm:text-base md:text-lg">
                    {faq.question}
                  </h3>
                </div>

                {/* PLUS ICON */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-xl font-light text-[#3047D8] transition-all duration-300 group-hover:border-[#3047D8]/30 group-hover:bg-[#F4F7FF] group-open:rotate-45 group-open:border-[#3047D8] group-open:bg-[#3047D8] group-open:text-white">
                  +
                </div>
              </summary>

              {/* ANSWER */}
              <div className="border-t border-gray-100 px-5 pb-6 pt-5 sm:px-6">
                <div className="ml-0 sm:ml-[60px]">
                  <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* BOTTOM INFO */}
        <div className="mt-10 rounded-3xl border border-[#3047D8]/10 bg-white p-5 text-center shadow-sm sm:p-6">
          <p className="text-sm leading-7 text-gray-600 sm:text-base">
            Stay connected with Kerala IT Park Jobs for regular job updates
            across IT, non-IT, fresher, government and private opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}