import styles from '../styles/Home.module.css'
import Nav from './components/Nav'
import Header from './components/Header'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className="container-fluid">
      <Nav />
        <div className="row">
          <div className="col">
          <Header />
          </div>
        </div>
      </div>
    </div>
  )
}
