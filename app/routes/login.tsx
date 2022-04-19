import { useEffect, useState } from 'react'
import type { JSONSchema6 } from 'json-schema'
import Form from 'react-jsonschema-form'

const schema: JSONSchema6 = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title' },
    done: { type: 'boolean', title: 'Done?' },
  },
}

const mySchema: JSONSchema6 = {
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

const uiSchema = {
  title: {
    'ui:field': 'string',
    'ui:emptyValue': 'hello',
  },
}

export default function Register() {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className='text-xl flex justify-center mt-16'>
      <div style={{ margin: 24 }}>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onSubmit={(e) => {
            setData(e.formData)
          }}
        />
      </div>
    </div>
  )
}
