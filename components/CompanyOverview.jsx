'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Globe, Target, ArrowRight, CheckCircle } from 'lucide-react'

function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function CompanyOverview() {
  const highlights = [
    { icon: Users, text: '200+ 만족한 고객사', color: 'from-blue-500 to-cyan-500' },
    { icon: Globe, text: '전 세계 15개국 진출', color: 'from-purple-500 to-pink-500' },
    { icon: Award, text: '50+ 수상 경력', color: 'from-amber-500 to-orange-500' },
    { icon: Target, text: '98% 프로젝트 성공률', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section id="company-overview" className="py-24 relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Company Team"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent" />
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 right-8 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">500+</p>
                    <p className="text-sm text-slate-500">완료된 프로젝트</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Right Side - Details */}
          <div className="space-y-8">
            <ScrollReveal>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4"
              >
                회사 소개
              </motion.span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-poppins leading-tight">
                혁신적인 기술로<br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  미래를 만듭니다
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Ricco는 최첨단 기술과 창의적인 솔루션으로 기업의 디지털 혁신을 이끌고 있습니다. 
                웹 개발부터 AI 솔루션까지, 비즈니스 성장을 위한 최적의 기술 파트너가 되어 드립니다.
              </p>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-slate-800">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Button */}
            <ScrollReveal delay={0.6}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                더 알아보기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
