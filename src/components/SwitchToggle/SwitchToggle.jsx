import { useState } from 'react'
import styles from './SwitchToggle.module.css'

const SwitchToggle = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChangeSwitchToggle = () => setIsChecked(!isChecked)

  return (
    <div className={styles.switchContainer}>
      <label>
        <input
          checked={isChecked}
          onChange={handleChangeSwitchToggle}
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
