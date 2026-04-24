'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import Particles from '@tsparticles/react'
import { loadFull } from 'tsparticles'
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react'
import { particlesOptions } from '../lib/particles'

// 3D Sphere Component
function AnimatedSphere() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#818cf8"
        attach="material"
        distort={0.6}
        speed={2.5}
        roughness={0.1}
        metalness={0.9}
        emissive="#fff"
        emissiveIntensity={0.2}
      />
    </Sphere>
  )
}

// Typing Animation Component
function TypingAnimation({ text, className }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-15 bg-indigo-600 ml-1"
      />
    </span>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particlesInit = async (engine) => {
    await loadFull(tsParticles)
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
      onMouseMove={handleMouseMove}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/bg-video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-indigo-950/85 to-purple-950/90" />
      </div>

      {/* Continuous Animated Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [50, -50, 50],
            y: [-50, 50, -50],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [-50, 50, -50],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [-100, 100, -100],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-violet-500/25 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNHMxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')]" />
      </div>

      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="w-full h-full"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30 z-0" />

      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#818cf8" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
          <AnimatedSphere />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/40 to-purple-500/40 backdrop-blur-xl border border-white/30 shadow-2xl shadow-indigo-500/30 mb-10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </motion.div>
            <span className="text-sm font-semibold text-white">수상 경력에 빛나는 IT 기업</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 font-poppins leading-tight"
          >
            <TypingAnimation
              text="미래의 디지털 경험을 구축합니다"
              className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent"
            />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
          >
            최첨단 웹 앱, 블록체인 지갑, AI 솔루션 및 소프트웨어 개발을 통해 여러분의 비전을 현실로 만들어 드립니다. 오늘 미래의 기술을 경험해 보세요.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(99, 102, 241, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-5 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-indigo-500/40 hover:shadow-3xl hover:shadow-indigo-500/60 transition-all duration-300 flex items-center gap-3 overflow-hidden"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <span className="relative z-10">시작하기</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 bg-white/90 backdrop-blur-xl border-2 border-white/60 text-slate-900 rounded-full font-bold text-lg shadow-2xl shadow-white/30 hover:shadow-3xl hover:shadow-white/40 transition-all duration-300"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              포트폴리오 보기
            </motion.button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-10 max-w-3xl mx-auto"
          >
            {[
              { value: '500+', label: '성공적인 프로젝트' },
              { value: '200+', label: '만족한 고객사' },
              { value: '50+', label: '수상 경력 및 인증' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent font-poppins mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-indigo-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
