import styles from './Card.module.css'
import { Link, NavLink } from 'react-router-dom';
export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={styles.card}>
         <button onClick={onClose} className={styles.btnClose}>X</button>
         <div className={styles.titleName}>
          <NavLink  to={`/detail/${id}`}><h2 >{name}</h2></NavLink>
         </div>
         <img  src={image} alt={name} />
         <div className={styles.humanMale}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
      </div>
   );
}
