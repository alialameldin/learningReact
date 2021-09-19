import React from "react";

const Book = (props) => {
    // console.log(props)
    // destructuring
    const { img, title, author } = props;

    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        return alert("hello world");
    };
    const hard = (author) => {
        console.log(author);
    };

    return (
        <article className="book" onMouseOver={() => console.log(title)}>
            <img src={img} alt="" />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                example
            </button>
            <button type="button" onClick={() => hard(author)}>
                Hard
            </button>
        </article>
    );
};

export default Book;
