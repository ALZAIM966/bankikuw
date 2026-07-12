import React from 'react'
import { useEditorStore } from '@/store/editorStore'
import { 
  DraggableButton, 
  DraggableHeading, 
  DraggableParagraph 
} from './DraggableComponents'

export const Canvas: React.FC = () => {
  const { elements, removeElement, updateElement } = useEditorStore()

  const renderElement = (element: any) => {
    switch (element.type) {
      case 'heading':
        return (
          <DraggableHeading
            key={element.id}
            element={element}
            onUpdate={updateElement}
            onDelete={removeElement}
          />
        )
      case 'paragraph':
        return (
          <DraggableParagraph
            key={element.id}
            element={element}
            onUpdate={updateElement}
            onDelete={removeElement}
          />
        )
      case 'button':
        return (
          <DraggableButton
            key={element.id}
            element={element}
            onUpdate={updateElement}
            onDelete={removeElement}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="flex-1 drop-zone overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {elements.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">أضف مكونات من مكتبة المكونات</p>
          </div>
        ) : (
          <div className="space-y-4">
            {elements.map((element) => renderElement(element))}
          </div>
        )}
      </div>
    </div>
  )
}