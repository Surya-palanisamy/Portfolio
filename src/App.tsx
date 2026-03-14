import { type FormEvent, type MouseEvent, useMemo, useState } from "react";
import bgImage from "../images/bg.jpg";
import foodOrderImage from "../images/food-order.jpg";
import formsImage from "../images/forms.jpg";
import messengerImage from "../images/messenger.jpg";
import netflixImage from "../images/Netflix clone.jpg";
import postmanLogo from "../images/postman.svg";
import streamShareImage from "../images/stream-share.jpg";
import wingsImage from "../images/Wings.jpg";

const CONTACT_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwIxSdl6TG-hnzwGlJ0WmsiM0Wh0tcojr2OEFMwYK6dkY1NB_lVBR3pR6Pwti-Ea-U/exec";

const navItems = [
  { id: "home-section", label: "Home" },
  { id: "about-section", label: "About" },
  { id: "resume-section", label: "Resume" },
  { id: "services-section", label: "Works" },
  { id: "skills-section", label: "Skills" },
  { id: "projects-section", label: "Projects" },
  { id: "contact-section", label: "Contact" },
];

const aboutInfo = [
  "Name: SURYA",
  "Date of birth: 11/2005",
  "Address: Chennai, Tamilnadu, India",
  "Zip code: 600127",
  "Email: sit23it161@sairamtap.edu.in",
  "Phone: +91 7418036039",
];

const resumeItems = [
  { date: "2013-2017", title: "3rd-7th Standard", place: "CMS" },
  { date: "2017-2022", title: "8th-11th Standard", place: "VVMHSS" },
  { date: "2022-2023", title: "12th Standard", place: "BKMHSS" },
  {
    date: "2023-2027",
    title: "Bachelor of Technology",
    place: "Sri Sai ram Institute Of Technology",
  },
];

const workItems = ["Web Design", "Web Developer", "App Developing"];

const projectItems = [
  {
    title: "Stream-share",
    type: "MERN Fullstack",
    image: streamShareImage,
    liveUrl: "https://stream-share-code.vercel.app",
    codeUrl: "https://github.com/Surya-palanisamy/stream-share",
  },
  {
    title: "Netflix clone",
    type: "Frontend",
    image: netflixImage,
    liveUrl: "https://netflix-react-2024.web.app/",
    codeUrl: "https://github.com/Surya-palanisamy/Netflix-clone",
  },
  {
    title: "Food order",
    type: "Frontend with tailwind-css",
    image: foodOrderImage,
    liveUrl: "https://surya-palanisamy.github.io/tailwind-foodOrder/",
    codeUrl: "https://github.com/Surya-palanisamy/tailwind-foodOrder",
  },
  {
    title: "Women Safety",
    type: "Frontend",
    image: wingsImage,
    liveUrl: "https://surya-palanisamy.github.io/WINGS/",
    codeUrl: "https://github.com/Surya-palanisamy/WINGS",
  },
  {
    title: "Messenger with socket-io",
    type: "Backend project",
    image: messengerImage,
    liveUrl: "https://messenger-app-socket-io.vercel.app/",
    codeUrl: "https://github.com/Surya-palanisamy/Chat-App-Socket.io",
  },
  {
    title: "React forms",
    type: "Backend project",
    image: formsImage,
    liveUrl: "https://form-backend-jnbe.vercel.app/",
    codeUrl: "https://github.com/Surya-palanisamy/form-backend",
  },
];

const techIcons = [
  "https://img.icons8.com/color/50/000000/python.png",
  "https://img.icons8.com/color/50/java-coffee-cup-logo--v1.png",
  "https://img.icons8.com/color/50/000000/c-programming.png",
  "https://img.icons8.com/color/50/c-plus-plus-logo.png",
  "https://img.icons8.com/color/50/000000/html-5.png",
  "https://img.icons8.com/color/50/css3.png",
  "https://img.icons8.com/color/50/javascript.png",
  "https://img.icons8.com/color/48/000000/react-native.png",
  "https://img.icons8.com/color/50/tailwind_css.png",
  "https://img.icons8.com/color/50/000000/nodejs.png",
  "https://img.icons8.com/nolan/50/express-js.png",
  postmanLogo,
  "https://img.icons8.com/color/50/mongo-db.png",
  "https://img.icons8.com/color/48/000000/google-firebase-console.png",
  "https://img.icons8.com/nolan/50/markdown.png",
  "https://img.icons8.com/color/96/docker.png",
  "https://img.icons8.com/color/50/000000/git.png",
];

const toolsIcons = [
  "https://img.icons8.com/color/50/000000/visual-studio-code-2019.png",
  "https://img.icons8.com/color/50/figma--v1.png",
  "https://img.icons8.com/fluency/48/canva.png",
];

const osIcons = [
  "https://img.icons8.com/fluency/50/windows-11.png",
  "https://img.icons8.com/color/50/linux--v1.png",
];

const contactCards = [
  {
    title: "Address",
    value: "Chennai, Tamilnadu, India, 600127",
    href: "",
  },
  { title: "Contact Number", value: "+91 7418036039", href: "tel:7418036039" },
  {
    title: "Email Address",
    value: "sit23it161@sairamtap.edu.in",
    href: "mailto:sit23it161@sairamtap.edu.in",
  },
  {
    title: "Github",
    value: "github.com/Surya-palanisamy",
    href: "https://github.com/Surya-palanisamy",
  },
];

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }

  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(CONTACT_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      window.alert("Thank you! Your message has been submitted successfully.");
      form.reset();
    } catch (error) {
      console.error("Contact form submit failed", error);
      window.alert(
        "Oops! There was an error submitting your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(250,204,21,0.22),transparent_34%),radial-gradient(circle_at_88%_20%,rgba(34,197,94,0.12),transparent_32%),linear-gradient(180deg,#0b0b0b,#040404)]" />

      <a
        href="#home-section"
        className="fixed left-4 top-4 z-50 rounded-full border border-amber-200/30 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 backdrop-blur sm:left-6 sm:top-5"
        onClick={(event) => handleNavClick(event, "home-section")}
      >
        Surya
      </a>

      <header className="fixed left-0 right-0 top-0 z-40 hidden border-b border-white/10 bg-black/30 backdrop-blur lg:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-end px-8 py-5">
          <ul className="flex items-center gap-5 text-sm text-neutral-200">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className="rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-amber-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <button
        type="button"
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/75 lg:hidden"
        aria-label="Toggle navigation"
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <span className="relative block h-5 w-6">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-all duration-200 ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-all duration-200 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-4 h-0.5 w-6 bg-white transition-all duration-200 ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`mobile-menu fixed inset-x-4 top-18 z-40 rounded-2xl border border-white/15 bg-black/92 p-4 shadow-2xl backdrop-blur lg:hidden ${
          mobileMenuOpen ? "menu-open" : "menu-closed"
        }`}
      >
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className="block rounded-xl border border-transparent px-4 py-2 text-sm font-medium text-neutral-100 transition hover:border-amber-300/35 hover:bg-white/5 hover:text-amber-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main
        className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-32"
        onClick={() => {
          if (mobileMenuOpen) {
            setMobileMenuOpen(false);
          }
        }}
      >
        <section id="home-section" className="section-shell relative overflow-hidden px-6 py-20 sm:px-10 sm:py-28">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-300/12 via-transparent to-amber-100/5" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.5em] text-amber-200 sm:text-sm">
              Hello
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              I&apos;m
              <span className="ml-3 text-amber-300">Surya</span>
            </h1>
            <p className="mt-4 text-xl text-neutral-200 sm:text-2xl">
              A freelance
              <span className="ml-2 font-semibold text-amber-300">
                web developer
              </span>
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:sit23it161@sairamtap.edu.in"
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-200"
              >
                Hire me
              </a>
              <a
                href="#projects-section"
                onClick={(event) => handleNavClick(event, "projects-section")}
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-200 hover:text-amber-200"
              >
                My works
              </a>
            </div>
          </div>
        </section>

        <section id="about-section" className="section-shell mt-8 px-6 py-12 sm:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-heading">About Me</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
              Web developer and B.Tech IT student at Sai ram Institute of
              Technology. As a technology enthusiast, I am always eager to
              expand my skill set and stay updated with the latest advancements
              in web development. The MERN stack is known for powerful
              capabilities in building dynamic and scalable applications.
            </p>
            <ul className="mt-8 grid gap-3 text-left text-sm text-neutral-200 sm:grid-cols-2">
              {aboutInfo.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/25 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-lg text-neutral-200">
              <span className="text-2xl font-semibold text-amber-300">25</span>
              <span className="ml-2">Project complete</span>
            </p>
          </div>
        </section>

        <section id="resume-section" className="section-shell mt-8 px-6 py-12 sm:px-10">
          <div className="text-center">
            <h2 className="section-heading">Resume</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-neutral-300 sm:text-base">
              Explore my journey and accomplishments in web development. With a
              strong foundation in the MERN stack and a commitment to continuous
              learning, I am ready to take on new challenges.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {resumeItems.map((item) => (
              <article
                key={`${item.date}-${item.title}`}
                className="rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  {item.date}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-300">{item.place}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-200"
            >
              Download Resume
            </a>
          </div>
        </section>

        <section id="services-section" className="section-shell mt-8 px-6 py-12 sm:px-10">
          <div className="text-center">
            <h2 className="section-heading">Works</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-neutral-300 sm:text-base">
              Crafting engaging and scalable web applications. Explore my
              journey with projects built using the MERN stack and beyond.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {workItems.map((item) => (
              <article
                key={item}
                className="glass-card flex min-h-32 items-center justify-center text-center"
              >
                <h3 className="text-lg font-semibold text-neutral-100">{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="skills-section" className="section-shell mt-8 px-6 py-12 sm:px-10">
          <div className="text-center">
            <h2 className="section-heading">My Skills</h2>
            <h3 className="mt-4 text-2xl font-semibold text-amber-200">
              Hi there, it&apos;s me Surya
            </h3>
            <p className="mt-3 text-sm text-neutral-300 sm:text-base">
              I am currently learning web development.
            </p>
            <p className="text-sm text-neutral-300 sm:text-base">
              I am looking to collaborate on web development projects.
            </p>
            <p className="mt-3 text-sm text-neutral-200">How to reach me:</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/surya-palanisamy-/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                  alt="LinkedIn"
                  className="social-badge"
                />
              </a>
              <a
                href="https://www.instagram.com/surya_palanisamy28?igsh=eG1nbTN6eHAwazR2"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.shields.io/badge/Instagram-0077B5?style=for-the-badge&logo=instagram&logoColor=pink"
                  alt="Instagram"
                  className="social-badge"
                />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5 lg:col-span-2">
              <h3 className="text-center text-xl font-semibold text-amber-200">
                Tech I Know
              </h3>
              <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
                {techIcons.map((icon) => (
                  <div
                    key={icon}
                    className="flex items-center justify-center rounded-xl border border-white/10 bg-black/35 p-2"
                  >
                    <img src={icon} alt="Technology" className="h-10 w-10" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <article className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <h3 className="text-center text-lg font-semibold text-amber-200">
                  IDE and Tools I Use
                </h3>
                <div className="mt-4 flex items-center justify-center gap-3">
                  {toolsIcons.map((icon) => (
                    <img key={icon} src={icon} alt="Tool" className="h-10 w-10" />
                  ))}
                </div>
              </article>
              <article className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <h3 className="text-center text-lg font-semibold text-amber-200">
                  OS I Use
                </h3>
                <div className="mt-4 flex items-center justify-center gap-3">
                  {osIcons.map((icon) => (
                    <img key={icon} src={icon} alt="Operating system" className="h-10 w-10" />
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects-section" className="section-shell mt-8 px-6 py-12 sm:px-10">
          <div className="text-center">
            <h2 className="section-heading">Our Projects</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-neutral-300 sm:text-base">
              Passionate about building impactful web experiences while
              exploring opportunities to grow and contribute in meaningful
              projects.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projectItems.map((project) => (
              <article key={project.title} className="project-card">
                <div
                  className="project-bg"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="project-overlay">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
                    >
                      Live Site
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white px-4 py-2 text-sm font-semibold text-white"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-meta">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-neutral-300">{project.type}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="section-shell flex flex-col items-center justify-center p-8 text-center">
            <p className="text-4xl font-semibold text-amber-300">25</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-neutral-300">
              Complete Projects
            </p>
          </article>

          <article
            className="section-shell relative overflow-hidden p-8 text-center lg:col-span-2"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.76), rgba(0,0,0,0.68)), url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              I&apos;m <span className="text-amber-300">Available</span> for freelancing
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-neutral-200 sm:text-base">
              Open for freelancing. Let&apos;s bring your ideas to life with dynamic
              and responsive web solutions.
            </p>
          </article>
        </section>

        <section id="contact-section" className="section-shell mt-8 px-6 py-12 sm:px-10">
          <div className="text-center">
            <h2 className="section-heading">Contact Me</h2>
            <p className="mt-4 text-sm text-neutral-300 sm:text-base">
              Let&apos;s connect and create something amazing together.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                  {card.title}
                </h3>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-3 block text-sm text-neutral-200 transition hover:text-amber-200"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-3 text-sm text-neutral-200">{card.value}</p>
                )}
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <h3 className="text-center text-xl font-semibold text-white">Contact</h3>
            <form
              className="relative mt-5 rounded-2xl border border-white/10 bg-black/45 p-5 sm:p-8"
              autoComplete="off"
              onSubmit={handleFormSubmit}
            >
              <div className="grid gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="rounded-xl border border-white/15 bg-neutral-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="rounded-xl border border-white/15 bg-neutral-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="rounded-xl border border-white/15 bg-neutral-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
                />
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Message"
                  required
                  className="rounded-xl border border-white/15 bg-neutral-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
                />
                <div className="pt-1 text-center">
                  <button
                    type="submit"
                    disabled={sending}
                    className="rounded-full bg-amber-300 px-7 py-3 text-sm font-semibold text-black transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>

              {sending ? (
                <div className="loading-overlay">
                  <div className="flex flex-col items-center justify-center">
                    <div className="loading-spinner" />
                    <p className="mt-3 text-sm text-neutral-200">
                      Sending your message...
                    </p>
                  </div>
                </div>
              ) : null}
            </form>
          </div>
        </section>

        <footer className="section-shell mt-8 px-6 py-12 sm:px-10">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <h2 className="text-xl font-semibold text-white">About</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-300">
                Web developer and B.Tech IT student at Sai ram Institute of
                Technology. I enjoy building modern and useful digital
                experiences.
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm text-neutral-200">
                <a href="#" className="hover:text-amber-200">
                  Twitter
                </a>
                <a href="#" className="hover:text-amber-200">
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/surya_palanisamy28"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-200"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">Links</h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {navItems.map((item) => (
                  <li key={`footer-${item.id}`}>
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => handleNavClick(event, item.id)}
                      className="transition hover:text-amber-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">Works</h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {[
                  "Web Design",
                  "Web Development",
                  "Devops",
                  "App Design",
                  "App Development",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">Have a Questions?</h2>
              <ul className="mt-3 space-y-3 text-sm text-neutral-300">
                <li>Chennai, Tamilnadu, IN</li>
                <li>
                  <a href="tel:7418036039" className="transition hover:text-amber-200">
                    +91 7418036039
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sit23it161@sairamtap.edu.in"
                    className="transition hover:text-amber-200"
                  >
                    sit23it161@sairamtap.edu.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-neutral-400">
            Copyright {currentYear} All rights reserved
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
