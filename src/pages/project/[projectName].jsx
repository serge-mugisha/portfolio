import NavBar from '@/components/NavBar';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { Badge } from '@/components/Badge';


const Project = () => {
    const router = useRouter();
    const { projectName } = router.query;
    return (
        <>
            <Head>
                <title>Serge Mugisha</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <NavBar bg="bg-[#F2E529]" />
                <div>
                    <div className="box bg-[#191919] text-white py-10 px-20 min-h-90 flex flex-row items-center">
                        <div className="basis-2/5">
                            <p className="text-bold text-sm">Case study</p>
                            <h1 className="h1 text-[#F2E529]">INGOMA <br /> MUSIC </h1>
                            <p className="font-bold">Imperium rw - 2020</p>
                            <p className="my-3">A Rwandan based music streaming platform made for local listeners and artists.</p>
                            <Button isLink href="https://ingoma.app/" classes="text-white bg-[#191919]" text="Visit website" />
                        </div>
                        <div className="basis-3/5 text-center">
                            <Image className="inline" src={'/static/ingoma.png'} alt={''} width={645} height={550} />
                        </div>
                    </div>

                    <div className="box bg-[#F0EFFF] text-center py-3">
                        <h2 className="h3">The Process</h2>
                        <div className="flex flex-row pt-2">
                            <div className="flex flex-col items-center px-2 py-3">
                                <div className="step-icon text-center">
                                    <Icon name="framing" height={71} width={70} color="#333333" />
                                </div>
                                <h5 className="mt-1 h5">Problem Framing</h5>
                                <p className="m-0 caption">Identifying the ploblem & describing the Design space</p>
                            </div>
                            <div className="flex flex-col items-center px-2 py-3">
                                <div className="step-icon">
                                    <Icon name="ideating" height={74} width={70} color="#333333" />
                                </div>
                                <h5 className="mt-1 h5">Ideating</h5>
                                <p className="m-0 caption">Brainstorming, gathering inspirations & generating Concepts</p>
                            </div>
                            <div className="flex flex-col items-center px-2 py-3">
                                <div className="step-icon">
                                    <Icon name="designing" height={70} width={70} color="#333333" />
                                </div>
                                <h5 className="mt-1 h5">Designing</h5>
                                <p className="m-0 caption">Finding and refining the solution, wireframing & Prototyping</p>
                            </div>
                            <div className="flex flex-col items-center px-2 py-3">
                                <div className="step-icon">
                                    <Icon name="testing" height={70} width={70} color="#333333" />
                                </div>
                                <h5 className="mt-1 h5">Testing & Outcomes</h5>
                                <p className="m-0 caption">Performing tests, redesigning the solution Iteratively.</p>
                            </div>
                        </div>
                    </div>

                    <div className="box flex flex-row py-10 items-center">
                        <div className="basis-7/12 px-5">
                            <h2 className="h3">The Challenge</h2>
                            <p className="py-3">
                                In most African countries like Rwanda, music platforms like spotify are not supported in the region for both listeners and artists.
                            </p>
                            <p className="py-3">
                                This makes it hard for artists to make money from their music, and listeners don't have a proper platform to listen and support local artists.
                            </p>
                            <p className="font-bold">
                                “Building a local music streaming platform would be an ideal solution for both  listeners and artists”
                            </p>
                        </div>
                        <div className="basis-5/12 right">
                            <Image src={'/static/challenge.png'} width={460} height={500} alt="The Challenge" />
                            <p className="text-sm py-3"><i>No music platform available in Rwanda and East African Community.</i></p>
                        </div>
                    </div>

                    {/* Inspirations */}
                    <div className="box flex flex-row py-10 items-center bg-[#191919] text-white">
                        <div className="basis-5/12">
                            <h2 className="h3">Inspirations</h2>
                            <Image className="inline py-3" src={'/static/inspirations.png'} width={560} height={710} alt="Inspirations" />
                        </div>
                        <div className="basis-6/12 pl-10">
                            <h2 className="h2">From Brainstorming to Ideation</h2>
                            <p>
                                We combined references and brainstorming to get the ideal solution as we were not re-inventing the wheel of music platform’s existing user-experience.
                            </p>
                            <p className="py-5">
                                We generated a lot of concepts, and perfomed research on existing Music platforms.
                            </p>
                        </div>
                    </div>

                    <div className="box flex flex-row py-10 items-center">
                        <div className="basis-6/12">
                            <h2 className="h3">Sketching <br /> out the Idea</h2>
                        </div>
                        <div className="basis-6/12">
                            <p className="text-right">
                                Based on what we collected, we started transforming the Ideal concepts into wireframes & building user-flows
                            </p>
                        </div>
                    </div>

                    {/* Parallax 1 */}
                    <div className="box-margin rounded-lg h-[500px] bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/static/wires.png')]" />

                    <div className="box flex flex-row py-10 items-center">
                        <div className="basis-6/12 px-3">
                            <h2 className="h3">Thinking about the User</h2>
                            <p className="py-2">
                                With a user-centered design in mind, we had to focus on the journey maps, draft out important features the user can have on his/her fingertips.
                            </p>
                            <Image className="inline py-2" width={560} height={700} src={'/static/ingoma-brand.png'} alt="Branding the Product" />
                        </div>
                        <div className="basis-6/12 px-3">
                            <Image className="inline py-2" width={560} height={700} src={'/static/ingoma-cover.png'} alt="Branding the Product" />
                            <h2 className="h3 py-2">Designing</h2>
                            <p className="">
                                With all ideas and information gathered, we started giving our concepts a life. Branding the app, building high-fidelity mockups and making testable prototypes.
                            </p>
                        </div>
                    </div>

                    <div className="box text-center">
                        <div className="bg-dark rounded shadow">
                            <Image className="inline" width={1020} height={620} src={'/static/ingoma-ds.png'} alt="Ingoma Design System" />
                        </div>
                    </div>

                    <div className="box flex flex-row items-center py-10">
                        <div className="basis-6/12">
                            <h2 className="h3">Designing the <br /> Mobile Application</h2>
                        </div>
                        <div className="basis-6/12">
                            <p className="text-right">
                                Based on the user-flow and Journey maps, we designed the mobile screens carefully with user in mind.
                            </p>
                        </div>
                    </div>

                    {/* Parallax2 */}
                    <div className="box">
                        <div className="multiple-parallax my-10 h-screen bg-[url('/static/i-mobile-screens.png'),_url('/static/i-mobile-screens-bg.png')]" />
                    </div>

                    <div className="box flex flex-row items-center py-10">
                        <div className="basis-7/12 text-center">
                            <Image className="inline rounded shadow" width={760} height={660} src={'/static/i-dashboards-sm.png'} alt="The Challenge" />
                        </div>
                        <div className="basis-5/12 pl-3 text-right">
                            <h2 className="h3">The Dashboards</h2>
                            <p className="py-3">
                                We didn’t forget about the Artist’s side. So, we provided desktop dashboards to manage music and transactions.
                            </p>
                            <p>
                                We  also designed the landing page to onboard our new users who accessed Ingoma through the web.
                            </p>
                        </div>
                    </div>

                    {/* Parallax2 */}
                    <div className="box">
                        <div className="multiple-parallax my-10 h-screen bg-[url('/static/i-dashboards.png'),_url('/static/i-dashboards-bg.png')]" />
                    </div>

                    {/* Results */}
                    <h2 className="h3 py-10 mb-5 text-center">The Results & What I Learned</h2>
                    <div className="box flex flex-row items-center">
                        <div className="basis-4/12 px-5 text-center">
                            <Image className="inline rounded shadow" width={465} height={705} src={'/static/ingoma-results.png'} alt="The Challenge" />
                        </div>
                        <div className="basis-8/12 px-5">
                            <div className="flex flex-row items-center bg-dark text-white mb-5 py-5 px-3 rounded">
                                <div className="basis-2/12 px-5 result-icon">
                                    <Icon name="iterating" height={70} width={70} color="#F0E326" />
                                </div>
                                <div className="basis-10/12 px-5 result-details">
                                    <h3 className="h3">Testing, Iterating, Testing...</h3>
                                    <p>Designing an effective product isn’t just done in one phase. We did a lot of iterations and testing as we go to make sure that we have the best product we can provide</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center bg-dark text-white my-5 py-5 px-3 rounded">
                                <div className="basis-2/12 px-5 result-icon">
                                    <Icon name="learnings" height={70} width={70} color="#F0E326" />
                                </div>
                                <div className="basis-10/12 px-5 result-details">
                                    <h3 className="h3">Project Learnings</h3>
                                    <p>I learned a lot in this project, and one fo the things that I learned is to be flexible, keep things minimal, and consider both the user-side and bussiness side through the design process, and that working as a team is the key!</p>
                                </div>
                            </div>

                            <Button classes="btn bg-dark text-white" text="Watch Video" isLink href="https://drive.google.com/file/d/1g0n_Jdi7SgYIMTnLr-UChuAdbCSAYTCq/view?usp=sharing" />
                        </div>
                    </div>

                    {/* Developing the platform */}
                    <div className="box flex flex-row py-10 items-center">
                        <div className="basis-5/12 px-5">
                            <h2 className="h3">Developing the Platform</h2>
                            <p>
                                After the design phase, we started the development of the mobile app and artist dashboards.
                            </p>
                            <div className="py-3">
                                <Badge text="MERN Stack" />
                                <Badge text="React.js" />
                                <Badge text="Redux" />
                                <Badge text="Express.js" />
                                <Badge text="React-native" />
                                <Badge text="Bootstrap" />
                            </div>
                        </div>
                        <div className="basis-7/12 text-center">
                            <Image className="inline rounded shadow" width={660} height={410} src={'/static/ingoma-dev.png'} alt="The Development Stack" />
                        </div>
                    </div>

                    <h2 className="h3 py-5 text-center">The Team behind</h2>
                    <div className="box flex flex-row items-center py-10 bg-dark text-white text-center">
                        <div className="basis-1/2 px-5">
                            <div className="flex flex-row items-center text-left py-2">
                                <div className="basis-3/12 text-center">
                                    <Image className="inline" width={100} height={100} src={'/static/serge.png'} alt="Team behind Ingoma app - Serge Mugisha" />
                                </div>
                                <div className="content basis-9/12 px-5">
                                    <h4 className="h4">Serge Mugisha</h4>
                                    <p className="m-0 caption">
                                        - UI/UX Designer <br />
                                        - Front-end Web & App Developer
                                    </p>
                                </div>

                            </div>
                            <div className="flex flex-row items-center text-left py-2">
                                <div className="basis-3/12 text-center">
                                    <Image className="inline" width={100} height={100} src={'/static/shyaka.png'} alt="Team behind Ingoma app - Jonathan Shyaka" />
                                </div>
                                <div className="content basis-9/12 px-5">
                                    <h4 className="h4">Jonathan Shyaka</h4>
                                    <p className="m-0 caption">
                                        - Project Manager <br />
                                        - Full-Stack Web & App developer
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center text-left py-2">
                                <div className="basis-3/12 text-center">
                                    <Image className="inline" width={100} height={100} src={'/static/chris.png'} alt="Team behind Ingoma app - Christian Mugisha" />
                                </div>
                                <div className="content basis-9/12 px-5">
                                    <h4 className="h4">Christian Mugisha</h4>
                                    <p className="m-0 caption">
                                        - Backend Engineer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 px-5">
                            <div className="flex flex-row items-center text-left py-2">
                                <div className="basis-3/12 text-center">
                                    <Image className="inline" width={100} height={100} src={'/static/jovite.png'} alt="Team behind Ingoma app - Jovite Ngoga" />
                                </div>
                                <div className="content basis-9/12 px-5">
                                    <h4 className="h4">Jovite Ngoga</h4>
                                    <p className="m-0 caption">
                                        - Front-end Web & App Developer
                                    </p>
                                </div>

                            </div>
                            <div className="flex flex-row items-center text-left py-2">
                                <div className="basis-3/12 text-center">
                                    <Image className="inline" width={100} height={100} src={'/static/kenny.png'} alt="Team behind Ingoma app - Kenny Ruzindana" />
                                </div>
                                <div className="content basis-9/12 px-5">
                                    <h4 className="h4">Kenny Ruzindana</h4>
                                    <p className="m-0 caption">
                                        - Backend Engineer
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center text-left py-2">
                                <div className="basis-3/12 text-center">
                                    <Image className="inline" width={100} height={100} src={'/static/imperium.png'} alt="Team behind Ingoma app - Imperium Rw" />
                                </div>
                                <div className="content basis-9/12 px-5">
                                    <h4 className="h4">Imperium Rw</h4>
                                    <p className="m-0 caption">- imperium.rw</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box text-center py-5">
                        <Link className="h5 underline" href="https://www.behance.net/gallery/120230945/UIUX-Case-Ingoma-Rwandan-based-Music-streaming-App" target="_blank" rel="noreferrer">Case Study by Serge Mugisha</Link>
                    </div>
                </div>
            </main>
            <NavBar bg="bg-gray-100" />
        </>
    )
}

export default Project
