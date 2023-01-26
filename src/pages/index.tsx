import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import ProjectSection from '@/components/ProjectSection'
import AboutCard from '@/components/UISections/AboutCard'
import TestimonialCard from '@/components/UISections/TestimonialCard'
import ContactSection from '@/components/UISections/ContactSection'
import { Badge } from '@/components/Badge'
import { NextLink as Link } from '@/components/NextLink'
import { NextImage as Image } from '@/components/NextImage'
import Icon from '@/components/Icon'
import { useEffect } from 'react'
import ReactGA from 'react-ga';



export default function Home() {

  useEffect(() => {
    ReactGA.pageview('/home');
  }, [])

  const handleScrollToSection = (id: string) => {
    console.log('scrolling to section')
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  const hero = (
    <div className="box flex flex-row items-center min-h-90 bg-center bg-fixed bg-contain bg-[url('/static/hero-bg.png')]">
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
        <Image src="/static/hero.png" alt="hero image" width={840} height={505} />
      </div>
    </div>
  )

  return (
    <>
      <Head>
        <title>Serge Mugisha</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="block md:hidden bg-yellow h-screen max-h-screen px-6">
        <Link href="/" className="block pt-5 text-center text-2xl font-medium font-logo">Serge Mugisha</Link>
        <div className="flex flex-col justify-center min-h-80 items-center content-center my-10">
          <div className="text-center">
            <h1 className="h0">Hello,</h1>
            <h2 className="h4">I'm Serge Mugisha <br /> Software developer and UI designer</h2>
            <div className="mb-5">
              <p className="max-w-md">
                Software developer, and User Interface (UI) Designer
                focused on building effective web-app platforms.
              </p>
              <i className="text-sm">View full web version on desktop :)</i>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Button isLink href="mailto:bsergemugisha@gmail.com" classes="text-yellow bg-dark" text="E-mail: bsergemugisha@gmail.com" />
            <Button isLink href="https://drive.google.com/file/d/1N-tJ5MMt5N9b3erNF6iA57A9OAXTtwJ8/view?usp=share_link" classes="text-dark bg-yellow" text="Resume" />
          </div>
          <div className="py-10 flex basis-1/3 place-content-end">
            <Link className="px-7 font-medium" href="https://github.com/serge-mugisha" target="_blank" rel="noopener noreferrer">
              <Icon name="github" height={34} width={34} color="#4F4F4F" />
            </Link>
            <Link className="px-7 font-medium" href="https://www.linkedin.com/in/serge-mugisha" target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" height={34} width={34} color="#4F4F4F" />
            </Link>
            <Link className="px-7 font-medium" href="https://www.behance.net/serge-mugisha" target="_blank" rel="noopener noreferrer">
              <Icon name="behance" height={34} width={34} color="#4F4F4F" />
            </Link>
            <Link className="px-7 font-medium" href="https://www.instagram.com/sergeartz/" target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" height={34} width={34} color="#4F4F4F" />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <main className="pb-10">
          <NavBar />
          <div className="py-8">
            {hero}
            <h2 id="work" className="box h2 mb-5">Recent work</h2>
            <ProjectSection
              bg="green"
              reverse={false}
              img="/static/delving.png"
              title="Delving - Delving Co."
              subtitle="Modern spreadsheet management"
              description={["Full-stack web development (React & Python)", "Fast-paced environment focused on rapid experimentation and discovery"]}
              skills={["Next.js", "Fast API", "Neo4j", "Typescript", "Material UI", "Google cloud platform", "Sentry", "Figma"]}
              href="https://delving.com/"
            />
            <ProjectSection
              bg="yellow"
              reverse={true}
              img="/static/ingoma.png"
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
              img="/static/cinetie.png"
              title="Cinetie - Cinetie."
              subtitle="An online movie streaming platform"
              description={["Front-end developer", "User interface designer"]}
              skills={["React.js", "Redux", "Bootstrap", "Figma"]}
              href="https://cinetie.com/"
            />
          </div>

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
      </div>
      <div className="hidden md:block">
        <NavBar bg="bg-gray-100" />
      </div>
    </>
  )
}
