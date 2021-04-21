import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
    function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
    }
  
    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);  
    }
    function handleCardClick(card) {
      setSelectedCard(card)
    }

    function closeAllPopups() {
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false); 
      setSelectedCard(null); 
    }
  

  return (
    <div className="App page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} 
              onAddPlace={handleAddPlaceClick} 
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              />
        <Footer />
        <PopupWithForm isOpen={isEditProfilePopupOpen} name='edit' title='Редактировать профиль' textButton='Сохранить' closePopups={closeAllPopups}>
          <ul className="popup__fields">
            <li>
              <input type="text" id="name-input" className="popup__field popup__field_text_name" minLength="2" maxLength="40" name="name" required/>
              <span className="name-input-error popup__input-error">Необходимо заполнить данное поле</span>
            </li>
            <li>
              <input type="text" id="about-input"  className="popup__field popup__field_text_about" minLength="2" maxLength="200" name="about" required/>
              <span className="about-input-error popup__input-error">Необходимо заполнить данное поле</span>
            </li>
          </ul>
        </PopupWithForm>

        <PopupWithForm isOpen={isAddPlacePopupOpen} name='add' title='Новое место' textButton='Создать' closePopups={closeAllPopups}>
          <ul className="popup__fields">
                <li>
                  <input type="text" id="nameAdd-input"  name="name" className="popup__field popup__field_text_name" minLength="2" maxLength="30" required placeholder = "Название"/>
                  <span className="nameAdd-input-error popup__input-error">Необходимо заполнить данное поле</span>
                </li>
                <li>
                  <input type="url" id="link-input"  name="link" className="popup__field popup__field_text_about" placeholder = "Ссылка на картинку" required/>
                  <span className="link-input-error popup__input-error">Необходимо заполнить данное поле</span>
                </li>
              </ul>
        </PopupWithForm>  
        
        <PopupWithForm name='delete' title='Вы уверены?' textButton='Да'/>         
        
        <PopupWithForm isOpen={isEditAvatarPopupOpen} name='edit-avatar' title='Обновить аватар' textButton='Сохранить' closePopups={closeAllPopups}>
          <ul className="popup__fields">
                <li>
                  <input type="url" id="linkavatar-input"  name="avatar" className="popup__field popup__field_text_avatar" placeholder = "Ссылка на аватарку" required/>
                  <span className="linkavatar-input-error popup__input-error">Необходимо заполнить данное поле</span>
                </li>
              </ul>
        </PopupWithForm>

        <ImagePopup card={selectedCard} closePopups={closeAllPopups}/>
    </div>
  );
}

export default App;
