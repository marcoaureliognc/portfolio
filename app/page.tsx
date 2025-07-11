"use client";

import Image from "next/image";
import pp from "../public/img-porfolio.jpg";
// import pr_sd from "../public/pr-sd-home.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import {motion} from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <div className="mx-auto max-w-xl px-4 py-20">
          <motion.header 
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          
          className="flex items-center justify-between mb-5">
            <div className="w-25 h-25 rounded-full overflow-hidden">
              <Image src={pp} alt="profile image" className="cursor-pointer duration-300 transition-all hover:scale-110"></Image>
            </div>
            <ThemeToggle></ThemeToggle>
          </motion.header>

          <main className="space-y-10">
            <section className="space-y-10">
              <motion.div
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="space-y-1"
              >
                {/* from-blue-700 via-sky-600 to-cyan-300 */}
                <h1 className="text-2xl font-bold bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent inline-block">
                  Marco Aurelio Domínguez Amezcua</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">Computer Engineer.</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Guadalajara, Jalisco, México.</p>
                {/* <p className="text-gray-600 dark:text-gray-300">Personal portfolio</p> */}
              </motion.div>

              <motion.div
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="space-y-3 max-w-xl"
              >
                {/* <h2 className="text-lg font-semibold">FULL STACK DEVELOPER DATABASES MANAGER.</h2> */}
                <p className="font-semibold text-xl text-black dark:text-white mb-3">Welcome to my portfolio!</p>
                <p className="text-gray-600 text-md dark:text-gray-300 max-w-2xl mb-3">
                  Backend and frontend developer, specializing in <span className="font-bold">JavaScript and Python</span>. Dedicated to creating 
                  scalable applications, working with agile environments and focusing on optimizing UI/UX. I 
                  love contributing ideas and solutions for better professional and career development.
                </p>
                <p className="text-gray-600 text-md dark:text-gray-300 max-w-2xl mb-3">
                  My main focus is developing scalable applications or services with optimized interfaces, ensuring that users have a great experience when working with the final product.
                  I'm constantly improving my skills to enhance my work and personal experience.
                </p>
              </motion.div>

              <motion.div
              initial={{opacity: 0, x: 50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="flex items-center gap-3"
              >
                <a href="/CV_AurelioAmezcua_ComputerEngineer.pdf" download target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white transition-transform hover:scale-105 cursor-pointer">
                    Download CV
                  </Button>
                </a>
                <a 
                  href="https://github.com/marcoaureliognc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-115 cursor-pointer"
                >
                  <FaGithub className="w-7 h-7" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/marco-aurelio-da/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-115 cursor-pointer"
                >
                <FaLinkedin className="w-7 h-7" />
</a>

                  
              </motion.div>
            </section>

            


            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-6">

              <div className="border-t border-gray-600 my-8"></div>
              
              <h2 className="text-2xl font-semibold bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent inline-block">
                Experience
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300">March, 2023 - Present (mid-time)</p>
                    <p className="text-lg font-bold text-gray-600 dark:text-gray-300">Systems administrator</p>
                    <p className="text-sm text-blue-400">STO CONTACT CENTER</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-md text-justify">
                  Modify web applications in interface and add new functionalities.Load, update, and clean databases, configuring schedules and priorities for lists of different campaigns. 
                  Monitor agent use of tools and software. Provide product training to increase transactions and manage the operations area.
                  Adjust dialers and communication channels to improve connectivity and avoid call saturation or dropouts.
                  Generate call reports, evaluate dialing effectiveness and handling times.
                  Provide support to agents in case of connectivity, hardware, and software issues.
                </p>

              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300">August, 2020 - February 2021</p>
                    <p className="text-lg font-bold text-gray-600 dark:text-gray-300">Technical operator</p>
                    <p className="text-sm text-blue-400">SANMINA-SCI CORPORATION.</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-md text-justify ">
                  Control the flow of optical cards and direct them to different downstream areas. Handle 
                  network card components and optical fibers, splicing, and assembling them. Perform 
                  test runs to verify proper operation. Generate reports on the repair and test history of 
                  each card worked on. 
                </p>
              </div>
            </motion.section>


            {/* PROJECTS */}
            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-6">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent inline-block">
                Projects
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {/* <Link href={`/projects/myAgave`}>
                  <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-4">
                      <Image src="/agave-mainpage.jpg" alt="Parking lot visitor control" className="rounded-lg mb-4" width={500} height={300} />
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <h3 className="font-medium">Salud Digital CUCS</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Bootstrap · Javascript · JSON.</p>
                        </div>
                        <Button variant="ghost" size="icon">→</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link> */}

                <Link href={`/projects/myAgave`}>
                  <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-4">
                      <Image src="/agave-mainpage.jpg" alt="myAgave" className="rounded-lg mb-4" width={500} height={300} />
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <h3 className="font-medium">MyAgave</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Bootstrap · Javascript · JSON.</p>
                        </div>
                        <Button variant="ghost" size="icon">→</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href={`/projects/saludDigital`}>
                  <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-4">
                      <Image src="/pr-sd-home.jpg" alt="Salud Digital" className="rounded-lg mb-4" width={500} height={300} />
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <h3 className="font-medium">Salud Digital CUCS</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Bootstrap · Javascript · JSON.</p>
                        </div>
                        <Button variant="ghost" size="icon">→</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
              
              {/* <p className="text-sm text-gray-600 dark:text-gray-300">Copyright © Marco Aurelio</p> */}
            </motion.section>

            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-4">
              <div className="border-t border-gray-600 my-8"></div>
              <h2 className="text-2xl font-semibold bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent inline-block">
                Education
              </h2>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300">January, 2021 - December, 2025</p>
                    <p className="text-lg font-bold text-gray-600 dark:text-gray-300">Computer Engineering</p>
                    <p className="text-sm text-blue-400">Centro Universitario en Ciencias Exactas e Ingenierías (CUCEI)</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300"></p>
              <div className="border-t border-gray-600 my-8"></div>

            </motion.section>

          </main>
        </div>
      </div>
    </div>
  );
}
