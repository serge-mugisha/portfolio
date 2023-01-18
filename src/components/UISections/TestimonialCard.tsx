import Image from 'next/image'
import MyCarousel from '@/components/MyCarousel'
import Link from 'next/link'

const testimonials = [
    {
        name: "Carl Coryell-Martin",
        image: "/../public/images/profile.jpg",
        description: "Serge has been a joy to pair with. He consistently brought a positive, can-do, approach to our programming sessions that helped us deliver working, readable, code. Working solo, he worked to understand the underling need behind stories on our backlog and was successful and independently delivering value.",
        role: "CTO at Delving Co.",
        url: "https://sergemugisha.com/",
        source: "LinkedIn review"
    },
    {
        name: "Carl Coryell-Martin",
        image: "/../public/images/profile.jpg",
        description: "Serge is a joy to work with - that rare combination of a strong individual talent and a great team player. He's fast and self-directed, which has been a huge benefit with our remote and distributed team. Even more important, he's intensely dedicated to continuous learning, and is great at sharing his latest insights with the rest of us.",
        role: "CTO at Delving Co.",
        url: "https://sergemugisha.com/",
        source: "LinkedIn review"
    },
]

const TestimonialCard = () => {
    return (
        <div className="p-6 rounded-lg shadow-xl max-w-md min-h-[340px]">
            <MyCarousel>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col pb-10">
                        <div className="flex">
                            <div className="basis-2/12">
                                <Image src={testimonial.image} className="rounded-full" alt="hero image" width={500} height={500} />
                            </div>
                            <div className="basis-10/12 pl-4">
                                <h2 className="font-bold">{testimonial.name}</h2>
                                <p className="text-sm pt-[2px]">{testimonial.role}</p>
                                <Link target="_blank" href="https://www.linkedin.com/in/serge-mugisha/details/recommendations/" className="text-sm text-gray-400 hover:text-blue-400">{testimonial.source}</Link>
                            </div>
                        </div>
                        <p className="pt-3">
                            "{testimonial.description}
                            <Link target="_blank" href="https://www.linkedin.com/in/serge-mugisha/details/recommendations/" className="pl-2 inline text-gray-400 hover:text-blue-400">more...</Link>"
                        </p>
                    </div>
                ))}
            </MyCarousel>
        </div>
    )
}
export default TestimonialCard;