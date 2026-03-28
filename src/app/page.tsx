export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Zoriana&apos;s Guide
      </h1>
      <p className="text-xl mb-12 max-w-lg text-center text-gray-700 leading-relaxed">
        Loving guidance for parents of autistic children. Lifetime access to videos, 
        practical strategies, and decades of experience.
      </p>
      <div className="space-x-6">
        <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-1">
          Login
        </a>
        <a href="/register" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-1">
          Sign up
        </a>
      </div>
      <p className="mt-12 text-sm text-gray-500">
        One-time payment. Videos stream only. Access any device.
      </p>
    </main>
  )
}