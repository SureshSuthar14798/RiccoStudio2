'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, HeadphonesIcon, X, Send, Mail, Phone, Clock } from 'lucide-react'
import { useState } from 'react'

export default function FloatingButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isCustomerPopupOpen, setIsCustomerPopupOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const openTelegram = () => {
    window.open('https://t.me/yourusername', '_blank')
  }

  const openCustomerCenter = () => {
    setIsCustomerPopupOpen(true)
    setIsChatOpen(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    alert('메시지가 전송되었습니다!')
    setFormData({ name: '', email: '', message: '' })
    setIsCustomerPopupOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Main Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="w-14 h-14 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-2xl shadow-indigo-500/40 flex items-center justify-center text-white hover:shadow-3xl hover:shadow-indigo-500/60 transition-all duration-300 relative"
      >
        <AnimatePresence mode="wait">
          {isChatOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ zIndex: -1 }}
        />
      </motion.button>

      {/* Action Buttons */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3 items-end"
          >
            {/* Telegram Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={openTelegram}
              className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700 pr-2">Telegram</span>
            </motion.button>

            {/* Customer Center Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCustomerCenter}
              className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-xl shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <HeadphonesIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700 pr-2">고객 센터</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Customer Center Popup */}
      <AnimatePresence>
        {isCustomerPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={() => setIsCustomerPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <HeadphonesIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">고객 센터</h3>
                      <p className="text-sm text-white/80">빠르고 친절한 응대</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsCustomerPopupOpen(false)}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">이메일</p>
                      <p className="font-semibold text-slate-800">contact@ricco.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">전화</p>
                      <p className="font-semibold text-slate-800">02-1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">운영 시간</p>
                      <p className="font-semibold text-slate-800">평일 09:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">이름</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">이메일</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">메시지</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="문의 내용을 입력하세요"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    메시지 보내기
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
