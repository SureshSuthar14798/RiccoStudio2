'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowUp } from 'lucide-react'

const footerLinks = {
  company: [
    { name: '회사소개', href: '#about' },
    { name: '서비스', href: '#services' },
    { name: '포트폴리오', href: '#portfolio' },
    { name: '문의하기', href: '#contact' },
  ],
  services: [
    { name: '웹 개발', href: '#services' },
    { name: '블록체인', href: '#services' },
    { name: 'AI 솔루션', href: '#services' },
    { name: '모바일 앱', href: '#services' },
  ],
  resources: [
    { name: '블로그', href: '#' },
    { name: '문서', href: '#' },
    { name: '사례 연구', href: '#' },
    { name: '자주 묻는 질문', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Github, href: '#', name: 'GitHub' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gradient mb-4 font-poppins">
                RiccoStudio
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                최첨단 기술과 혁신적인 솔루션으로 디지털 경험의 미래를 구축합니다.
                웹 개발, 블록체인, AI, 소프트웨어 엔지니어링 분야에서 여러분의 신뢰할 수 있는 파트너입니다.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <span>hello@ricco.tech</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Phone className="w-5 h-5 text-indigo-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                  <span>서울, 대한민국</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 capitalize font-poppins">
                {title === 'company' ? '회사' : title === 'services' ? '서비스' : title === 'resources' ? '리소스' : title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm"
            >
              © {new Date().getFullYear()} Ricco. 모든 권리 보유.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
