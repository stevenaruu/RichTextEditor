import { useEditor } from "@tiptap/react"
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from "@tiptap/starter-kit"
import Placeholder from '@tiptap/extension-placeholder'
import { useDispatch, useSelector } from "react-redux"
import { selectDocumentById, UPDATE_DOCUMENT } from "../store/document/document-slice"

interface EditorProps {
  title: string;
  placeholder: string;
  docId: number;
}

export const useCustomEditor = ({ title, placeholder, docId }: EditorProps) => {
  const dispatch = useDispatch()
  const document = useSelector(selectDocumentById(docId))

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder,
      }),
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Underline,
      BulletList,
      OrderedList,
      ListItem,
      Highlight.configure({ multicolor: true }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: document?.content || '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      dispatch(UPDATE_DOCUMENT({ id: docId, title: title, content: html, isActive: true }))
    },
  })

  return editor;
}
