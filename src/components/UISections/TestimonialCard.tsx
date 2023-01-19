import Image from 'next/image'
import MyCarousel from '@/components/MyCarousel'
import Link from 'next/link'

const testimonials = [
    {
        name: "Carl Coryell-Martin",
        image: "/../public/images/Carl Coryell-Martin.png",
        description: "Serge has been a joy to pair with. He consistently brought a positive, can-do, approach to our programming sessions that helped us deliver working, readable, code. Working solo, he worked to understand the underling need behind stories on our backlog and was successful and independently delivering value",
        role: "CTO at Delving Co.",
        url: "https://sergemugisha.com/",
        source: "LinkedIn review"
    },
    {
        name: "Brandon Shelley",
        image: "/../public/images/Brandon Shelley.png",
        description: "Serge is an excellent problem-solver, capable of quickly recognizing and addressing obstacles, finding creative ways to work through difficult challenges, and leading others to thoughtful solutions. And to top it off, Serge is great at jumping into Figma or Miro and prototyping design concepts to explore ideas before writing code",
        role: "Product designer & developer.",
        url: "https://sergemugisha.com/",
        source: "LinkedIn review"
    },
    {
        name: "Joshua McKenty",
        image: "/../public/images/Joshua McKenty.png",
        description: "Serge is a joy to work with - that rare combination of a strong individual talent and a great team player. He's fast and self-directed, which has been a huge benefit with our remote and distributed team. Even more important, he's intensely dedicated to continuous learning, and is great at sharing his latest insights with the rest of us",
        role: "CEO at Delving Co.",
        url: "https://sergemugisha.com/",
        source: "LinkedIn review"
    },
    {
        name: "Dina Buric",
        image: "/../public/images/Dina Buric.png",
        description: "I feel incredibly lucky to get to work with Serge! Not only is knowledgeable but he is happy to share and explain all the things! Pairing with Serge is such a joy, he actively listens to others' ideas and makes them happen, ensuring that we're all working together at each step. I highly recommend working with Serge!",
        role: "Full Stack Software Developer | Connecting math, art, and technology",
        url: "https://sergemugisha.com/",
        source: "LinkedIn review"
    },
]

const TestimonialCard = () => {
    return (
        <div className="p-6 rounded-lg shadow-xl lg:max-w-md">
            <MyCarousel>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col pb-6">
                        <div className="flex items-center">
                            <div className="basis-2/12">
                                <Image src={testimonial.image} className="rounded-full" alt="hero image" width={100} height={100} />
                            </div>
                            <div className="basis-10/12 pl-4">
                                <h2 className="font-bold">{testimonial.name}</h2>
                                <p className="text-sm pt-[2px] max-w-md">{testimonial.role}</p>
                                <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/serge-mugisha/details/recommendations/" className="text-sm text-gray-400 hover:text-blue-400">{testimonial.source}</Link>
                            </div>
                        </div>
                        <p className="pt-3 before:content-['“'] before:text-2xl after:content-['”'] after:text-2xl">
                            {testimonial.description}
                            <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/serge-mugisha/details/recommendations/" className="pl-2 inline text-gray-400 hover:text-blue-400">...more</Link>
                        </p>
                    </div>
                ))}
            </MyCarousel>
        </div>
    )
}
export default TestimonialCard;