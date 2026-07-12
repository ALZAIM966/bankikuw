import React from 'react'
import { useEditorStore, PageElement } from '@/store/editorStore'

export const ComponentLibrary: React.FC = () => {
  const addElement = useEditorStore((state) => state.addElement)

  const components = [
    { type: 'heading', label: 'عنوان', icon: '📝' },
    { type: 'paragraph', label: 'فقرة نصية', icon: '📄' },
    { type: 'button', label: 'زر', icon: '🔘' },
    { type: 'image', label: 'صورة', icon: '🖼️' },
    { type: 'section', label: 'قسم', icon: '📦' }
  ]

  const handleAddComponent = (type: string) => {
    const newElement: PageElement = {
      id: Date.now().toString(),
      type: type as any,
      content: `محتوى ${type}`,
      styles: {},
      position: 0
    }
    addElement(newElement)
  }

  return (
    <div className="w-80 bg-white border-l border-gray-300 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">📚 مكتبة المكونات</h2>
      <div className="grid grid-cols-2 gap-3">
        {components.map((comp) => (
          <button
            key={comp.type}
            onClick={() => handleAddComponent(comp.type)}
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors text-center"
          >
            <div className="text-2xl mb-1">{comp.icon}</div>
            <div className="text-sm font-medium">{comp.label}</div>
          </button>
        ))}
      </div>
    </div>
  )
}