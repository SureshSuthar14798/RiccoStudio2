'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'Ricco는 우리의 비전을 현실로 바꿔주었습니다. 그들의 팀은 모든 기대를 뛰어넘는 훌륭한 블록체인 플랫폼을 제공했습니다. 정말 세계적인 수준의 작품입니다!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, DataFlow Systems',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: '그들이 구축한 AI 솔루션은 우리의 비즈니스 프로세스를 혁신했습니다. 그들의 전문성과 세부 사항에 대한 주의는 업계에서 비교할 수 없는 수준입니다.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, EcoTech',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: 'Ricco와 함께 일하는 것은 정말 즐거웠습니다. 그들은 우리의 요구 사항을 완벽하게 이해했고 시간과 예산 내에 멋진 웹 애플리케이션을 제공했습니다.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Director, InnovateLab',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    content: '그들의 소프트웨어 개발 전문성은 탁월합니다. 그들은 우리의 성장과 함께 아름답게 확장된 견고한 시스템을 구축했습니다. 강력 추천합니다!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'VP Operations, CloudNine',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    content: '그들이 개발한 모바일 앱은 사용자로부터 놀라운 피드백을 받았습니다. Ricco의 팀은 전문적이고 창의적이며 결과를 제공합니다.',
    rating: 5,
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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-600 text-sm font-medium mb-4"
            >
              고객 후기
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">
              고객님들의 <span className="text-gradient">의견</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              우리의 말만 믿지 마세요. 고객님들이 우리와 함께 일한 경험에 대해 말씀해 주신 내용입니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Testimonial Card */}
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-10">
                <Quote className="w-24 h-24 text-indigo-600" />
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                  }}
                  className="relative z-10"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-medium">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 font-poppins">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-slate-600">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-white/30 hover:bg-white transition-colors shadow-md"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-700" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-white/30 hover:bg-white transition-colors shadow-md"
                >
                  <ChevronRight className="w-6 h-6 text-slate-700" />
                </motion.button>
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 w-8'
                      : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Mini Testimonials Grid */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">{testimonial.name}</h5>
                    <p className="text-xs text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
