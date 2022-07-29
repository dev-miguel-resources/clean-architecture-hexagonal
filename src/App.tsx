import { FC, useEffect, useState } from 'react'
import { GetAllAchiviementsQry } from './features/achiviements/application/get-all-achiviements-qry'
import { container } from './core/dependency-injection/container'
import styles from './app.module.css'
import { Achiviement } from './features/achiviements/domain/achiviement'
import { AchievementForm } from './features/achiviements/delivery/achievement-form'
import { useTranslation } from 'react-i18next'

export const App: FC = () => {
  const [achiviements, setAchiviements] = useState<Achiviement[]>([])
  const { t, i18n } = useTranslation(['global', 'achievements'])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const getAllAchiviementsQry = container.resolve(GetAllAchiviementsQry)
    const results = await getAllAchiviementsQry.execute()
    setAchiviements(results)
  }

  return (
    <main className={styles.container}>
      <h1>{t('global:homeTitle')}</h1>
      <h2>{t('achievements:homeTitle', { library: 'React' })}</h2>
      <AchievementForm />
      <div>
        {achiviements.map(x => (
          <p key={x.id}>{x.name}</p>
        ))}
      </div>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </main>
  )
}
