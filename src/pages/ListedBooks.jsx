import { Link, Outlet } from "react-router-dom";
import { getReadBooks, getWishlistBooks, saveBooks } from "../utils";
import { createContext, useEffect, useState } from "react";

export const ReadBooksContext = createContext([]);
export const WishlistBooksContext = createContext([]);

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const readBooks = getReadBooks();
    const wishlistBooks = getWishlistBooks();
    const [displayReadBooks, setDisplayReadBooks] = useState([]);
    const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);

    const handleSortBy = option => {
        if (option === 1) {
            const sortedReadBooks = displayReadBooks.sort((book1, book2) => book2.rating - book1.rating);
            const sortedWishlistBooks = displayWishlistBooks.sort((book1, book2) => book2.rating - book1.rating);
            setDisplayReadBooks(sortedReadBooks);
            setDisplayWishlistBooks(sortedWishlistBooks);
            saveBooks('ReadBooks', sortedReadBooks);
            saveBooks('WishlistBooks', sortedWishlistBooks);
        }
        else if (option === 2) {
            const sortedReadBooks = displayReadBooks.sort((book1, book2) => book2.totalPages - book1.totalPages);
            const sortedWishlistBooks = displayWishlistBooks.sort((book1, book2) => book2.totalPages - book1.totalPages);
            setDisplayReadBooks(sortedReadBooks);
            setDisplayWishlistBooks(sortedWishlistBooks);
            saveBooks('ReadBooks', sortedReadBooks);
            saveBooks('WishlistBooks', sortedWishlistBooks);
        }
        else if (option === 3) {
            const sortedReadBooks = displayReadBooks.sort((book1, book2) => book2.yearOfPublishing - book1.yearOfPublishing);
            const sortedWishlistBooks = displayWishlistBooks.sort((book1, book2) => book2.yearOfPublishing - book1.yearOfPublishing);
            setDisplayReadBooks(sortedReadBooks);
            setDisplayWishlistBooks(sortedWishlistBooks);
            saveBooks('ReadBooks', sortedReadBooks);
            saveBooks('WishlistBooks', sortedWishlistBooks);
        }
    }
    useEffect(() => {
        setDisplayReadBooks(readBooks);
        setDisplayWishlistBooks(wishlistBooks);
    }, [readBooks, wishlistBooks]);

    // console.log(displayReadBooks);

    return (
        <div className="space-y-10">
            <h1 className="bg-[#1313130D] font-bold text-2xl text-center py-8 rounded-lg">Books</h1>
            {/* SortBy */}
            <div className="flex items-center justify-center">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortBy(1)}><a>Rating</a></li>
                        <li onClick={() => handleSortBy(2)}><a>Number of pages</a></li>
                        <li onClick={() => handleSortBy(3)}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            {/* NavLink */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap ">
                <Link to={''} onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#"
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-gray-400 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link to={'Wishlist'} onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-gray-400 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <ReadBooksContext.Provider value={displayReadBooks}>
                <WishlistBooksContext.Provider value={displayWishlistBooks}>
                    <Outlet></Outlet>
                </WishlistBooksContext.Provider>
            </ReadBooksContext.Provider>
        </div>
    );
};

export default ListedBooks;