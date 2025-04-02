"use client";

import Image from "next/image";
import pp from "../public/myself.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import {motion} from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <div className="mx-auto max-w-xl px-4 py-20">
          <motion.header 
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}}
          
          className="flex items-center justify-between mb-12">
            <div className="w-20 h-20 rounded-full overflow-hidden">
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                  Marco Aurelio Domínguez Amezcua</h1>
                <p className="text-gray-600 dark:text-gray-400">Computer Engineer</p>
                <p className="text-gray-600 dark:text-gray-400">Personal portfolio</p>
              </motion.div>

              <motion.div
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="space-y-3"
              >
                <h2 className="text-lg font-semibold">Web developer and databases manager.</h2>

                <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                  <span className="text-black dark:text-white">programming skills </span> with {" "}
                  <span className="text-black dark:text-white">development knowledge.</span> 
                </p>

                <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Results-oriented developer with experience in front- and back-end development, specializing 
                in React and Bootstrap. Handling relational and non-relational databases. Expert in creating 
                scalable applications, optimizing interfaces, improving user experience, and working in agile 
                environments. Passionate about creating efficient, customer-centric solutions and 
                collaborating on ideas to improve projects. 
                </p>
              </motion.div>

              <motion.div
              initial={{opacity: 0, x: 50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="flex items-center gap-3"
              >
                <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105 cursor-pointer">
                  Resume</Button>

                  <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                    <FaGithub className="w-6 h-6"/>
                  </Link>

                  <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                    <FaLinkedin className="w-6 h-6"/>
                  </Link>
                  
              </motion.div>
            </section>

            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-8">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Experience
              </h2>

              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">March 2023 to February 2025 (mid-time)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Systems administrator</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">STO CONTACT CENTER </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Responsible for configuring and adjusting dialers and communication channels to 
                  improve connectivity and avoid call saturations or dropped calls. Upload, update, and 
                  clean up databases, configuring schedules and priorities for lists of different 
                  campaigns. Provide support to agents for connectivity, hardware, and software issues. 
                  Perform diagnostics on softphones, headsets, computers, and dialing equipment. 
                  Generate call reports, dialing effectiveness, and handling times. Monitor the use of tools 
                  and software used by agents.
                </p>

              </div>

              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">August 2020 to February 2021</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Technical operator</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">SANMINA-SCI CORPORATION</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Control the flow of optical cards and direct them to different downstream areas. Handle 
                  network card components and optical fibers, splicing, and assembling them. Perform 
                  test runs to verify proper operation. Generate reports on the repair and test history of 
                  each card worked on. 
                </p>


              </div>
            </motion.section>

            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-8">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Education
              </h2>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">January 2021 - December 2025</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ingeniería en computación</p>
                    <p className="text-blue-600 dark:text-blue-400">Centro Universitario en Ciencias Exactas e Ingenierías (CUCEI)</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400"></p>

            </motion.section>

            {/* PROJECTS */}
            <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-8">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Projects
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={pp} alt="project 1" className="rounded-lg mb-4"/>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 1</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Nextjs, mySQL, Tailwind</p>
                      </div>

                      <Button variant="ghost" size="icon">→</Button>
                    </div>

                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={pp} alt="project 1" className="rounded-lg mb-4"/>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 1</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Nextjs, mySQL, Tailwind</p>
                      </div>

                      <Button variant="ghost" size="icon">→</Button>
                    </div>

                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={pp} alt="project 1" className="rounded-lg mb-4"/>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 1</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Nextjs, mySQL, Tailwind</p>
                      </div>

                      <Button variant="ghost" size="icon">→</Button>
                    </div>

                  </CardContent>
                </Card>
              </div>
              
              
              <p className="text-sm text-gray-600 dark:text-gray-400">Copyright © Marco Aurelio</p>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
}
