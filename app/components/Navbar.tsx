import { useTranslation } from 'react-i18next'

export default function Navbar() {
  let { i18n } = useTranslation()
  const changeLanguage = () => {
    if (i18n.language === 'th') {
      i18n.changeLanguage('en')
    } else if (i18n.language === 'en') {
      i18n.changeLanguage('th')
    }
  }

  return (
    <div>
      <div className='nav'>
        <div className='nav-title'>Mayo</div>
        <button
          className=' bg-white text-black'
          onClick={() => changeLanguage()}
        >
          change lang
        </button>
      </div>
    </div>
  )
}
