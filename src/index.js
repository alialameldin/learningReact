import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {data} from './books'
import Book from './Book'

function BookList () {
  return (
    <section className = "booklist">
      {data.map((book) => {
        return (
            <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  )
}


ReactDOM.render(<BookList/>, document.getElementById('root'))












/*
- elcomponent hena momkin yikon function aw class
- 3mlt el7araka bta3et elobject w props deh 34an 2a2ol eni elktab elli lih sefat mo3ayana teteb3 3ando welketab elli ma3andosh mayeteb3losh

- const names = ['ali','omar','shero']
const newNames = names.map((name) => {
  return <h1> {name} </h1>
})
console.log(newNames)
function BookList () {
  return (
    <section className = "booklist">
      {newNames}
    </section>
  )
}

- spread array of objects << books >> like that {...book} 34an a5od elarray of objects deh zay ma hia mn8er ma7tag a3ml book={book}
  w lma aro7 lil props 2a2ol props.book, la lw 3ml elspread mesh ha7tag kol dah 34an elarray of objects hattb3t zay ma hia

- hasta5dem elarrow function 34an elaction mayetnafez4 ela lma ados 3la elzorar zay kda: 
    <h1 onClick = {() => console.log(title)}>{title}</h1> , w nfs el7war lma bandah 3la function mn8er aqwas zay kda: 
    <button type = 'button' onClick = {clickHandler}>, 
    tab lw modatar a3ml () 34an lazem ab3at lilfunction deh parameters w mesh 3ayezha ttnafez 3latool yeb2a 5aliha arrow function

- events:
  const Book = (props) => {
    // console.log(props)
    // destructuring
    const {img, title, author} = props

    const clickHandler = (e) => {
      console.log(e)
      console.log(e.target)
      return alert('hello world')
    }
    const hard = (author) => {
      console.log(author)
    }

    return (
      <article className = "book" onMouseOver = {() => console.log(title)}>
        <img src = {img} alt = ''/>
        <h1 onClick = {() => console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type = 'button' onClick = {clickHandler}>
          example
        </button>
        <button type = 'button' onClick = { () => hard(author)}>
          Hard
        </button>
      </article>
    )
  }    

*/ 