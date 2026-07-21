"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  category: string;
  categoryColor: string;
  dotColor: string;
  title: string;
  description: string;
  quote?: string;
  quoteAuthor?: string;
  quoteBorderColor?: string;
  images: string[];
  imageAlts: string[];
}

const projects: Project[] = [
  {
    id: "caspy-anxiety",
    category: "Anxiety Relief App",
    categoryColor: "text-red-500",
    dotColor: "bg-red-400",
    title: "Caspy: Anxiety Attack Relief Mood, Calm with Self Care Cat",
    description:
      "A calming iOS app designed to help users manage anxiety attacks with mood tracking, gratitude journaling, self-care reminders, and a comforting cat companion.",
    quote: '"Huge kudos to both of you. Incredible work in helping Caspy get off the ground since day 1."',
    quoteAuthor: "Jacob Hailton, BTCH",
    quoteBorderColor: "border-red-500/30",
    images: [
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-gratitude.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-question.jpg.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-onboarding.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-day.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-anxiety-loop.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-journal.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-trust-yourself.jpg",
    ],
    imageAlts: [
      "Caspy gratitude journaling screen for anxiety relief",
      "Caspy anxiety question prompt interface",
      "Caspy onboarding flow with self-care cat",
      "Caspy daily mood check-in dashboard",
      "Caspy anxiety loop tracking screen",
      "Caspy personal journal entry view",
      "Caspy trust yourself affirmation screen",
    ],
  },
  {
    id: "cura-mental",
    category: "Mental Health App",
    categoryColor: "text-red-400",
    dotColor: "bg-red-400",
    title: "Cura Patient Monitoring App",
    description:
      "A comprehensive mental health platform connecting patients with caregivers, tracking vital signs, and providing real-time health insights.",
    quote: '"A person who is willing to go above and beyond to deliver high quality work in record time. I hope that we may continue to collaborate together during 2021 and beyond!"',
    quoteAuthor: "Wael Kabil, Cura Health inc",
    quoteBorderColor: "border-red-500/30",
    images: [
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Cura-health-patient-monitoring-app.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Cura-health-patient-monitoring-app-blood-pressure-results.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Cura-health-patient-monitoring-app-blood-pressure-results-history.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Cura-health-patient-monitoring-app-body-temperature.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Cura-health-patient-monitoring-app-body-temperature-1.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Cura-health-patient-monitoring-app-Blood-pressure-firsttime.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Cura-health-patient-monitoring-app-preview.jpg",
    ],
    imageAlts: [
      "Cura patient monitoring dashboard overview",
      "Cura blood pressure results screen",
      "Cura blood pressure history tracking",
      "Cura body temperature monitoring interface",
      "Cura temperature tracking dark mode",
      "Cura first-time blood pressure setup",
      "Cura app preview for mental health monitoring",
    ],
  },
  {
    id: "cura-vitals",
    category: "Nutrition Coaching Platform",
    categoryColor: "text-purple-400",
    dotColor: "bg-purple-400",
    title: "Go Beyond: AI Nutrition & Meal Planning Platform",
    description:
      "AI-powered nutrition coaching platform that delivers personalized weekly meal plans, supplement recommendations, and training programs. Features a clean mobile-first dashboard with multiple meal options, progress graphs, and weekly check-ins for clients.",
    quote: '"Huge kudos to both of you. Incredible work in helping Go Beyond get off the ground since day 1."',
    quoteAuthor: "David Young, Go Beyond Health",
    quoteBorderColor: "border-purple-500/30",
    images: [
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Gobeyond-mealplan-dashboard%20design.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Gobeyond-mealplan-dashboard-design-02.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Gobeyond-mealplan-nutrition-page.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Gobeyond-mealplan-nutrition-page-02.jpg",
    ],
    imageAlts: [
      "Go Beyond nutrition coaching dashboard with personalized meal plan",
      "Go Beyond client dashboard showing weekly overview",
      "Go Beyond nutrition plan page with multiple meal options",
      "Go Beyond supplement and training plan section",
    ],
  },
  {
    id: "diamond-icq",
    category: "AI Native iOS App Development",
    categoryColor: "text-green-400",
    dotColor: "bg-green-400",
    title: "Uigeek AI: Native iOS App Development Platform",
    description:
      "Native iOS app development platform with AI companion features, real-time code generation, and seamless Xcode integration for developers building high-quality mobile experiences.",
    images: [
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/uigeek_ai.png",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Uigeek-desktop-app-development.png",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Uigeek-desktop-app-development-video.png",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Uigeek-desktop-app-development-agent-call.png",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Uigeek-desktop-app-development-pricing.png",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Uigeek-desktop-app-preview.jpg",
    ],
    imageAlts: [
      "Uigeek AI companion interface for iOS development",
      "Uigeek desktop dashboard for native app development",
      "Uigeek AI video generation tool in app development",
      "Uigeek agent call feature for developer assistance",
      "Uigeek pricing page for iOS development services",
      "Uigeek full app preview and development workflow",
    ],
  },
  {
    id: "saas-smb",
    category: "SaaS Software for SMBs",
    categoryColor: "text-blue-400",
    dotColor: "bg-blue-400",
    title: "Bizwise: Customer Management SaaS Platform",
    description:
      "Comprehensive SaaS platform for small businesses to manage customer data, imports, file uploads, group organization, and advanced search with a clean, data-dense interface.",
    images: [
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Bizwise/Saas-software-for-smbs-customers-empty-state%20%281%29.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Bizwise/Saas-software-for-smbs-search.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Bizwise/Saas-software-for-smbs-spreadsheet-error.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Bizwise/Saas-software-for-smbs-dates-search.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Bizwise/Saas-software-for-smbs-customer.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Bizwise/Saas-software-for-smbs-upload.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Saas-software-for-smbs-customers-import.png",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Bizwise/Saas-software-for-smbs-merge-customers.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Bizwise/Saas-software-for-smbs-customer-profile.jpg",
    ],
    imageAlts: [
      "Bizwise SaaS customer management empty state",
      "Bizwise advanced search functionality in customer platform",
      "Bizwise spreadsheet import error handling screen",
      "Bizwise date-based customer search interface",
      "Bizwise customer profile and data management view",
      "Bizwise file upload feature for customer data",
      "Bizwise customer import dashboard",
      "Bizwise merge duplicate customers tool",
      "Bizwise detailed customer profile page",
    ],
  },
  {
    id: "leafcare",
    category: "Mental Health & Wellness Platform",
    categoryColor: "text-violet-400",
    dotColor: "bg-violet-400",
    title: "Leafcare: Holistic Wellness Platform",
    description:
      "Holistic mental health and wellness platform featuring mindfulness exercises, sleep tracking, mood monitoring, and community support through social features and educational content.",
    images: [
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-platform06.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-website-hero.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-platform04.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-website-audio.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-platform09.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-website-testimonial%20%281%29.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-platform08.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-website-cta.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-platform01.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-website-features-02.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-website-footer%20%281%29.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Leafcare/Leafcare-wellness-platform05.jpg",
    ],
    imageAlts: [
      "Leafcare wellness platform main dashboard",
      "Leafcare wellness website hero section",
      "Leafcare mindfulness exercise interface",
      "Leafcare audio-guided meditation player",
      "Leafcare sleep tracking and mood monitoring",
      "Leafcare client testimonial and community section",
      "Leafcare progress tracking and wellness features",
      "Leafcare call-to-action and onboarding screen",
      "Leafcare holistic wellness platform overview",
      "Leafcare key features highlight section",
      "Leafcare website footer and navigation",
      "Leafcare mobile wellness app interface",
    ],
  },
];

const clients = [
  "ShopHero", "Bizwise", "Tandem", "Diamond ICQ", "Bytedance",
  "Monetta", "Restofriends", "Meal Plan", "Upworks",
];

const basicFeatures = [
  "2-3 updates per week",
  "Senior Designers (Previously at ShopHero, ByteDance, Monetta, Bizwise & Founding designer at 25+ startups)",
  "Private Slack Channel",
  "No contracts, Cancel Anytime",
  "No Meetings",
  "Product Design (Web & Mobile)",
  "Marketing Websites",
];

const launchFeatures = [
  "4-5 updates per week",
  "Senior Designers (Previously at ShopHero, Bytedance, Monetta, Bizwise & Founding Designer at 25+ startups)",
  "Private Slack Channel",
  "No contracts, Cancel Anytime",
  "Monthly 1 Launch Video",
  "Senior Designers + expanded capacity",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const projectVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

function ProjectCard({ project, isFirst }: { project: Project; isFirst: boolean }) {
  return (
    <motion.article 
      className="project-card group pb-8"
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="space-y-4 mb-6">
        {project.images.map((src, idx) => (
          <motion.div
            key={idx}
            className="relative w-full overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl border border-white/5 aspect-video"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={src}
              alt={project.imageAlts[idx] || `${project.title} screenshot`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
              priority={isFirst && idx === 0}
              loading={isFirst && idx === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
      </div>

      <div className={`flex items-center gap-2 ${project.categoryColor} text-sm font-medium mb-3`}>
        <span className={`w-1.5 h-1.5 rounded-full ${project.dotColor}`} />
        {project.category}
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-3 font-heading">{project.title}</h3>
      <p className="text-zinc-400 leading-relaxed mb-4 max-w-xl">{project.description}</p>

      {project.quote && project.quoteAuthor && (
        <motion.blockquote 
          className={`border-l-2 ${project.quoteBorderColor} pl-4 text-zinc-300 italic`}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {project.quote}
          <footer className="text-sm text-zinc-500 mt-1 not-italic">— {project.quoteAuthor}</footer>
        </motion.blockquote>
      )}
    </motion.article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0e]">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-[2fr_3fr]">
        {/* Sticky Left Sidebar */}
        <motion.aside 
          className="md:sticky md:top-0 md:h-screen bg-[#0c0c0e] border-r border-white/5 p-6 md:p-8 lg:p-10 xl:p-14 flex flex-col"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href="/" className="flex items-center gap-3 mb-12 group">
            <motion.div 
              className="w-12 h-12 overflow-hidden rounded-[12px] shadow-xl"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Uigeek-iOS-ClearDark-1024@1x.jpg"
                alt="Uigeek Logo"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </a>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.05] tracking-tight mb-8 font-heading">
            Product design agency from the Internet. We design & build AI-first products for startups & enterprises.
          </h1>

          <p className="text-zinc-500 mb-10 text-base md:text-small leading-relaxed">
            Helping founders ship beautiful, high-converting AI products, fast. Ex-ShopHero & ByteDance designers delivering results with zero contracts. Currently partnering with builders in AI Native iOS App development, AI Health Longevity, AI Texting, and AI Dev.
          </p>

          <a
            href="https://cal.com/uigeek"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-emerald-600/40 hover:bg-emerald-600/60 text-white border border-zinc-500/20 hover:border-emerald-500/40 px-8 py-4 rounded-xl font-medium w-fit transition-all duration-300 mb-4"
          >
            Let&apos;s Talk <span className="text-emerald-500/60">→</span> 1 Spot Available
          </a>

          <div className="mt-auto pt-8 border-t border-white/5">
            <p className="text-xs text-white-500 uppercase tracking-widest mb-4">Previously worked with</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
              {clients.map((client, idx) => (
                <span key={client} className="flex items-center gap-2">
                  {client}
                  {idx < clients.length - 1 && <span className="text-zinc-700">•</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 mt-6">
            <p className="text-xs text-white-500 uppercase tracking-widest mb-3">Follow our work</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://x.com/sr_masudur" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">X</a>
              <a href="https://www.linkedin.com/in/mdmasudur92/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://dribbble.com/Joy_7480" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Dribbble</a>
            </div>
            <p className="text-[10px] text-zinc-600 mt-2">See recent work, client results & behind-the-scenes.</p>
          </div>
        </motion.aside>

        {/* Right Scrollable Content */}
        <section className="bg-[#0c0c0e] p-6 md:p-8 lg:p-10 xl:p-14 relative">
          <div 
            className="hidden md:block absolute left-0 top-0 bottom-0 w-8 z-10 border-l border-l-zinc-500/30 bg-[repeating-linear-gradient(315deg,#e5e5e5_0,#e5e5e5_1px,transparent_0,transparent_50%)] bg-size-[12px_12px] opacity-15"
            aria-hidden="true"
          />
          <div 
            className="hidden md:block absolute right-0 top-0 bottom-0 w-8 z-10 border-r border-r-zinc-500/30 bg-[repeating-linear-gradient(315deg,#e5e5e5_0,#e5e5e5_1px,transparent_0,transparent_50%)] bg-size-[12px_12px] opacity-10"
            aria-hidden="true"
          />

          <motion.div 
            className="relative z-20 px-2 md:px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} isFirst={index === 0} />
            ))}

            {/* Pricing Section */}
            <motion.div 
              className="pt-12 border-t border-white/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-col gap-6 max-w-4xl lg:grid lg:grid-cols-2 lg:gap-6">
                {/* Basic Tier - Dark Emerald */}
                <div className="rounded-3xl md:rounded-2xl border border-emerald-500/40 bg-emerald-950/80 p-8 flex flex-col text-white">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Basic</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      For founders who are looking for a design partner they can trust like a team.
                    </p>

                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-bold">$4,917</span>
                      <span className="text-zinc-400 text-sm">/ Per Month</span>
                    </div>

                    <div className="border-t border-dashed border-white/10 mb-6" />

                    <ul className="space-y-4 mb-8 flex-1">
                      {basicFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                          <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://cal.com/uigeek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-xl font-medium transition-colors mt-auto"
                  >
                    Start next week
                  </a>
                </div>

                {/* Launch Tier - White */}
                <div className="rounded-3xl md:rounded-2xl border border-white/10 bg-white p-8 flex flex-col text-black relative">
                  <div className="absolute -top-3 right-6 bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Launch</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                      For founders ready to ship with high-impact video assets and faster velocity.
                    </p>

                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-bold">$7,917</span>
                      <span className="text-zinc-500 text-sm">/ Per Month</span>
                    </div>

                    <div className="border-t border-dashed border-zinc-200 mb-6" />

                    <ul className="space-y-4 mb-8 flex-1">
                      {launchFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                          <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://cal.com/uigeek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium transition-colors mt-auto"
                  >
                    Start next week
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}