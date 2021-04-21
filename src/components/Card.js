function Card({card, onCardClick}) {
    return(
      <article className="card">
        {/* <button type = "button" className = "button button_action_delete" aria-label="удалить"></button> */}
        <div className="card__image"  style={{ backgroundImage: `url(${card.link})`}} onClick={() => onCardClick(card)} />
        <div className="card__group">
          <h2 className="card__text">{card.name}</h2>
          <div className="card__like-group">
            <button type="button" className="button button_action_like" aria-label="поставить лайк"></button>
            <h3 className="card__likes">{card.likes.length}</h3>
          </div>
        </div>
      </article>
    )
  }
    
  export default Card;