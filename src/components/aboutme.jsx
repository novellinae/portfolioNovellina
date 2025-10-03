
import { ImProfile } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import Image from "next/image";

export default function AboutMe() {
  return (
   <section id="aboutme" className="py-20">
        <div className="flex justify-center">
            <h2 className="text-3xl font-bold mb-4 text-center border-b-4 border-third w-fit font-quantico">About Me</h2>
        </div>  
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left Column */}

            <div className="md:col-span-2 space-y-10">       
    
                {/* Bio Section */}
                <div className="border-2 border-btn p-4 shadow-md rounded-lg mt-6">
                    <div className="flex items-center mb-4 space-x-2 text-third">
                        <ImProfile className=""/>
                        <h3 className="text-2xl text-third font-semibold font-quantico">Bio</h3>
                    </div>
                    <p className="text-sm leading-relaxed font-mono mb-3">
                        Hi! I'm Novellina Edyawati,
                        a 3rd year Computer Science undergraduate at Binus University. I am
                        a passionate Data Scientist and Software Engineer with a knack for transforming
                        complex data into actionable insights. With a strong foundation in statistics, machine learning
                        , and programming, I thrive on solving challenging problems and building impactful solutions. My
                        expertise spans various domains, including data analysis, predictive modeling, and software development.
                        
                    </p>
                    <p className="text-sm leading-relaxed font-mono mb-3">
                        I enjoy collaborating with cross-functional teams to drive innovation and deliver value through data-driven decision-making.
                        I have participated in several
                        national and international competitions, where I gained valuable
                        experience in teamwork, problem-solving, and critical thinking
                        while developing solutions collaboratively. 
                        I am excited to connect with like-minded professionals and explore
                        opportunities to contribute my skills and expertise to impactful projects.
                    </p>
                </div>

                {/* Education Section */}
                <div className="border-2 border-btn p-4 shadow-md rounded-lg ">
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        <div className="flex items-center mb-4 space-x-2 text-third">
                            <FaGraduationCap />
                            <h3 className="text-2xl text-third font-semibold font-quantico">Education</h3>
                        </div>
                        <p className="text-sm leading-relaxed font-mono mb-3">
                            Bachelor of Computer Science, Binus University (2023 - Present)
                        </p>
                    </div>
                </div>


            </div>
            {/* You might have a right column here, for example: */}
            <div className="">
                {/* Experience & Achievement */}
                <Image src="/profile.png" alt="Profile" width={400} height={400} className="rounded-full object-cover mt-10"/>
                {/* Skills Section */}
                <div className="mt-10">
                    <div className="flex items-center mb-4 space-x-2 text-third">
                        <FaTools />
                        <h3 className="text-2xl text-third font-semibold font-quantico">Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Image src={"/c++.svg"} alt="c++" width={40} height={40} className=""/>
                        <Image src={"/python.svg"} alt="Python" width={40} height={40} className=""/>
                        <Image src={"/java.svg"} alt="Java" width={40} height={40} className=""/>
                        <Image src={"/react.svg"} alt="React" width={40} height={40} className=""/>
                        <Image src={"/typescript.svg"} alt="Typescript" width={40} height={40} className=""/>
                        <Image src={"/html5.svg"} alt="HTML" width={40} height={40} className=""/> 
                        <Image src={"/html5.svg"} alt="HTML" width={40} height={40} className=""/> 
                        <Image src={"/css3.svg"} alt="CSS" width={40} height={40} className=""/> 
                        <Image src={"/github.svg"} alt="github" width={40} height={40} className=""/> 
                        <Image src={"/flutter.svg"} alt="flutter" width={40} height={40} className=""/> 
                        <Image src={"/figma.svg"} alt="figma" width={40} height={40} className=""/> 
                        <Image src={"/Tensorflow.svg"} alt="tf" width={40} height={40} className=""/> 
                        <Image src={"/pytorch.svg"} alt="pytorch" width={40} height={40} className=""/> 
                        <Image src={"/R.png"} alt="R" width={40} height={40} className=""/> 
                        <Image src={"/wordpress.svg"} alt="wordpress" width={40} height={40} className=""/>
                        <Image src={"/android.svg"} alt="android" width={40} height={40} className=""/>

                    </div>
                </div>
            </div>
        </div>
      </section>
    ); 
}