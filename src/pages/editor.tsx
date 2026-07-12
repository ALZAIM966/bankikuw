import React from 'react'
import Head from 'next/head'
import { ComponentLibrary } from '@/components/ComponentLibrary'
import { Canvas } from '@/components/Canvas'
import { useEditorStore } from '@/store/editorStore'

export default function Editor() {
  const elementCount = useEditorStore((state) => state.elements.length)

  const handleSave = () => {
    alert('✅ تم حفظ الموقع بنجاح!')
  }

  const handlePublish = () => {
    alert('🚀 تم نشر الموقع!')
  }

  return (
    <>
      <Head>
        <title>محرر الموقع - Bankikuw</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex h-screen bg-gray-100">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white border-b border-gray-300 px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-blue-600">🏗️ Bankikuw</h1>
              <p className="text-sm text-gray-500">محرر الموقع | {elementCount} عنصر</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                💾 حفظ
              </button>
              <button
                onClick={handlePublish}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                🚀 نشر
              </button>
            </div>
          </header>

          {/* Content Area */}
          <div className="flex flex-1">
            <Canvas />
            <ComponentLibrary />
          </div>
        </div>
      </div>
    </>
  )
}