import Head from "next/head";
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import ProjectSection from "@/components/ProjectSection";
import AboutCard from "@/components/UISections/AboutCard";
import TestimonialCard from "@/components/UISections/TestimonialCard";
import ContactSection from "@/components/UISections/ContactSection";
import { Badge } from "@/components/Badge";
import { NextLink as Link } from "@/components/NextLink";
import { NextImage as Image } from "@/components/NextImage";
import Icon from "@/components/Icon";
import { useEffect } from "react";
// import { Card } from "@/components/Card";
// import { Project } from "@/components/types";

export default function Home() {
  const handleScrollToSection = (id: string) => {
    console.log("scrolling to section");
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const hero = (
    <div className="box flex flex-col lg:flex-row items-center min-h-90 bg-center bg-fixed bg-contain bg-[url('/static/hero-bg.png')]">
      <div className="px-2 lg:px-0 text-center lg:text-left lg:basis-3/5">
        <h1 className="h1">
          Hello! <span className="emoji-cursor">Serge</span> here
          <span className="px-3 mt-5 lg:mt-0 text-6xl animate-wave">👋</span>
        </h1>
        <p className="py-5 max-w-xl mx-auto lg:mx-0 font-semibold text-2xl">
          I make{" "}
          <span
            className="highlight-text cursor-pointer"
            onClick={() => handleScrollToSection("software")}
          >
            Software
          </span>
          ,{" "}
          <span
            className="underline-animate cursor-pointer"
            onClick={() => handleScrollToSection("design")}
          >
            Design experiences
          </span>
          , invest in{" "}
          <span
            className="real-estate"
            onClick={() => handleScrollToSection("real-estate")}
          >
            Real Estate
          </span>{" "}
          and{" "}
          <span
            className="startup"
            onClick={() => handleScrollToSection("startups")}
          >
            build Startups<span className="rocket">🚀</span>
          </span>
        </p>
        <div className="flex justify-center lg:justify-start gap-6">
          <Button
            isButton
            onClick={() => handleScrollToSection("work")}
            classes="text-white bg-dark"
            text="Show me how"
          />
          <Button
            isButton
            classes="text-dark bg-white"
            text="Work with me"
            onClick={() => handleScrollToSection("contact")}
          />
        </div>
      </div>
      <div className="self-center place-items-center lg:basis-2/5 px-2 max-w-sm relative mx-10 mt-10 lg:mx-10 lg:mt-0">
        <div className="relative emoji-cursor group transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]">
          <div className="absolute top-4 left-5 w-full h-full border-[#649A96] border-8 rounded-[25px] transition-all duration-300 group-hover:top-5 group-hover:left-6"></div>
          <Image
            className="hero-img relative rounded-[25px] shadow-[8px_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-[8px_8px_30px_rgba(0,0,0,0.45)]"
            src="/static/hero.png"
            alt="hero image"
            width={840}
            height={505}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Serge Mugisha</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <div className="block md:hidden bg-yellow h-screen max-h-screen px-6">
        <Link
          href="/"
          className="block pt-5 text-center text-2xl font-medium font-logo"
        >
          Serge Mugisha
        </Link>
        <div className="flex flex-col justify-center min-h-80 items-center content-center my-10">
          <div className="text-center">
            <h1 className="h0">Hello,</h1>
            <h2 className="h4">
              I'm Serge Mugisha <br /> Software developer and UI designer
            </h2>
            <div className="mb-5">
              <p className="max-w-md">
                Software developer, and User Interface (UI) Designer focused on
                building effective web-app platforms.
              </p>
              <i className="text-sm">View full web version on desktop :)</i>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Button
              isLink
              href="mailto:bsergemugisha@gmail.com"
              classes="text-yellow bg-dark"
              text="E-mail: bsergemugisha@gmail.com"
            />
            <Button
              isLink
              href="https://drive.google.com/file/d/1N-tJ5MMt5N9b3erNF6iA57A9OAXTtwJ8/view?usp=share_link"
              classes="text-dark bg-yellow"
              text="Resume"
            />
          </div>
          <div className="py-10 flex basis-1/3 place-content-end">
            <Link
              className="px-7 font-medium"
              href="https://github.com/serge-mugisha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" height={34} width={34} color="#4F4F4F" />
            </Link>
            <Link
              className="px-7 font-medium"
              href="https://www.linkedin.com/in/serge-mugisha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" height={34} width={34} color="#4F4F4F" />
            </Link>
            <Link
              className="px-7 font-medium"
              href="https://www.behance.net/serge-mugisha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="behance" height={34} width={34} color="#4F4F4F" />
            </Link>
            <Link
              className="px-7 font-medium"
              href="https://www.instagram.com/sergeartz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="instagram" height={34} width={34} color="#4F4F4F" />
            </Link>
          </div>
        </div>
      </div> */}
      <div className="">
        <main className="pb-10">
          <NavBar />
          <div className="pt-3 lg:pt-8">
            {hero}
            <h2 id="work" className="box h2 mb-5 text-center lg:text-left">
              Recent work
            </h2>
            <ProjectSection
              id="software"
              bg="green"
              reverse={false}
              title="Software Development"
              description={[
                "I've been creating high-quality web applications as a full-stack developer for over 5 years.",
                "Throughout the period, I've worked with individuals, startups, and established companies.",
              ]}
              projects={[
                {
                  name: "iVerify",
                  logo: "/static/iverify-logo.png",
                  img: "/static/iverify.png",
                },
                {
                  name: "Cinetie",
                  logo: "/static/cinetie-logo.png",
                  img: "/static/cinetie.png",
                },
                {
                  name: "Delving",
                  logo: "/static/delving-logo.png",
                  img: "/static/delving.png",
                },
              ]}
              action={{
                text: "More of Dev",
                href: "https://github.com/serge-mugisha",
              }}
            />
            <ProjectSection
              id="design"
              bg="yellow"
              reverse={true}
              title="Design (UI/UX & Graphic)"
              description={[
                "With design being one of my earliest interest, I've created user interfaces, brands, posters & logos since then!",
                "Throughout the period, I've worked with individuals, startups, and established companies.",
              ]}
              projects={[
                {
                  name: "Born2Serve",
                  logo: "/static/b2s-logo.png",
                  img: "/static/b2s.png",
                },
                {
                  name: "Ingoma",
                  logo: "/static/ingoma-logo.png",
                  img: "/static/ingoma.png",
                },
                {
                  name: "Groovin",
                  logo: "/static/groovin-logo.png",
                  img: "/static/groovin.png",
                },
              ]}
              action={{
                text: "More of Design",
                href: "https://www.behance.net/serge-mugisha",
              }}
            />
            <ProjectSection
              id="real-estate"
              bg="brown"
              reverse={false}
              title="Real Estate Development"
              description={[
                "Managing 3+ properties has given me hands-on experience with property maintenance, due diligence, and forecasting the costs, responsibilities, and rewards of real estate investment.",
                "Through that experience, I've built a growing real estate network of brokers, realtors, and builders in the Greater Ottawa Region.",
              ]}
              projects={[
                {
                  name: "AirBnb",
                  logo: "/static/airbnb-logo.png",
                  img: "/static/airbnb.png",
                },
                {
                  name: "Renovations",
                  logo: "/static/construction-logo.png",
                  img: "/static/renovation.png",
                },
              ]}
            />
          </div>
          <div id="startups" className="box bg-center bg-cover bg-[url('/static/startup-bg.png')]">
            <h2 className="h3 mb-10 pt-12 text-center">
              Startups! Let's build some{" "}
              <span className="rocket-swing">🚀</span>
            </h2>
            <div className="flex-col pb-10 px-3 lg:px-0">
              <div className="flex flex-col lg:flex-row items-center">
                <h3 className="basis-1/2 h5 text-center lg:text-left">
                  Jarvix <br /> Your private AI assistant
                </h3>
                <div className="basis-1/2 text-center lg:text-right">
                <p>
                  Jarvix is an smart speaker with 100% privacy and full control.
                  Primarily powered by a local LLM, it outsmarts popular
                  speakers while maintaining 100% privacy. Plus, you can plug in
                  </p>
                  <Button
                    isLink
                    href="https://heyjarvix.com"
                    classes="text-white bg-dark"
                    text="Check it out"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/static/jarvix.png"
                  alt="Project image"
                  width={750}
                  height={490}
                  className="w-full lg:w-[90vw] h-auto object-contain mt-3"
                />
              </div>
            </div>
            <div className="flex-col pb-10 px-3 lg:px-0">
              <div className="flex flex-col lg:flex-row">
                <h3 className="basis-1/2 h5 text-center lg:text-right order-first lg:order-last">
                  The Gigabite <br /> Ottawa's finest home-made Pastry
                </h3>
                <div className="basis-1/2 order-last lg:order-first text-center lg:text-left">
                <p>
                  The Gigabite is our small cute home-made pastry that offers
                  East African's signature Mandazi, Chapati & Samosas in the
                  Ottawa-Gatineau region.
                </p>
                <Button
                  isLink
                  href="https://www.thegigabite.ca"
                  classes="text-white bg-dark"
                  text="Check it out"
                />
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/static/gigabite.png"
                  alt="Project image"
                  width={750}
                  height={490}
                  className="w-full lg:w-[90vw] h-auto object-contain mt-3"
                />
              </div>
            </div>
          </div>
          {/* <div className="box">
            <h2 className="h3 mb-3 text-center">Projects</h2>
            <div className="flex flex-row items-center justify-center">
              <Card
                img="/static/groovin-thumb.png"
                title="Groovin"
                description="A fashion design crowdsourcing platform"
                link="/project/groovin"
                tags={["UI/UX", "Graphic design", "Case study"]}
              />
            </div>
          </div> */}
          {/* 2xl:px-60 xl:px-10 lg:px-4 md:px-2 */}
          <div className="mt-10 py-5 flex flex-col lg:flex-row place-content-center lg:flex-nowrap md:flex-wrap">
            <div className="px-3 lg:pr-3 lg:pl-0 my-5 xl:basis-2/5">
              <h3 id="about" className="h3">
                About
              </h3>
              <AboutCard />
            </div>
            <div className="px-3 lg:pl-3 lg:pr-0 my-5 xl:basis-2/5">
              <h3 className="h3">Kind words from great people</h3>
              <TestimonialCard />
            </div>
          </div>
          <div id="contact" className="box py-5 px-3 text-center lg:text-left">
            <ContactSection />
          </div>
          <div className="box px-3 text-center lg:text-left">
            <p>
              Built by 🙃 with:{" "}
              <Badge
                bg="bg-[#4B4B4B]"
                color="text-white"
                href="https://nextjs.org/"
                text="React-Next.js"
              />
              <Badge
                bg="bg-[#78D6FF]"
                color="text-dark"
                href="https://tailwindcss.com/"
                text="Tailwind.css"
              />
              <Badge
                bg="bg-[#FF6767]"
                color="text-dark"
                href="https://github.com/leandrowd/react-responsive-carousel"
                text="React-responsive-carousel"
              />{" "}
            </p>
          </div>
        </main>
      </div>
      <div className="">
        <NavBar bg="bg-gray-100" footer />
      </div>
    </>
  );
}
