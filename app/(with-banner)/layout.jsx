import { Counter } from './posts/Counter.jsx'

export default function Layout ({ children }) {
  return (
    <div>
      <marquee> Best blog!</marquee>
      <Counter />
      {children}
    </div>
  )
}
