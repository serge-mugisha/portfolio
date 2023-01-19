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

  const hero = (
    <div className="box flex flex-row items-center min-h-90">
      <div className="basis-2/5">
        <h1 className="h0">Hello,</h1>
        <h2 className="h4">I'm Serge Mugisha <br /> Software developer and UI designer</h2>
        <p className="pb-3">
          Software developer, and User Interface (UI) Designer
          focused on building effective web-app platforms.
        </p>
        <Button classes="text-white bg-dark" onClick={() => document.getElementById('work').scrollIntoView()} text="Recent Work" />
      </div>
      <div className="self-center place-items-center basis-3/5 px-2">
        <Image src="/../public/images/hero.png" alt="hero image" width={750} height={490} />
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
          <ProjectSection
            bg="green"
            reverse={false}
            img="/../public/images/delving.png"
            title="Delving - Delving Co."
            subtitle="Modern spreadsheet management"
            description={["Full-stack web development (React & Python)", "Fast-paced environment focused on rapid experimentation and discovery"]}
            skills={["Next.js", "Fast API", "Neo4j", "Typescript", "Google cloud platform", "Sentry", "Material UI"]}
            href="https://delving.com/"
          />
          <ProjectSection
            bg="yellow"
            reverse={true}
            img="/../public/images/ingoma.png"
            title="Ingoma - Imperium rw."
            subtitle="Local music streaming platform"
            description={["UI/UX Design", "Front-end development (React)", "Mobile app development (React Native)"]}
            skills={["React.js", "Express.js", "MongoDB", "Redux", "React-native", "Bootstrap"]}
            caseStudy="ingoma"
            href="https://ingoma.app/"
          />
          <ProjectSection
            bg="red"
            reverse={false}
            img="/../public/images/cinetie.png"
            title="Delving - Delving Co."
            subtitle="Modern spreadsheet management"
            description={["Full-stack web development (React & Python)", "Fast-paced environment focused on rapid experimentation and discovery"]}
            skills={["Next.js", "Fast API", "Neo4j", "Typescript", "Google cloud platform", "Sentry", "Material UI"]}
            href="https://cinetie.com/"
          />
        </div>
        <div className="box py-5 flex flex-row">
          <div className="mx-3">
            <h3 className="h3">About</h3>
            <AboutCard />
          </div>
          <div className="mx-3">
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
            <Badge bg="bg-[#FF6767]" color="text-dark" href="https://www.npmjs.com/package/react-responsive-carousel" text="React-responsive-carousel" /> </p>
        </div>
      </main>
      <NavBar bg="bg-gray-100" />
    </>
  )
}
