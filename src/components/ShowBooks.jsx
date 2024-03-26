import { useLoaderData } from "react-router-dom";
import ShowBook from "./ShowBook";

const ShowBooks = () => {
    const books = useLoaderData();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {books.map((book)=>(
                <ShowBook 
                key={book.id}
                book={book}
                ></ShowBook>
            ))}
        </div>
    );
};

export default ShowBooks;