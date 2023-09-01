export default function Theme(props) {
  const { isThemeOpen, closeTheme } = props

  const changeTheme = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const data = Object.fromEntries(form)
    console.log(data)
  }

  return (
    <dialog className="overlay" open={isThemeOpen}>
      <div className="overlay__content">
        <form className="overlay__form"  id="settings" onSubmit={changeTheme}>
          <label className="overlay__field">
            <div className="overlay__label">Theme</div>

            <select className="overlay__input overlay__input_select"  name="theme">
              <option value="day">Day</option>
              <option value="night">Night</option>
            </select>
          </label>
        </form>

        <div className="overlay__row">
          <button className="overlay__button" onClick={() => closeTheme()}>Cancel</button>
          <button className="overlay__button overlay__button_primary" type="submit" form="settings">Save</button>
        </div>
      </div>
    </dialog>
  )
}