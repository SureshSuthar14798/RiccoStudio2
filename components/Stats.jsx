'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Users, Briefcase, TrendingUp, Award, Clock, Star, Sparkles, Zap } from 'lucide-react'

const stats = [
  { icon: Users, value: 258, label: '만족한 고객', suffix: '+' },
  { icon: Briefcase, value: 621, label: '완료된 프로젝트', suffix: '+' },
  { icon: TrendingUp, value: 25, label: '백만 달러 매출', suffix: 'M+' },
  { icon: Award, value: 44, label: '수상 경력', suffix: '+' },
  { icon: Clock, value: 10, label: '년 경험', suffix: '+' },
  { icon: Star, value: 51, label: '만족도', suffix: '%' },
]

function AnimatedCounter({ value, suffix, duration = 2, isAutoChanging = false }) {
  const [count, setCount] = useState(0)
  const [displayValue, setDisplayValue] = useState(value)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Auto-incrementing feature
  useEffect(() => {
    if (isAutoChanging && isInView) {
      const interval = setInterval(() => {
        setDisplayValue(prev => prev + 1)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoChanging, isInView])

  useEffect(() => {
    if (isInView) {
      let startTime
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const targetValue = isAutoChanging ? displayValue : value
        setCount(Math.floor(easeOutQuart * targetValue))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(targetValue)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration, displayValue, isAutoChanging])

  // Update count when displayValue changes (for auto-changing)
  useEffect(() => {
    if (isAutoChanging && isInView) {
      setCount(displayValue)
    }
  }, [displayValue, isAutoChanging, isInView])

  return (
    <span ref={ref} className="text-5xl font-bold text-white font-poppins">
      <AnimatePresence mode="wait">
        <motion.span
          key={count}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {count}{suffix}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

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

export default function Stats() {
  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      {/* Animated Background with Multiple Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600" />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent" />
      
      {/* Animated Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [50, -50, 50],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
      />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNHMxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-4"
            >
              우리의 성과
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-poppins">
              말해주는 <span className="text-white/90">숫자</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              성공과 우수성에 대한 우리의 실적이 이 숫자들에 반영되어 있습니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const isLastStat = index === stats.length - 1
            return (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ 
                    scale: 1.08, 
                    y: -15,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                  className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:bg-white/25 transition-all duration-500 overflow-hidden"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md flex items-center justify-center mb-4 shadow-lg shadow-white/20 group-hover:shadow-white/40 transition-shadow duration-300"
                  >
                    {isLastStat && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1 -right-1"
                      >
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                      </motion.div>
                    )}
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Counter */}
                  <div className="relative">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      duration={2} 
                      isAutoChanging={true}
                    />
                    {isLastStat && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -top-2 -right-4"
                      >
                        <Zap className="w-4 h-4 text-yellow-300" />
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Label */}
                  <p className="text-sm text-white/90 mt-3 font-medium tracking-wide">
                    {stat.label}
                  </p>
                  
                  {/* Bottom Accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  />
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={0.5}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.08, 
                boxShadow: '0 0 40px rgba(255, 255, 255, 0.6), 0 0 80px rgba(255, 255, 255, 0.3)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 overflow-hidden"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "linear"
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                우리의 성공에 함께하기
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
