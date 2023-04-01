import './index.css'

const TabsList = props => {
  const {listItem, onSelectHandler} = props
  const {buttonText, id} = listItem
  const onClickHandler = () => {
    onSelectHandler(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickHandler}>
        {buttonText}
      </button>
    </li>
  )
}
export default TabsList
