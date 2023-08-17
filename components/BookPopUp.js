const props = {
  author: "Bill Bryson",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348495562i/42891.jpg", 
  title: "Journeys in English",
  description: "This highly entertaining BBC Radio 4 series is written and presented by Bill Bryson and based on his bestselling book, 'Mother Tongue'. In it he romps through the history of Britain to reveal how English became such an infuriatingly complex – but ultimately world-beating – language. But why English? Why don’t we speak Gallic, or any other of the European languages? According to Bryson, it’s down to the remarkable ability for the English language to assimilate other vocabularies, to adapt and – above all – to survive. From the old English words that are still in everyday use, such as ‘eat’, ‘drink’, ‘man’ and ‘wife’, to the current hybrid language of the 21st century with its many diverse dialects, Bryson, in his unique and ever-affable style, guides us through the development of English into a rich and expressive language. Bryson explains how English has been shaped through invasion and conquest, as well as the rules that brought order to a disorderly language, the million and one ways to have fun with the English language, and the struggle with phrasal verbs (including the way things often get lost in the translation). And finally, he contemplates the future of English. Does Estuary English really Rule OK? '...Worth a listen for anyone who is interested in how we came to have such a rich language' - Sunday Times.",
  published: "2013-05-13T22:00:00.000Z"
}

import { useState } from 'react'

function BookPopUp() {
  const [isOpen, setIsOpen] = useState(true)

  props.published = new Date(props.published).getFullYear()

  function handlePopUp () {
    setIsOpen(!isOpen)
  }

  return (
    <dialog className="overlay" open={isOpen}>
      <div className="overlay__preview">
        <img className="overlay__blur"  src={props.image}/>
        <img className="overlay__image" src={props.image}/>
      </div>
      <div className="overlay__content">
        <h3 className="overlay__title">{props.title}</h3>
        <div className="overlay__data">
          {props.author} ({props.published})
        </div>
          <p className="overlay__data overlay__data_secondary">{props.description}</p>
      </div>
      <div className="overlay__row">
        <button className="overlay__button overlay__button_primary" onClick={handlePopUp}>Close</button>
      </div>
    </dialog>
  )
}

export default BookPopUp