import { useState, useEffect, useRef } from "react";
import { Editor } from "@tiptap/react";

const colors = [
  "#fef08a", "#86efac", "#7dd3fc", "#c4b5fd", "#f9a8d4",
  "#94a3b8", "#fb923c", "#4338ca", "#71717a", "#ef4444",
  "#06b6d4", "#c026d3"
];

export default function Highlight({ editor }: { editor: Editor }) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editor) {
      const { color } = editor.getAttributes("highlight");
      setSelectedColor(color || null);
    }
  }, [editor, editor?.state.selection]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block z-10" ref={modalRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 border rounded-lg flex items-center gap-4"
      >
        <div
          className="w-6 h-6 border rounded"
          style={{ backgroundColor: selectedColor || "transparent" }}
        />
        <span>Highlight</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg p-2 rounded-lg border grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-6 h-6 rounded border hover:scale-110 transition-transform ${
                selectedColor === color ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => {
                editor.chain().focus().toggleHighlight({ color }).run();
                setSelectedColor(color);
                setIsOpen(false);
              }}
            />
          ))}
          <button
            className="col-span-4 text-sm p-1 bg-gray-100 hover:bg-gray-200 rounded"
            onClick={() => {
              editor.chain().focus().unsetHighlight().run();
              setSelectedColor(null);
              setIsOpen(false);
            }}
          >
            No Color
          </button>
        </div>
      )}
    </div>
  );
}
