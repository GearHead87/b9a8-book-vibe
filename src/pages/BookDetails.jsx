// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { saveReadbook, saveWishlistBook } from "../utils";

const BookDetails = () => {
    const { id } = useParams();
    const books = useLoaderData();

    const book = books.find((book) => parseInt(id) === book.bookId)

    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;

    console.log(parseInt(id), book);

    return (
        <div>
            <section className="">
                <div className="container grid grid-cols-2">
                    <div>
                        <img src={image} alt="book image" className="w-full" />
                    </div>
                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                        <h2 className="text-3xl font-semibold leading-none">{bookName} </h2>
                        <p className="mt-2 mb-8 text-sm font-semibold">by : {author}</p>
                        <hr></hr>
                        <p>{category}</p>
                        <hr></hr>
                        <p><span className="font-bold">Review: </span>{review}</p>
                        <div className="flex items-center gap-4">
                        <p className="font-bold">Tag </p>
                        {tags.map((tag, index)=>(
                            <span key={index}  className="bg-vibe-btn-primary bg-opacity-5 text-vibe-btn-primary rounded-xl p-1">#{tag}</span>
                        ))}
                        </div>
                        <div>
                            <p>Number of Pages: <span className="font-bold">{totalPages} </span></p>
                            <p>Publisher: <span className="font-bold">{publisher} </span></p>
                            <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span>  </p>
                            <p>Rating: <span className="font-bold">{rating} </span></p>
                        </div>
                        <div className="space-x-4">
                        <button onClick={()=> saveReadbook(book)} className="btn px-8 py-3 text-lg font-medium border-2 rounded bg-white">Read</button>
                        <button onClick={()=> saveWishlistBook(book)} className="btn px-8 py-3 text-lg font-medium rounded bg-vibe-btn-secondary text-white">Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookDetails;