"use client";

import Image from 'next/image';

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
    quote: '"Huge kudos to both of you. Incredible work in helping Alfi get off the ground since day 1."',
    quoteAuthor: "Jacob Hailton, BTCH",
    quoteBorderColor: "border-red-500/30",
    images: [
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-gratitude.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-question.jpg.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-onboarding.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-day.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Caspy-mental-health-app-journal.jpg",
    ],
    imageAlts: [
      "Caspy gratitude journal screen",
      "Caspy anxiety question screen",
      "Caspy onboarding flow",
      "Caspy daily mood check-in",
      "Caspy journal entry screen",
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
    quote: '"Huge kudos to both of you. Incredible work in helping Alfi get off the ground since day 1."',
    quoteAuthor: "Jacob Hailton, Uigeek.ai",
    quoteBorderColor: "border-red-500/30",
    images: [
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Testing-landing-page03.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/M8.digital-landing-page.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Testing-landing-page02.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Testing-landing-page05.jpg",
      "https://xxug9xacnrkk5ey7.public.blob.vercel-storage.com/Testing-landing-page04.jpg",
    ],
    imageAlts: ["Cura main app interface", "Cura patient dashboard", "Cura vital signs monitoring"],
  },
  {
    id: "cura-vitals",
    category: "Cura Patient Monitoring App",
    categoryColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
    title: "Cura Vitals & Body Metrics",
    description:
      "Advanced health tracking interface for body temperature, blood pressure, and vital signs monitoring. Designed for clinical and home use with dark-mode optimized readability.",
    quote: '"Huge kudos to both of you. Incredible work in helping Alfi get off the ground since day 1."',
    quoteAuthor: "Jacob Hailton, Uigeek.ai",
    quoteBorderColor: "border-cyan-500/30",
    images: [
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782828523/66_u4i65t.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782828529/01_ckyfhd.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782828473/Body_temperature_soxnrl.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782828476/Body_temperature-1_s6ijfn.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782828511/Blood_Pressure_Home_Dark_cmmqsn.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782828506/Blood_Pressure_Dark_irmfpc.png",
    ],
    imageAlts: [
      "Cura vitals overview",
      "Cura metrics dashboard",
      "Body temperature monitoring",
      "Temperature dark mode",
      "Blood pressure home screen",
      "Blood pressure dark mode",
    ],
  },
  {
    id: "diamond-icq",
    category: "Jewelry Product Design",
    categoryColor: "text-amber-400",
    dotColor: "bg-amber-400",
    title: "Diamond ICQ Product Platform",
    description:
      "A luxury diamond e-commerce experience featuring detailed product pages, responsive design, and an elegant navigation system for high-value inventory.",
    images: [
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829571/Navigation_Bar_pvckgq.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829570/01_kd0grv.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829570/Diamonds_product_page_for_Diamond_ICQ_work_gblqmv.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829570/Diamond_ICQ_Responsive_Design_pbobn0.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829569/Diamond_ICQ_Diamond_Product_Page_fx1h4r.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829570/2_rfuwju.png",
    ],
    imageAlts: [
      "Diamond ICQ navigation bar",
      "Luxury jewelry homepage",
      "Product detail page",
      "Responsive design view",
      "Diamond product showcase",
      "Jewelry collection grid",
    ],
  },
  {
    id: "saas-smb",
    category: "SaaS Software for SMBs",
    categoryColor: "text-blue-400",
    dotColor: "bg-blue-400",
    title: "Customer Management Platform",
    description:
      "A comprehensive SaaS solution for SMBs to manage customer imports, file uploads, group organization, and search functionality with a clean, data-dense interface.",
    images: [
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782830253/Table_qv2zar.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782830227/Customer_Import_Dashboard_Design_ums9rb.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782830235/Customer_Import_done_wr3cna.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782830191/Cusotmer_Import_i6mnmd.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782830200/Customer_dashboard_empty_state_iocajk.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782830261/Search_typing_iprupw.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782830172/Adding_Group_pd84jx.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782830208/Customer_Files_upload_x0dy3h.png",
    ],
    imageAlts: [
      "Customer table view",
      "Import dashboard",
      "Import completed screen",
      "Customer import flow",
      "Empty state dashboard",
      "Search functionality",
      "Adding group feature",
      "File upload interface",
    ],
  },
  {
    id: "leafcare",
    category: "Leafcare Mental Health Product",
    categoryColor: "text-violet-400",
    dotColor: "bg-violet-400",
    title: "Leafcare Wellness Platform",
    description:
      "A holistic mental health and wellness platform featuring mindfulness exercises, sleep tracking, mood monitoring, and social media integration for community support.",
    images: [
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782837555/Tui_Travel_Landing_Page_Design_yydcm7.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782837434/Instagram_post_-_3_nhzexz.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782837503/Leafcare_odtvit.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782837465/Instagram_post_-_4_yijr89.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782837565/Sleep_Search_diao0a.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782837466/Instagram_post_-_7_exfsoy.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782837756/MindFulness_Screen_qvxz4a.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782837595/Mindfulness_Page_Design_fw95od.png",
    ],
    imageAlts: [
      "Leafcare landing page",
      "Instagram post example 3",
      "Leafcare main dashboard",
      "Instagram post example 4",
      "Sleep tracking screen",
      "Instagram post example 7",
      "Mindfulness exercise screen",
      "Mindfulness page design",
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

function ProjectCard({ project, isFirst }: { project: Project; isFirst: boolean }) {
  return (
    <article className="project-card group pb-8">
      <div className="space-y-4 mb-6">
        {project.images.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full overflow-hidden rounded-[8px] md:rounded-[16px] lg:rounded-[24px] border border-white/5 aspect-video"
          >
            <Image
              src={src}
              alt={project.imageAlts[idx] || `${project.title} screenshot ${idx + 1}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
              priority={isFirst && idx === 0}
              loading={isFirst && idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className={`flex items-center gap-2 ${project.categoryColor} text-sm font-medium mb-3`}>
        <span className={`w-1.5 h-1.5 rounded-full ${project.dotColor}`} />
        {project.category}
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-3 font-heading">{project.title}</h3>
      <p className="text-zinc-400 leading-relaxed mb-4 max-w-xl">{project.description}</p>

      {project.quote && project.quoteAuthor && (
        <blockquote className={`border-l-2 ${project.quoteBorderColor} pl-4 text-zinc-300 italic`}>
          {project.quote}
          <footer className="text-sm text-zinc-500 mt-1 not-italic">— {project.quoteAuthor}</footer>
        </blockquote>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0e]">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-[2fr_3fr]">
        {/* STICKY LEFT SIDE - NON-SCROLLABLE */}
        <aside className="md:sticky md:top-0 md:h-screen bg-[#0c0c0e] border-r border-white/5 p-6 md:p-8 lg:p-10 xl:p-14 flex flex-col">
          <a href="/" className="flex items-center gap-3 mb-12 group">
            <div className="w-10 h-10 bg-white text-black rounded-3xl md:rounded-2xl sm:rounded-xl flex items-center justify-center text-xl font-bold tracking-tight transition-all group-hover:scale-105">
              U
            </div>
            <span className="font-semibold text-lg hidden sm:block">Uigeek</span>
          </a>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight mb-8 font-heading">
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
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Previously worked with</p>
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
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Follow our work</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://x.com/sr_masudur" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">X</a>
              <a href="https://www.linkedin.com/in/mdmasudur92/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://dribbble.com/Joy_7480" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Dribbble</a>
            </div>
            <p className="text-[10px] text-zinc-600 mt-2">See recent work, client results & behind-the-scenes.</p>
          </div>
        </aside>

        {/* RIGHT SIDE - SCROLLABLE with patterns */}
        <section className="bg-[#0c0c0e] p-6 md:p-8 lg:p-10 xl:p-14 relative">
          {/* Wider & deeper patterns */}
          <div 
            className="hidden md:block absolute left-0 top-0 bottom-0 w-8 z-10 border-l border-l-zinc-500/30 bg-[repeating-linear-gradient(315deg,#e5e5e5_0,#e5e5e5_1px,transparent_0,transparent_50%)] bg-size-[12px_12px] opacity-15"
            aria-hidden="true"
          />

          <div 
            className="hidden md:block absolute right-0 top-0 bottom-0 w-8 z-10 border-r border-r-zinc-500/30 bg-[repeating-linear-gradient(315deg,#e5e5e5_0,#e5e5e5_1px,transparent_0,transparent_50%)] bg-size-[12px_12px] opacity-10"
            aria-hidden="true"
          />

          <div className="relative z-20 px-2 md:px-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} isFirst={index === 0} />
            ))}

            {/* PRICING SECTION */}
            <div className="pt-12 border-t border-white/5">
              <div className="flex flex-col gap-6 max-w-4xl lg:grid lg:grid-cols-2 lg:gap-6">
                {/* Basic Tier */}
                <div className="rounded-3xl md:rounded-2xl border border-white/10 p-8 flex flex-col">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      For founders who are looking for a design partner they can trust like a team.
                    </p>

                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-bold text-white">$4,917</span>
                      <span className="text-zinc-500 text-sm">/ Per Month</span>
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

                {/* Launch Tier */}
                <div className="rounded-3xl md:rounded-2xl border border-emerald-500/40 p-8 flex flex-col relative">
                  <div className="absolute -top-3 right-6 bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Launch</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      For founders ready to ship with high-impact video assets and faster velocity.
                    </p>

                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-bold text-white">$7,917</span>
                      <span className="text-zinc-500 text-sm">/ Per Month</span>
                    </div>

                    <div className="border-t border-dashed border-white/10 mb-6" />

                    <ul className="space-y-4 mb-8 flex-1">
                      {launchFeatures.map((feature, idx) => (
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
                    className="block w-full text-center bg-emerald-600/40 hover:bg-emerald-600/60 text-white border border-zinc-500/20 hover:border-emerald-500/40 px-8 py-4 rounded-2xl font-medium transition-all duration-300 mt-auto shadow-inner hover:shadow-inner"
                  >
                    Start next week
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}