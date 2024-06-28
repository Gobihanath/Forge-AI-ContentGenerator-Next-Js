"use client"
import React from 'react'
import FormSection from './components/FormSection'
import OutputSection from './components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'


interface PROPS{
    params:{
        'template-slug':string
    }
    
}

function CreateNewContent(props:PROPS) {
  
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
    
    const GenerateAIContent=(formData:any)=>{

    }


  return (
    <div className='p-5'>
        <Link href={"/dashboard"}>
        <Button><ArrowLeft/>Back</Button>
        </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 bg-slate-200 h-screen'>
        {/* Form section */}

        <FormSection 
        selectedTemplate={selectedTemplate}
        userFormInput={(v:any)=>GenerateAIContent(v)}
        />

        {/* output section */}
        <div className='col-span-2'>
        <OutputSection/>
        </div>
      
    </div>
    </div>
  )
}

export default CreateNewContent
