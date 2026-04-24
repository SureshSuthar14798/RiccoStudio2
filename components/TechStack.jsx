'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const techStacks = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '⎈' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Redis', icon: '🔴' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'REST API', icon: '🔗' },
  { name: 'Git', icon: '📦' },
  { name: 'CI/CD', icon: '🔄' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'Solidity', icon: '💎' },
  { name: 'Web3', icon: '🌐' },
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
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 text-sm font-medium mb-4"
            >
              기술 스택
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">
              우리의 <span className="text-gradient">기술 스택</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              최신 기술과 프레임워크를 활용하여 견고하고 확장 가능하며 혁신적인 솔루션을 구축합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden py-5 mb-16">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -((techStacks.length * 200) / 3)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {duplicatedStacks.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 w-48 glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <span className="text-4xl">{tech.icon}</span>
                <span className="text-sm font-medium text-slate-700">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Categories Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: '프론트엔드', count: 12, color: 'from-blue-500 to-cyan-500' },
              { title: '백엔드', count: 10, color: 'from-green-500 to-emerald-500' },
              { title: '데이터베이스', count: 8, color: 'from-purple-500 to-pink-500' },
              { title: 'DevOps', count: 6, color: 'from-orange-500 to-red-500' },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{category.count}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-poppins">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">기술</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
