import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Button from '@/components/Button'
import ProjectSection from '@/components/ProjectSection'

export default function Home() {

  const hero = (
    <div className="box flex flex-row items-center h-full">
      <div className="bg-slate-200 basis-1/2">
        <h1 className="font-bold">Make The Design <br /> Work</h1>
        <p>
          UI/UX Designer and Front-end developer based in Ottawa, <br /> focused on building effective web-app platforms.
        </p>
        <div className="p-y-5">
          <Button className="btn btn-outline-dark" click={() => document.getElementById('work').scrollIntoView()}>Recent Work</Button>
        </div>
      </div>
      <div className="bg-slate-300 basis-1/2">
        <Image src="/../public/images/hero.png" alt="hero image" width={750} height={490} />
        {/* <img className="img-fluid" src={require('../assets/images/hero.png')} /> */}
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
      <main>
        <Header />
        <div className="py-8">
          {hero}
          <ProjectSection styles="bg-green-300" reverse={false} img="/../public/images/ingoma.png">
            <h2>Project description</h2>
          </ProjectSection>
          <ProjectSection styles="bg-red-300" reverse={true} img="/../public/images/cinetie.png">
            <h2>Project description</h2>
          </ProjectSection>
        </div>
      </main>
    </>
  )
}
