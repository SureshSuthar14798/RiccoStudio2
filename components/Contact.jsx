'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: '이메일',
      value: 'hello@ricco.tech',
      link: 'mailto:hello@ricco.tech',
    },
    {
      icon: Phone,
      title: '전화',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: '위치',
      value: '서울, 대한민국',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
              className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4"
            >
              문의하기
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">
              함께 <span className="text-gradient">연결</span>되어요
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              프로젝트가 있으신가요? 여러분의 의견을 듣고 싶습니다. 메시지를 보내주시면 최대한 빨리 답변드리겠습니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-poppins">
                  연락처
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  다음 프로젝트를 시작할 준비가 되셨나요? 아래 채널 중 하나를 통해 연락해 주세요.
                  우리 팀은 항상 여러분의 아이디어를 현실로 만드는 데 도움을 준비되어 있습니다.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 glass-card rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                    <p className="text-slate-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="font-semibold text-slate-900 mb-4">팔로우하기</h4>
                <div className="flex gap-4">
                  {[
                    { icon: FaTwitter, name: 'Twitter', href: '#' },
                    { icon: FaLinkedin, name: 'LinkedIn', href: '#' },
                    { icon: FaGithub, name: 'GitHub', href: '#' },
                    { icon: FaInstagram, name: 'Instagram', href: '#' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5 text-slate-700" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 shadow-xl"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-poppins">
                    메시지 전송 완료!
                  </h3>
                  <p className="text-slate-600">
                    연락해 주셔서 감사합니다. 곧 답변드리겠습니다.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="peer w-full px-4 py-4 bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-4 text-slate-500 transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-600 peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2"
                    >
                      이름
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full px-4 py-4 bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-4 text-slate-500 transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-600 peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2"
                    >
                      이메일
                    </label>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="peer w-full px-4 py-4 bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                      placeholder=" "
                    />
                    <label
                      htmlFor="subject"
                      className="absolute left-4 top-4 text-slate-500 transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-600 peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2"
                    >
                      제목
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="peer w-full px-4 py-4 bg-white/50 backdrop-blur-md border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-4 text-slate-500 transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-600 peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2"
                    >
                      메시지
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        전송 중...
                      </>
                    ) : (
                      <>
                        메시지 보내기
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
