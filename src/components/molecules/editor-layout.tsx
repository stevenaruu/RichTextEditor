import { Editor, EditorContent } from "@tiptap/react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Input } from "../ui/input";
import { Document } from "../interfaces/Document.interfaces";
import { useDispatch } from "react-redux";
import { UPDATE_DOCUMENT } from "../../store/document/document-slice";

interface EditorLayoutProps {
  editor: Editor; 
  title: string;
  setTitle: (title: string) => void;
  document: Document | undefined;
}

const EditorLayout = ({ editor, title, document, setTitle }: EditorLayoutProps) => {
  const dispatch = useDispatch();

  return (
    <Alert className="mt-5">
      <AlertTitle>
        <Input
          className="text-zinc-700"
          onChange={(e) => {
            setTitle(e.target.value)
            dispatch(UPDATE_DOCUMENT({ id: document?.id || 0, title: e.target.value, content: document?.content || '', isActive: true }))
          }}
          type="text"
          placeholder="Title..."
          value={title}
        />
      </AlertTitle>
      <AlertDescription>
        <EditorContent editor={editor} />
      </AlertDescription>
    </Alert>
  )
}

export default EditorLayout