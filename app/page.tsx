"use client";

interface Project {
  id: string;
  category: string;
  categoryColor: string;
  dotColor: string;
  title: string;
  description: string;
  quote: string;
  quoteAuthor: string;
  quoteBorderColor: string;
  images: string[];
  imageAlts: string[];
}

const projects: Project[] = [
  {
    id: "ai-companion",
    category: "App Development Tools — WIP",
    categoryColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
    title: "AI Companion For iOS App Development",
    description:
      "An intelligent coding assistant designed for iOS developers, featuring natural language prompts, real-time code generation, and seamless Xcode integration.",
    quote:
      '"Huge kudos to both of you. Incredible work in helping Alfi get off the ground since day 1."',
    quoteAuthor: "Jacob Hailton, Uigeek.ai",
    quoteBorderColor: "border-emerald-500/30",
    images: [
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782802987/Prompt01_fcihbv.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782839321/Bitrig_dashboard_design_ttogwe.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782803005/Agent_Call_ze2a4y.png",
    ],
    imageAlts: ["AI Companion", "Dashboard", "Agent Call"],
  },
  {
    id: "cura-mental",
    category: "Mental Health App",
    categoryColor: "text-red-400",
    dotColor: "bg-red-400",
    title: "Cura Patient Monitoring App",
    description:
      "A comprehensive mental health platform connecting patients with caregivers, tracking vital signs, and providing real-time health insights.",
    quote:
      '"Huge kudos to both of you. Incredible work in helping Alfi get off the ground since day 1."',
    quoteAuthor: "Jacob Hailton, Uigeek.ai",
    quoteBorderColor: "border-red-500/30",
    images: [
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782807230/04_muyzr4.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782807276/02_eyboy9.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782807243/03_hbuvnb.png",
    ],
    imageAlts: ["Cura App", "Screen 2", "Screen 3"],
  },
  {
    id: "cura-vitals",
    category: "Cura Patient Monitoring App",
    categoryColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
    title: "Cura Vitals & Body Metrics",
    description:
      "Advanced health tracking interface for body temperature, blood pressure, and vital signs monitoring. Designed for clinical and home use with dark-mode optimized readability.",
    quote:
      '"Huge kudos to both of you. Incredible work in helping Alfi get off the ground since day 1."',
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
    imageAlts: ["Vitals", "Metrics", "Temperature", "Temperature Dark", "Blood Pressure Home", "Blood Pressure Dark"],
  },
  {
    id: "diamond-icq",
    category: "Jewelry Product Design",
    categoryColor: "text-amber-400",
    dotColor: "bg-amber-400",
    title: "Diamond ICQ Product Platform",
    description:
      "A luxury diamond e-commerce experience featuring detailed product pages, responsive design, and an elegant navigation system for high-value inventory.",
    quote:
      '"Huge kudos to both of you. Incredible work in helping Alfi get off the ground since day 1."',
    quoteAuthor: "Jacob Hailton, Uigeek.ai",
    quoteBorderColor: "border-amber-500/30",
    images: [
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829571/Navigation_Bar_pvckgq.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829570/01_kd0grv.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829570/Diamonds_product_page_for_Diamond_ICQ_work_gblqmv.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829570/Diamond_ICQ_Responsive_Design_pbobn0.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829569/Diamond_ICQ_Diamond_Product_Page_fx1h4r.png",
      "https://res.cloudinary.com/drbqpdphk/image/upload/v1782829570/2_rfuwju.png",
    ],
    imageAlts: ["Navigation", "Jewelry 1", "Product Page", "Responsive", "Diamond Page", "Jewelry 2"],
  },
  {
    id: "saas-smb",
    category: "SaaS Software for SMBs",
    categoryColor: "text-blue-400",
    dotColor: "bg-blue-400",
    title: "Customer Management Platform",
    description:
      "A comprehensive SaaS solution for SMBs to manage customer imports, file uploads, group organization, and search functionality with a clean, data-dense interface.",
    quote:
      '"Huge kudos to both of you. Incredible work in helping Alfi get off the ground since day 1."',
    quoteAuthor: "Jacob Hailton, Uigeek.ai",
    quoteBorderColor: "border-blue-500/30",
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
    imageAlts: ["Table", "Import Dashboard", "Import Done", "Customer Import", "Empty State", "Search", "Adding Group", "File Upload"],
  },
  {
    id: "leafcare",
    category: "Leafcare Mental Health Product",
    categoryColor: "text-violet-400",
    dotColor: "bg-violet-400",
    title: "Leafcare Wellness Platform",
    description:
      "A holistic mental health and wellness platform featuring mindfulness exercises, sleep tracking, mood monitoring, and social media integration for community support.",
    quote:
      '"Huge kudos to both of you. Incredible work in helping Alfi get off the ground since day 1."',
    quoteAuthor: "Jacob Hailton, Uigeek.ai",
    quoteBorderColor: "border-violet-500/30",
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
    imageAlts: ["Landing Page", "Instagram 3", "Leafcare", "Instagram 4", "Sleep Search", "Instagram 7", "Mindfulness Screen", "Mindfulness Page"],
  },
];

const clients = [
  "ShopHero", "Bizwise", "Tandem", "Diamond ICQ", "Bytedance",
  "Monetta", "Restofriends", "Meal Plan", "Upworks",
];

const pricingFeatures = [
  "2-3 updates per week",
  "Senior Designers (Previously at Meta, Netflix, Hubspot, Expas & Founding designer at 25+ startups)",
  "Private Slack Channel",
  "No contracts, Cancel Anytime",
  "No Meetings",
  "Product Design (Web & Mobile)",
  "Marketing Websites",
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card group">
      {/* Single images stacked vertically — no grid, no hover arrow */}
      <div className="space-y-4 mb-6">
        {project.images.map((src, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl border border-white/5 image-border"
          >
            <img
              src={src}
              alt={project.imageAlts[idx]}
              className="w-full project-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Category Badge */}
      <div className={`flex items-center gap-2 ${project.categoryColor} text-sm font-medium mb-3`}>
        <span className={`w-1.5 h-1.5 rounded-full ${project.dotColor}`} />
        {project.category}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl md:text-2xl font-semibold mb-3 font-heading">{project.title}</h3>
      <p className="text-zinc-400 leading-relaxed mb-4 max-w-xl">{project.description}</p>

      {/* Quote */}
      <blockquote className={`border-l-2 ${project.quoteBorderColor} pl-4 text-zinc-300 italic`}>
        {project.quote}
        <footer className="text-sm text-zinc-500 mt-1 not-italic">— {project.quoteAuthor}</footer>
      </blockquote>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0e]">
      {/* MAIN SPLIT LAYOUT */}
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-[2fr_3fr]">
        {/* STICKY LEFT SIDE */}
        <aside className="md:sticky md:top-0 md:h-screen md:overflow-y-auto sticky-sidebar bg-[#0c0c0e] border-r border-white/5 p-6 md:p-8 lg:p-10 xl:p-14 flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-white text-black rounded-2xl flex items-center justify-center text-xl font-bold tracking-tight">
              U
            </div>
            <span className="font-semibold text-lg hidden sm:block">Uigeek</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.05] tracking-tight mb-8 font-heading">
            Product design agency from the Internet. We design & build AI-first products for startups & enterprises.
          </h1>

          {/* Description */}
          <p className="text-zinc-400 mb-10 text-base md:text-lg leading-relaxed">
            We are currently working with founders in AI Legal, AI Governance, Private Jet Fund, Weight Loss (GLP), AI Health, AI Aviation Intelligence, Longevity, AI Texting, AI for Distributors and Manufacturers, AI Dev.
          </p>

          {/* CTA Button */}
          <a
            href="https://cal.com/uigeek"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-emerald-900/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40 px-8 py-4 rounded-2xl font-medium w-fit transition-all duration-300 mb-4"
          >
            Let&apos;s Talk <span className="text-emerald-500/60">→</span> 2 Spots Available
          </a>

          {/* Clients */}
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
        </aside>

        {/* RIGHT SIDE - SCROLLABLE */}
        <section className="bg-[#0c0c0e] p-6 md:p-8 lg:p-10 xl:p-14 space-y-28 pb-28">
          {/* Projects */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* PRICING SECTION */}
          <div className="pt-12 border-t border-white/5">
            <div className="max-w-md">
              {/* Header */}
              <h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                For founders who are looking for a design partner they can trust like a team.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-white">$6,917</span>
                <span className="text-zinc-500 text-sm">/ Per Month</span>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-white/10 mb-6" />

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pricingFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <svg
                      className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://cal.com/uigeek"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-xl font-medium transition-colors"
              >
                Start next week
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
