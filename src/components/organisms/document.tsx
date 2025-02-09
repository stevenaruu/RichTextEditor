import { useState } from 'react'
import Toolbar from '../molecules/toolbar'
import EditorLayout from '../molecules/editor-layout'
import { useSelector } from 'react-redux';
import { selectActiveDocument } from '../../store/document/document-slice';
import { useCustomEditor } from '../../hooks/use-editor';

const Document = () => {
  const document = useSelector(selectActiveDocument);
  const [title, setTitle] = useState(document?.title || '');

  const editor = useCustomEditor({
    title,
    placeholder: 'Write Something...',
    docId: document?.id || 0,
  });

  if (!editor) {
    return null
  }
  return (
    <>
      <Toolbar editor={editor} />
      <EditorLayout
        title={title}
        setTitle={setTitle}
        document={document}
        editor={editor}
      />
    </>
  )
}

export default Document