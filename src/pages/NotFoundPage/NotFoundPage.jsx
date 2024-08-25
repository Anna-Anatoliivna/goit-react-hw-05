import { Navigate, Route, Routes } from "react-router-dom"
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
      <div className={styles.box}>NotFoundPage
          <Routes>
        <Route path="*" element={<Navigate to="/" />} />  
          </Routes>
          
          </div>
  )
}

export default NotFoundPage