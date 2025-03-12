import { NextImage as Image } from '@/components/NextImage'
import Link from 'next/link';

const AboutCard = () => {
    return (
      <div className="flex flex-col p-6 px-5 rounded-lg shadow-xl max-w-2xl min-h-[450px]">
        <div className="flex items-center">
          <div className="basis-3/12">
            <Image
              src="/static/profile.png"
              className="rounded-full"
              alt="hero image"
              width={200}
              height={200}
            />
          </div>
          <div className="basis-9/12 pl-4">
            <h2 className="font-bold">Serge Mugisha</h2>
            <p className="text-sm py-2 text-gray-500">
              Life is fun when you experiment with new ideas :)
            </p>
          </div>
        </div>
        <div className="">
          <p className="pt-4">
            I have a passion for designing and developing things with aim to
            ease and improve human-computer interaction while learning through
            the process.
          </p>
          <p className="py-3">
            Outside my professional work, I mostly enjoy my time making{" "}
            <Link
              href="https://www.beatstars.com/sergearts"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline highlight-text"
            >
              Music
            </Link>
            , going{" "}
            <Link
              href="https://unsplash.com/@sergearts"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline highlight-text"
            >
              Places
            </Link>
            , and having great moments with friends and family.
          </p>
        </div>
      </div>
    );
}
export default AboutCard;
