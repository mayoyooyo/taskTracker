import TaskSection from '~/components/TaskSection'
import { useTranslation } from "react-i18next";

export default function Task() {
  const { t } = useTranslation();

  return (
    <div className='flex justify-center'>
      <div className='task-box'>
        <header className='header'>
          <div className='text-4xl'>{t("Task Tracker")}</div>
          <button className='btn btn-black'>add</button>
        </header>
        <div className='task-section '>
          <TaskSection title='mayo' paragraph='mayooo' time='12:00' />
        </div>
      </div>
    </div>
  )
}
