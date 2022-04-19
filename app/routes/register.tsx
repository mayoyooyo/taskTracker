// @ts-ignore
import Form from "@rjsf/core"
import type { JSONSchema7 } from 'json-schema'
import { useEffect, useState } from 'react'

const mySchema: JSONSchema7 = {
  title: 'My Form',
  description: 'test ieie',
  type: 'object',
  required: [],
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      default: 'Jon',
    },
  },
}

export default function Register() {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    console.log(data);
    
  }, [data])
  

  return (
    <div className='text-xl flex justify-center mt-16'>
      <Form onSubmit={e => {setData(e.formData)}} schema={mySchema} />
    </div>
  )
}
