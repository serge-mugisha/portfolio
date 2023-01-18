import Image from 'next/image'

const AboutCard = () => {
    return (
        <div className="flex flex-col p-6 px-5 rounded-lg shadow-xl max-w-md min-h-[340px]">
            <div className="flex">
                <div className="basis-3/12">
                    <Image src="/../public/images/profile.jpg" className="rounded-full" alt="hero image" width={500} height={500} />
                </div>
                <div className="basis-9/12 pl-4">
                    <h2 className="font-bold">Serge Mugisha</h2>
                    <p className="text-sm py-2 text-gray-500">
                        Ottawa based Software developer and UI designer, focused on building effective web-app platforms.
                    </p>
                </div>
            </div>
            <p className="pt-4">I have a passion for designing and developing web-apps and seek to ease and improve human-computer interaction while learning through the process.</p>
            <p className="py-3">Out of office, you'll find me doing music production and playing keyboard, visiting new places, and enjoying time with my friends and family :)</p>
        </div>
    )
}
export default AboutCard;
