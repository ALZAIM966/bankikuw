import React from 'react'

export const DraggableButton: React.FC<any> = ({ element, onUpdate, onDelete }) => {
  return (
    <div className="draggable-item group">
      <div className="flex justify-between items-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {element.content}
        </button>
        <button
          onClick={() => onDelete(element.id)}
          className="opacity-0 group-hover:opacity-100 px-2 py-1 bg-red-500 text-white rounded text-sm"
        >
          حذف
        </button>
      </div>
    </div>
  )
}

export const DraggableHeading: React.FC<any> = ({ element, onUpdate, onDelete }) => {
  return (
    <div className="draggable-item group">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{element.content}</h1>
        <button
          onClick={() => onDelete(element.id)}
          className="opacity-0 group-hover:opacity-100 px-2 py-1 bg-red-500 text-white rounded text-sm"
        >
          حذف
        </button>
      </div>
    </div>
  )
}

export const DraggableParagraph: React.FC<any> = ({ element, onUpdate, onDelete }) => {
  return (
    <div className="draggable-item group">
      <div className="flex justify-between items-start">
        <p className="text-gray-700">{element.content}</p>
        <button
          onClick={() => onDelete(element.id)}
          className="opacity-0 group-hover:opacity-100 px-2 py-1 bg-red-500 text-white rounded text-sm"
        >
          حذف
        </button>
      </div>
    </div>
  )
}