
import { useState } from 'react';
function BookPopUp(props) {
  const { book, closeModal, isOpen } = props


  const [overlayed, setOverlayed] = useState('')

  if (isOpen && overlayed !== 'overlay__background') {
    setOverlayed('overlay__background')
  } 

  if (!isOpen && overlayed === 'overlay__background') {
    setOverlayed('')
  }
  
  const year = new Date(book.published).getFullYear()

  const bookWithPublished = {...book, published: year}

  function handlePopUp () {
    closeModal()
  }

  return (
    <div className={overlayed}>
      <dialog className="overlay" open={isOpen}>
        <div className="overlay__preview">
          <img className="overlay__blur"  src={bookWithPublished.image}/>
          <img className="overlay__image" src={bookWithPublished.image}/>
        </div>
        <div className="overlay__content">
          <h3 className="overlay__title">{bookWithPublished.title}</h3>
          <div className="overlay__data">
            {bookWithPublished.author} ({bookWithPublished.published})
          </div>
            <p className="overlay__data overlay__data_secondary">{bookWithPublished.description}</p>
        </div>
        <div className="overlay__row">
          <button className="overlay__button overlay__button_primary" onClick={handlePopUp}>Close</button>
        </div>
      </dialog>
    </div>
  )
}

export default BookPopUp