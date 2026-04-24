'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'stats', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: '회사소개', href: '#about' },
    { name: '서비스', href: '#services' },
    { name: '포트폴리오', href: '#portfolio' },
    { name: '고객후기', href: '#testimonials' },
    { name: '문의하기', href: '#contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-2xl shadow-2xl shadow-indigo-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold font-poppins transition-colors duration-300 ${
              isScrolled ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent' : 'text-white'
            }`}
          >
            RiccoStudio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-indigo-50 text-indigo-600 shadow-lg shadow-indigo-500/30'
                    : isScrolled
                      ? 'text-slate-700 hover:text-indigo-600 hover:bg-indigo-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              시작하기
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                : 'bg-white/20 backdrop-blur-xl text-white hover:bg-white/30'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-white/30 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.href.replace('#', '') && (
                    <ChevronRight size={16} />
                  )}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300"
                  onClick={(e) => scrollToSection(e, '#contact')}
                >
                  시작하기
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
