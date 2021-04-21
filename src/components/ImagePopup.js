function ImagePopup({card, closePopups}) {
     return(
       <article className={card ? `popup popup_type_preview popup_opened` : `popup popup_type_preview`}>
         <div className="popup__container-preview">
           <figure className="popup__figure">
             <img className="popup__image" alt = {card ? card.name : null} src = {card ? card.link : null} />
             <figcaption className="popup__caption">{card ? card.name : null}</figcaption>
           </figure>
           <button type="button" className="button button_action_close button_action_close-preview" aria-label="закрыть" onClick={closePopups}></button>
         </div>
       </article>
     )
  }
    
  export default ImagePopup;