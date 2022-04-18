import TaskSection from '~/components/TaskSection'

export default function Task() {
  return (
    <body className='flex flex-col items-center'>
      <div className='task-box'>
        <header className='header'>
          <div className='text-4xl'>Task Tracker</div>
          <button className='btn btn-black'>add</button>
        </header>
        <div className='task-section '>
          <TaskSection />
        </div>
      </div>
    </body>
  )
}
