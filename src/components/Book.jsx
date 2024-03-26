import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="grid grid-cols-5">
            <div>
                <img src={image} alt="book image" />
            </div>
            <div className="col-span-4">
                <h1>{bookName}</h1>
                <p>by : {author}</p>
                <div className="flex items-center gap-4">
                    <p className="font-bold">Tag </p>
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-vibe-btn-primary bg-opacity-5 text-vibe-btn-primary rounded-xl p-1">#{tag}</span>
                    ))}
                    <div className="flex items-center gap-4">
                        <CiLocationOn></CiLocationOn>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <IoPeopleOutline></IoPeopleOutline>
                    <p>Publisher: {publisher}</p>
                    <IoPeopleOutline></IoPeopleOutline>
                    <p>Page {totalPages}</p>
                </div>
                <hr></hr>
                <div className="flex gap-5">
                    <p className="px-4 py-2 text-lg rounded-2xl bg-[#328EFF0F] text-[#328EFF]">Category: {category}</p>
                    <p className="px-4 py-2 text-lg rounded-2xl bg-[#FFAC330F] text-[#FFAC33]">Rating: {rating}</p>
                    <NavLink to={`/book/${bookId}`} className="btn px-4 py-2 text-lg font-medium rounded-3xl bg-vibe-btn-primary text-white">
                        View Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Book;