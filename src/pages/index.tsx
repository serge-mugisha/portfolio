import Head from 'next/head'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import ProjectSection from '@/components/ProjectSection'
import AboutCard from '@/components/UISections/AboutCard'
import TestimonialCard from '@/components/UISections/TestimonialCard'
import ContactSection from '@/components/UISections/ContactSection'
import { Badge } from '@/components/Badge'

export default function Home() {

  const handleScrollToSection = (id) => {
    console.log('scrolling to section')
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  const hero = (
    <div className="box flex flex-row items-center min-h-90 bg-center bg-fixed bg-contain bg-[url('./../../public/images/hero-bg.png')]">
      <div className="basis-2/5">
        <h1 className="h0">Hello,</h1>
        <h2 className="h4">I'm Serge Mugisha <br /> Software developer and UI designer</h2>
        <p className="pb-3 max-w-md">
          Software developer, and User Interface (UI) Designer
          focused on building effective web-app platforms.
        </p>
        {/* <Button classes="text-white bg-dark" onClick={() => document.getElementById('work').scrollIntoView()} text="Recent Work" /> */}
        <Button isButton onClick={() => handleScrollToSection('work')} classes="text-white bg-dark" text="Recent Work" />
      </div>
      <div className="self-center place-items-center basis-3/5 px-2">
        <Image src="/../public/images/hero.png" alt="hero image" width={840} height={505} />
      </div>
    </div>
  )

  return (
    <>
      <Head>
        <title>Serge Mugisha</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pb-10">
        <NavBar />
        <div className="py-8">
          {hero}
          <h2 id="work" className="box h2 mb-5">Recent work</h2>
          <ProjectSection
            bg="green"
            reverse={false}
            img="/../public/images/delving.png"
            title="Delving - Delving Co."
            subtitle="Modern spreadsheet management"
            description={["Full-stack web development (React & Python)", "Fast-paced environment focused on rapid experimentation and discovery"]}
            skills={["Next.js", "Fast API", "Neo4j", "Typescript", "Material UI", "Google cloud platform", "Sentry", "Figma"]}
            href="https://delving.com/"
          />
          <ProjectSection
            bg="yellow"
            reverse={true}
            img="/../public/images/ingoma.png"
            title="Ingoma - Imperium rw."
            subtitle="Local music streaming platform"
            description={["UI/UX Design", "Front-end development (React)", "Mobile app development (React Native)"]}
            skills={["React.js", "Express.js", "MongoDB", "Redux", "React-native", "Bootstrap", "figma", "Photoshop"]}
            caseStudy="ingoma"
            href="https://ingoma.app/"
          />
          <ProjectSection
            bg="red"
            reverse={false}
            img="/../public/images/cinetie.png"
            title="Cinetie - Cinetie."
            subtitle="An online movie streaming platform"
            description={["Front-end developer", "User interface designer"]}
            skills={["React.js", "Redux", "Bootstrap", "Figma"]}
            href="https://cinetie.com/"
          />
        </div>

        {/* <div className="box py-10">
          <ImageCard title="" />
        </div> */}

        <div className="2xl:px-60 xl:px-10 lg:px-4 md:px-2 py-5 flex flex-row place-content-center lg:flex-nowrap md:flex-wrap">
          <div className="pr-3 my-5 xl:basis-2/5">
            <h3 id="about" className="h3">About</h3>
            <AboutCard />
          </div>
          <div className="pl-3 my-5 xl:basis-2/5">
            <h3 className="h3">Kind words from great people</h3>
            <TestimonialCard />
          </div>
        </div>

        <div className="box py-5">
          <ContactSection />
        </div>
        <div className="box">
          <p>Built with: <Badge bg="bg-[#4B4B4B]" color="text-white" href="https://nextjs.org/" text="React-Next.js" />
            <Badge bg="bg-[#78D6FF]" color="text-dark" href="https://tailwindcss.com/" text="Tailwind.css" />
            <Badge bg="bg-[#FF6767]" color="text-dark" href="https://github.com/leandrowd/react-responsive-carousel" text="React-responsive-carousel" /> </p>
        </div>
      </main>
      <NavBar bg="bg-gray-100" />
    </>
  )
}
