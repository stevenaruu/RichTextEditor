import { Editor } from "@tiptap/react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Highlight from "../ui/highlight";
import { Button } from "../ui/button";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import BulletIcon from '../../assets/icon/bullet-list.svg';
import OrderedIcon from '../../assets/icon/ordered-list.svg';

const Toolbar = ({editor}: {editor: Editor}) => {
  return (
    <div className="mt-10 gap-3 flex justify-center items-center">
      <Select
        value={
          editor.isActive('heading', { level: 1 })
            ? '1'
            : editor.isActive('heading', { level: 2 })
              ? '2'
              : editor.isActive('heading', { level: 3 })
                ? '3'
                : '0'
        }
        defaultValue="0"
        onValueChange={(value) => {
          if (value === '0') {
            editor.chain().focus().setParagraph().run();
          } else {
            editor.chain().focus().toggleHeading({ level: parseInt(value) as 1 | 2 | 3 }).run();
          }
        }}

      >
        <SelectTrigger className="w-36">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="0">Paragraph</SelectItem>
            <SelectItem value="1">Heading 1</SelectItem>
            <SelectItem value="2">Heading 2</SelectItem>
            <SelectItem value="3">Heading 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Highlight editor={editor} />
      <Button
        variant="outline"
        size="icon"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'bg-accent' : ''}
      >
        <BoldIcon />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'bg-accent' : ''}
      >
        <ItalicIcon />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'bg-accent' : ''}
      >
        <UnderlineIcon />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'bg-accent' : ''}
      >
        <img className="size-5" src={BulletIcon} alt="Bullet Icon" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'bg-accent' : ''}
      >
        <img className="size-4" src={OrderedIcon} alt="Ordered Icon" />
      </Button>
    </div>
  )
}

export default Toolbar