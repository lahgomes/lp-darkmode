import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'

import styles from './SwitchToggle.module.css'

const SwitchToggle = () => {
  const { isChecked, handleDarkMode } = useContext(ThemeContext)

  return (
    <div className={styles.switchContainer}>
      <label>
        <input
          checked={isChecked}
          onChange={handleDarkMode}
          className={styles.switch}
          type="checkbox"
        />
        <div>
          <div></div>
        </div>
      </label>
    </div>
  )
}

export default SwitchToggle
