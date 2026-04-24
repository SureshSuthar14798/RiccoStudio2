'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Wallet, Brain, Code, Smartphone, Cloud, Lock, Database } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: '웹 애플리케이션',
    description: '최적의 성능과 사용자 경험을 위해 최신 프레임워크로 구축된 맞춤형 웹 애플리케이션입니다.',
    features: ['React 및 Next.js', '프로그레시브 웹 앱', '이커머스 솔루션', 'SaaS 플랫폼'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Wallet,
    title: '블록체인 지갑',
    description: '고급 보안 기능을 갖춘 안전하고 사용자 친화적인 암호화폐 지갑입니다.',
    features: ['멀티체인 지원', '하드웨어 연동', 'DeFi 프로토콜', 'NFT 마켓플레이스'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'AI 솔루션',
    description: '비즈니스 자동화를 위한 최첨단 인공 지능 및 머신 러닝 솔루션입니다.',
    features: ['자연어 처리', '컴퓨터 비전', '예측 분석', '챗봇'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Code,
    title: '소프트웨어 개발',
    description: '아이디어 구상부터 배포 및 유지보수까지 통합 소프트웨어 개발 서비스를 제공합니다.',
    features: ['맞춤형 소프트웨어', 'API 개발', '시스템 통합', 'DevOps 및 CI/CD'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Smartphone,
    title: '모바일 개발',
    description: 'iOS 및 Android용 네이티브 및 크로스 플랫폼 모바일 애플리케이션입니다.',
    features: ['React Native', 'Flutter', 'iOS 및 Android', '앱 스토어 최적화'],
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: Cloud,
    title: '클라우드 솔루션',
    description: '현대 비즈니스를 위한 확장 가능한 클라우드 인프라 및 서비스입니다.',
    features: ['AWS 및 Azure', '서버리스 아키텍처', '마이크로서비스', '클라우드 마이그레이션'],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Lock,
    title: '사이버 보안',
    description: '디지털 자산과 데이터를 보호하는 포괄적인 보안 솔루션입니다.',
    features: ['모의 해킹', '보안 감사', '컴플라이언스', '사고 대응'],
    color: 'from-slate-600 to-slate-800',
  },
  {
    icon: Database,
    title: '데이터 분석',
    description: '고급 분석 솔루션을 통해 원시 데이터를 실행 가능한 인사이트로 변환합니다.',
    features: ['빅데이터 처리', '데이터 시각화', '비즈니스 인텔리전스', '실시간 분석'],
    color: 'from-teal-500 to-green-500',
  },
]

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

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
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
              className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4"
            >
              서비스 소개
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">
              우리가 제공하는 <span className="text-gradient">것</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              비즈니스 요구 사항에 맞춘 포괄적인 기술 솔루션을 제공합니다. 웹 개발부터 AI 통합까지 모든 것을 지원합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.2)'
                }}
                className="glass-card rounded-2xl p-6 group relative overflow-hidden transition-all duration-300 border border-white/40 h-full flex flex-col"
              >
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-2xl group-hover:shadow-${service.color.split('-')[1]}-500/40 transition-all duration-300 flex-shrink-0`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins group-hover:text-indigo-600 transition-colors flex-shrink-0">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 flex-shrink-0">
                    {service.features.map((feature) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center text-xs text-slate-500 group-hover:text-slate-600 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-2"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
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
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              프로젝트 시작하기
            </motion.button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
