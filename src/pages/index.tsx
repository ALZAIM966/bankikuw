import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bankikuw - منصة بناء المواقع</title>
        <meta name="description" content="منصة بناء المواقع بسهولة بدون كود - Wix Alternative" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        {/* Navigation */}
        <nav className="flex justify-between items-center px-6 py-4 bg-blue-700">
          <h1 className="text-3xl font-bold">🏗️ Bankikuw</h1>
          <div className="flex gap-4">
            <Link href="/login" className="hover:text-blue-200">
              تسجيل الدخول
            </Link>
            <Link href="/signup" className="hover:text-blue-200">
              إنشاء حساب
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <h2 className="text-5xl font-bold mb-4">بناء موقعك بسهولة 🌐</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            منصة بناء المواقع الحديثة بدون الحاجة لكتابة أي كود
          </p>
          <Link
            href="/editor"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-bold text-lg transition-colors"
          >
            ابدأ الآن 🚀
          </Link>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto py-16 px-4">
          <h3 className="text-3xl font-bold text-center mb-12">المميزات الرئيسية</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="text-xl font-bold mb-2">تصاميم جميلة</h4>
              <p>اختر من مئات القوالب الاحترافية</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-xl font-bold mb-2">سريع وسهل</h4>
              <p>بناء موقعك في دقائق فقط</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-xl font-bold mb-2">نشر فوري</h4>
              <p>انشر موقعك للعالم بضغطة زر</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16">
          <h3 className="text-2xl font-bold mb-4">جاهز للبدء؟</h3>
          <Link
            href="/editor"
            className="inline-block px-8 py-3 bg-yellow-400 text-blue-900 hover:bg-yellow-300 rounded-lg font-bold text-lg transition-colors"
          >
            انضم الآن 💪
          </Link>
        </section>
      </div>
    </>
  )
}
