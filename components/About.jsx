'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Heart, Users, Target, Zap, Shield } from 'lucide-react'

const aboutCards = [
  {
    icon: Rocket,
    title: '혁신 최우선',
    description: '최첨단 기술과 창의적인 솔루션으로 가능성의 한계를 넓힙니다.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Heart,
    title: '사용자 중심',
    description: '우리의 모든 결정은 뛰어난 사용자 경험을 제공하기 위한 헌신에서 비롯됩니다.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Users,
    title: '협력',
    description: '팀워크의 힘을 믿으며 고객과 강력한 파트너십을 구축합니다.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Target,
    title: '결과 중심',
    description: '비즈니스 성장과 성공을 이끄는 측정 가능한 성과를 제공하는 데 집중합니다.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: '민첩하고 빠른 속도',
    description: '변화하는 요구에 빠르게 적응하고 빛의 속도로 솔루션을 제공합니다.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: '안전하고 신뢰할 수 있는',
    description: '보안과 신뢰성은 우리가 구축하고 제공하는 모든 것의 핵심입니다.',
    color: 'from-violet-500 to-purple-500',
  },
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

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4"
            >
              회사소개
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">
              함께 만들어가는 <span className="text-gradient">미래</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              우리는 아이디어를 특별한 디지털 경험으로 바꾸는 데 헌신하는 열정적인 혁신가, 디자이너, 개발자들로 구성된 팀입니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <ScrollReveal key={card.title}>
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-${card.color.split('-')[1]}-500/50 transition-all duration-300`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="relative text-xl font-bold text-slate-900 mb-3 font-poppins group-hover:text-indigo-600 transition-colors">
                  {card.title}
                </h3>
                <p className="relative text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mission Statement */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 glass-card rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-6 font-poppins">
                우리의 미션
              </h3>
              <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                성장을 주도하고 효율성을 높이며 지속적인 영향을 창출하는 혁신적인 기술 솔루션으로 전 세계 기업의 역량을 강화합니다. 우리는 단순한 제품이 아니라 오랜 시간 지속되는 파트너십을 구축한다고 믿습니다.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl cursor-pointer transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                여정에 함께하기
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
