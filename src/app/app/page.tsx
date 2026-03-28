'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function App() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAccess = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user?.id) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()
        setProfile(data)
      }
      setLoading(false)
    }
    checkAccess()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const hasAccess = profile?.has_access

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100 p-8">
        <div className="max-w-lg bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-white">🔒</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome!</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-md mx-auto">
            Unlock lifetime access to Zoriana's autism parenting guides and videos.
          </p>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-2xl max-w-sm mx-auto mb-8 shadow-xl">
            <button className="w-full bg-white text-purple-600 font-bold py-5 px-8 rounded-xl text-lg hover:shadow-2xl transition-all duration-300">
              $47 One-time payment
            </button>
          </div>
          <div className="text-xs space-y-1 text-gray-500">
            <p><strong>TEST:</strong> Supabase Dashboard → Table Editor → profiles → toggle <code>has_access</code> = true</p>
            <p>Content streams only - no downloads</p>
          </div>
        </div>
      </div>
    )
  }

  // Paid content
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 mb-12 border border-emerald-100">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent mb-8">
            Zoriana's Guide
          </h1>
          <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl">
            Lifetime access unlocked. Videos, strategies, and decades of experience - all here when you need them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-white font-bold">🎥</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding</h3>
            <p className="text-gray-600 mb-6">Core concepts and what to expect</p>
            <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-lg text-white font-semibold">Video (12 min)</span>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-white font-bold">🛡️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Strategies</h3>
            <p className="text-gray-600 mb-6">Meltdowns, routines, sensory support</p>
            <div className="h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-lg text-white font-semibold">Guide + checklist</span>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-white font-bold">❤️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Self-care</h3>
            <p className="text-gray-600 mb-6">Looking after yourself as a parent</p>
            <div className="h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-lg text-white font-semibold">Audio guide (8 min)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}