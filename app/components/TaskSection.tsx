type CardProps = {
  title: string
  paragraph: string
  time: string
}

export default function TaskSection({ title, paragraph, time }: CardProps) {
  return (
    <div className='task'>
      <div className='text-xl font-semibold'>{title}</div>
      <p>{paragraph}</p>
      <p>{time}</p>
    </div>
  )
}
