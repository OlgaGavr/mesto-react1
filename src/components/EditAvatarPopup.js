import React from 'react';
import PopupWithForm from './PopupWithForm';
function EditAvatarPopup({ isOpen, closePopups, onUpdateAvatar }) {
  const imageRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: imageRef.current.value });
  }

  return (
    <PopupWithForm name='edit-avatar' title='Обновить аватар' textButton='Сохранить'
                   isOpen={isOpen} closePopups={closePopups} onSubmit={handleSubmit} >
      <ul className="popup__fields">
        <li>
          <input type="url" className="popup__field popup__field_text_avatar" id="linkavatar-input"
                 ref={imageRef} name="avatar" placeholder="Ссылка на аватарку" required />
          <span className="linkavatar-input-error popup__input-error">Необходимо заполнить данное поле</span>
        </li>
      </ul>
    </PopupWithForm>   
  )
}

export default EditAvatarPopup;