function PopupWithForm({isOpen, name, title, textButton, children, closePopups}) {
  return(
    <article className={`popup ${isOpen ? 'popup_opened' : ' '}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="form" name={`form_${name}`} noValidate>
          {children}
          <button type="submit" className="button button_action_save">{textButton}</button>
        </form>
        <button type="button" 
                className="button button_action_close button_action_close-edit" 
                aria-label="закрыть" 
                onClick={closePopups}>
        </button>
      </div>
    </article>
  )
}
  
export default PopupWithForm;