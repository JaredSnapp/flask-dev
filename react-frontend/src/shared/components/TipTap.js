import './tiptap.css'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

import { TextField, Button, IconButton, ThemeProvider } from '@mui/material';

import { FormatBold } from '@mui/icons-material';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import CodeIcon from '@mui/icons-material/Code';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import TitleIcon from '@mui/icons-material/Title';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import RamenDiningIcon from '@mui/icons-material/RamenDining';


const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <>
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
        ><FormatBold /></IconButton>
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
        ><FormatItalicIcon /></IconButton>
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
        ><StrikethroughSIcon /></IconButton>
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
        ><CodeIcon /></IconButton>
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      ><TitleIcon /></IconButton>
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        ><FormatClearIcon /></IconButton>
      {/* <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button> */}
      {/* <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        paragraph
      </button> */}
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      ><FormatListBulletedIcon /></IconButton>
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      ><FormatListNumberedIcon /></IconButton>
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      ><CodeIcon /></IconButton>
      {/* <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      ><FormatQuoteIcon /></IconButton> */}
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      ><HorizontalRuleIcon /></IconButton>
      {/* <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().setHardBreak().run()}
      ><RamenDiningIcon /></IconButton> */}
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      ><UndoIcon /></IconButton>
      <IconButton variant="outlined" size="small" 
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      ><RedoIcon /></IconButton>
    </>
  )
}

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: ``,
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}