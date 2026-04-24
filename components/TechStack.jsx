'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const techStacks = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-cyan-400 to-blue-500' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'from-slate-700 to-slate-900' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'from-green-500 to-emerald-600' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-yellow-400 to-blue-500' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'from-blue-500 to-blue-700' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'from-yellow-300 to-yellow-500' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: 'from-orange-400 to-orange-600' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'from-blue-400 to-blue-600' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: 'from-blue-500 to-cyan-500' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'from-blue-600 to-indigo-600' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'from-green-500 to-green-700' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: 'from-red-500 to-red-700' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: 'from-pink-500 to-rose-500' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'from-orange-500 to-red-500' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'from-orange-500 to-yellow-500' },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: 'from-red-500 to-orange-500' },
  { name: 'Solidity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg', color: 'from-slate-600 to-slate-800' },
]

function ScrollReveal({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

export default function TechStack() {
  const duplicatedStacks = [...techStacks, ...techStacks, ...techStacks]

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold mb-6 shadow-lg shadow-blue-500/30"
            >
              기술 스택
            </motion.span>
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 font-poppins">
              우리의 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">기술 스택</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              최신 기술과 프레임워크를 활용하여 견고하고 확장 가능하며 혁신적인 솔루션을 구축합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden py-8 mb-16">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -((techStacks.length * 220) / 3)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear',
              },
            }}
          >
            {duplicatedStacks.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  rotate: 2
                }}
                className="flex-shrink-0 w-52 bg-white/80 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer border border-white/50 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 flex items-center justify-center"
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <span className="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
