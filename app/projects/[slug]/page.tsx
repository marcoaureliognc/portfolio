"use client";

import { notFound } from 'next/navigation';
import { use } from 'react';
import { projects } from '@/app/data/projects';
import Image from 'next/image';
import { FaGithub, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: Props) {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);
  
  if (!project) return notFound();

  // const firstImage = project.galleryImages?.[0];
  const firstImage = project.mainImage;

  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto px-6 py-12 space-y-10"
    >
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
      >
        {project.title}
      </motion.h1>

      {/* Imagen principal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl overflow-hidden shadow-xl"
      >
        <Image
          src={firstImage}
          alt={project.title}
          width={1000}
          height={500}
          className="w-full object-cover"
        />
      </motion.div>

      {/* Descripción */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-gray-700 dark:text-gray-300 space-y-4"
      >
        <h2 className="text-2xl font-semibold">PROJECT DESCRIPTION</h2>
        <p>{project.description}</p>
      </motion.section>

      {/* ¿Qué hace? */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-700 dark:text-gray-300 space-y-4"
      >
        <h2 className="text-2xl font-semibold">PURPOSE</h2>
        <p>{project.purpose}</p>
      </motion.section>

      {/* Funcionalidades */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">MAIN FEATURES</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300">
          {project.features?.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-1" /> {feat}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Galería */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">INTERFACE DESIGN (UI)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {project.galleryImages?.map((img, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md hover:scale-103 transition-transform duration-300"
            >
              <Image
                src={img}
                alt={`Captura ${i + 1}`}
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* GitHub */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-10"
      >
        <a
          href={project.github}
          target="_blank"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <FaGithub className="w-5 h-5" /> Ver repositorio en GitHub
        </a>
      </motion.div>
    </motion.main>
  );
}
