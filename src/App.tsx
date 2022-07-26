import { FC, useEffect, useState } from 'react'
import { GetAllAchiviementsQry } from './features/achiviements/application/get-all-achiviements-qry'
import { container } from './core/dependency-injection/container'
import styles from './app.module.css'
import { Achiviement } from './features/achiviements/domain/achiviement'
import { AchievementForm } from './features/achiviements/delivery/achievement-form'

const App: FC = () => {
  const [achiviements, setAchiviements] = useState<Achiviement[]>([])

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
      <AchievementForm />
      <div>
        {achiviements.map(x => (
          <p key={x.id}>{x.name}</p>
        ))}
      </div>
    </main>
  )
}

export default App
