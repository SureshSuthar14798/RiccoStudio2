'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'DeFi 플랫폼',
    category: '블록체인',
    description: '멀티체인을 지원하는 탈중앙화 금융 플랫폼',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    tags: ['React', 'Solidity', 'Web3'],
  },
  {
    id: 2,
    title: 'AI 분석 대시보드',
    category: 'AI',
    description: '비즈니스 인텔리전스를 위한 머신 러닝 기반 분석',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Python', 'TensorFlow', 'React'],
  },
  {
    id: 3,
    title: '이커머스 플랫폼',
    category: '웹',
    description: '실시간 재고 관리를 지원하는 최신 이커머스 솔루션',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    id: 4,
    title: 'NFT 마켓플레이스',
    category: '블록체인',
    description: '지갑 연동 디지털 아트 마켓플레이스',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    tags: ['React', 'IPFS', 'Ethereum'],
  },
  {
    id: 5,
    title: '헬스케어 앱',
    category: '웹',
    description: 'AI 진단 기능을 갖춘 원격 진료 플랫폼',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['React Native', 'AI', 'AWS'],
  },
  {
    id: 6,
    title: '챗봇 어시스턴트',
    category: 'AI',
    description: '지능형 고객 서비스 자동화',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    tags: ['NLP', 'Python', 'Node.js'],
  },
]

const categories = ['전체', '웹', '블록체인', 'AI']

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

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('전체')

  const filteredItems = activeFilter === '전체' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-4"
            >
              우리의 포트폴리오
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">
              주요 <span className="text-gradient">프로젝트</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              우리의 전문성과 우수성을 향한 헌신을 보여주는 성공적인 프로젝트 포트폴리오를 살펴보세요.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-md border border-white/30 text-slate-700 hover:bg-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-medium text-slate-700">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-poppins">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <ScrollReveal delay={0.5}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/80 backdrop-blur-md border border-white/30 text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              모든 프로젝트 보기
            </motion.button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
