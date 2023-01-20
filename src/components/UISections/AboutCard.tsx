import Image from 'next/image'

const AboutCard = () => {
    return (
        <div className="flex flex-col p-6 px-5 rounded-lg shadow-xl max-w-2xl min-h-[350px]">
            <div className="flex items-center">
                <div className="basis-3/12">
                    <Image src="/static/profile.png" className="rounded-full" alt="hero image" width={200} height={200} />
                </div>
                <div className="basis-9/12 pl-4">
                    <h2 className="font-bold">Serge Mugisha</h2>
                    <p className="text-sm py-2 text-gray-500">
                        Ottawa based Software developer and User interface designer.
                    </p>
                </div>
            </div>
            <div className="">
                <p className="pt-4">I have a passion for designing and developing web-apps with aim to ease and improve human-computer interaction while learning through the process.</p>
                <p className="py-3">Out of office, you'll find making music, visiting new places, and enjoying time with my friends and family :)</p>
            </div>
        </div>
    )
}
export default AboutCard;
