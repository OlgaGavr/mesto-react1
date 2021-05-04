import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
function EditProfilePopup({ isOpen, closePopups, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription]=React.useState('');
  
  function handleChangeName(e) {
    setName(e.target.value);
  }
  
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    currentUser.name !== undefined && setName(currentUser.name);
    currentUser.about !== undefined && setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description
    })
  }

  return(
    <PopupWithForm name='edit' title='Редактировать профиль' textButton='Сохранить' 
                   isOpen={isOpen} closePopups={closePopups} onSubmit={handleSubmit} >
      <ul className="popup__fields">
        <li>
          <input type="text" className="popup__field popup__field_text_name" id="name-input"
                 minLength="2" maxLength="40" name="name" required
                 value={name} onChange={handleChangeName} />
          <span className="name-input-error popup__input-error">Необходимо заполнить данное поле</span>
        </li>
        <li>
          <input type="text" className="popup__field popup__field_text_about" id="about-input"
                 minLength="2" maxLength="200" name="about" required
                 value={description} 
                 onChange={handleChangeDescription} />
          <span className="about-input-error popup__input-error">Необходимо заполнить данное поле</span>
        </li>
      </ul>
    </PopupWithForm>
  )
}
    
export default EditProfilePopup;