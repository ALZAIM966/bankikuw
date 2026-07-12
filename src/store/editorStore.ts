import { create } from 'zustand'

export interface PageElement {
  id: string
  type: 'heading' | 'paragraph' | 'button' | 'image' | 'section'
  content: string
  styles: Record<string, any>
  position: number
}

interface EditorStore {
  elements: PageElement[]
  addElement: (element: PageElement) => void
  removeElement: (id: string) => void
  updateElement: (id: string, updates: Partial<PageElement>) => void
  reorderElements: (elements: PageElement[]) => void
}

export const useEditorStore = create<EditorStore>((set) => ({
  elements: [],
  
  addElement: (element) => set((state) => ({
    elements: [...state.elements, element]
  })),
  
  removeElement: (id) => set((state) => ({
    elements: state.elements.filter(el => el.id !== id)
  })),
  
  updateElement: (id, updates) => set((state) => ({
    elements: state.elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    )
  })),
  
  reorderElements: (elements) => set({ elements })
}))