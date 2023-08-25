export default function Theme(props) {
  const { isThemeOpen, closeTheme } = props
  return (
    <dialog className="overlay" open={isThemeOpen}>
      <div className="overlay__content">
        <form className="overlay__form" data-settings-form id="settings">
          <label className="overlay__field">
            <div className="overlay__label">Theme</div>

            <select className="overlay__input overlay__input_select" data-settings-theme name="theme">
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