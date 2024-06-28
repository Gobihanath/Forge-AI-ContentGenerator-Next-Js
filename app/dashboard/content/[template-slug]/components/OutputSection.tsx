import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';


function OutputSection() {

  const editorRef:any=useRef();

  return (
    <div className='bg-slate-100 shadow-lg border rounded-lg'>
    <div className='flex justify-between items-center p-5'>
       <h2 className='font-medium text-lg'>Result</h2>
       <Button className='flex gap-2'><Copy className='w-4 h-4'/>Copy Text</Button>
    </div>
      <Editor
       ref={editorRef}
      
        initialValue="Your output goes here"
        initialEditType="wysiwyg"
        // height="600px"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default OutputSection
