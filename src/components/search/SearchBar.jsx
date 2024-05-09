import React from 'react'
import styles from './searchBar.module.css'
import SearchImg from '../../img/search.svg'

function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder='find player...'/>
      <img src={SearchImg} alt="" />
    </div>
  )
}

export default SearchBar
