/* eslint-disable no-unused-vars */

import './index.css'

const LanguageList = props => {
  const {languageList} = props
  const {imageUrl, imageAltText} = languageList
  return (
    <li>
      <img src={imageUrl} alt={imageAltText} />
    </li>
  )
}

export default LanguageList
