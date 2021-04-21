import React from 'react';
import {api} from '../utils/Api.js'
import Card from './Card'
function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards.reverse());
      })
      .catch(() => console.log(`Ошибка загрузки данных`));
  }, []);

    return(
      <main className="content page__content">
        <section className="profile content__profile">
          <div style={{ backgroundImage: `url(${userAvatar})`}} onClick={props.onEditAvatar} className="profile__avatar" />
          <div className="profile__info">
            <div className="profile__group">
              <h1 className="profile__name">{userName}</h1>
              <button onClick={props.onEditProfile} type="button" className="button button_action_edit" aria-label="редактировать профиль"></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
          <button type="button" onClick={props.onAddPlace} className="button button_action_add" aria-label="добавить"></button>
        </section>
        <section className="cards content__cards"> 
           {cards.map((card, i) => <Card  key={card._id} card={card}
                                          onCardClick={props.onCardClick}/>
                                )}       
        </section>
      </main>
    )
  }
    
  export default Main;