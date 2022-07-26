import { FC } from 'react'
import { useForm } from 'react-hook-form'

interface Form {
  name: String
}

export const AchievementForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <section>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
