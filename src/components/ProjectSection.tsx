import React, { useEffect, useState } from "react";
import { NextImage as Image } from "@/components/NextImage";
import { Badge } from "./Badge";
import Button from "./Button";

interface ProjectSectionProps {
  id: string;
  reverse?: boolean;
  bg?: string;
  title: string;
  subtitle?: string;
  description: string[];
  projects?: { [key: string]: string }[];
  caseStudy?: string;
  action?: { text: string; href: string };
}

export default function ProjectSection({
  id,
  reverse,
  bg,
  title,
  subtitle,
  description,
  projects,
  action,
  caseStudy,
}: ProjectSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
      if (!isHovering && projects?.length) {
        const timer = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % projects.length);
        }, 3000);

        return () => clearInterval(timer);
      }
    }, [isHovering, projects]);

  let textColor = null;
  let bgColor = null;
  switch (bg) {
    case "green":
      textColor = "text-green";
      bgColor = "bg-green";
      break;
    case "red":
      textColor = "text-red";
      bgColor = "bg-red";
      break;
    case "yellow":
      textColor = "text-yellow";
      bgColor = "bg-yellow";
      break;
    case "purple":
      textColor = "text-purple";
      bgColor = "bg-purple";
      break;
    case "brown":
      textColor = "text-brown";
      bgColor = "bg-brown";
      break;
    default:
      textColor = "text-dark";
      bgColor = "bg-dark";
  }
  return (
    <>
      <section
        id={id}
        className={`box py-5 flex ${
          reverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
        } items-center h-screen ${bgColor}`}
      >
        <div
          className={`basis-1/2 ${
            reverse ? "text-center lg:text-right" : "text-center lg:text-left"
          }`}
        >
          <h2 className="h2">{title}</h2>
          {subtitle && <h4 className="h4">{subtitle}</h4>}
          <div
            className={`py-8 mb-16 lg:mb-0 px-3 lg:px-0 flex flex-col ${
              reverse
                ? "items-center lg:items-end p-0 lg:pl-10"
                : "p-0 lg:pr-10"
            }`}
          >
            <ul>
              {description?.map((item, index) => (
                <li key={index} className="py-3">
                  {reverse ? "" : ""}
                  {item}
                  {reverse ? "" : ""}
                </li>
              ))}
            </ul>
            <div
              className={`py-3 flex-row max-w-lg ${
                reverse ? "float-none lg:float-right" : ""
              }`}
            >
              {projects?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="cursor-pointer"
                    onMouseEnter={() => {
                      setIsHovering(true);
                      setCurrentImageIndex(index);
                    }}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Badge text={item.name} img={item.logo} />
                  </span>
                );
              })}
            </div>
            {caseStudy && (
              <div>
                <Button
                  href={`/project/${caseStudy}`}
                  classes={`${textColor} bg-dark mr-3`}
                  text="Case Study"
                />
                <Button
                  isLink
                  // href={action!!.href}
                  classes={`text-dark ${bgColor} ml-3`}
                  text="Visit site"
                />
              </div>
            )}
            {action && (
              <Button
                isLink
                href={action!!.href}
                classes={`${textColor} bg-dark`}
                text={action!!.text}
              />
            )}
          </div>
        </div>
        <div className="basis-1/2 relative flex items-center justify-center min-h-[300px] lg:h-full">
          {projects?.map((item, index) => (
            <div
              key={index}
              className={`
                ${index === 0 ? 'block' : 'hidden'} // Show first image by default on mobile
                lg:flex lg:absolute lg:w-full lg:items-center lg:justify-center lg:transition-all lg:duration-500 
                ${currentImageIndex === index
                  ? 'lg:opacity-100 lg:translate-y-0'
                  : 'lg:opacity-0 lg:-translate-y-full'
              }`}
              style={{
                top: '50%',
                transform: `translateY(-50%)`
              }}
            >
              <Image
                src={item.img}
                alt="Project image"
                width={750}
                height={490}
                className="w-full h-auto object-contain max-h-[60vh] lg:max-h-none"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
