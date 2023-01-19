import React from 'react'

export const ImageCard = ({ img, title, description, link, tags }) => {
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                    <Image className="rounded-t-lg" src="/../public/images/ktc1.png" alt="hero image" width={750} height={490} />
                </a>
                <div className="p-5">
                    <h5 className="text-gray-900 h5 font-medium">Card title</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <div>
                        <Badge text={"HTML5"} />
                        <Badge text={"CSS3"} />
                        <Badge text={"Bootstrap"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
