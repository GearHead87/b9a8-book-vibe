
import { Link, Outlet } from "react-router-dom";
import { getReadBooks, getWishlistBooks } from "../utils";
import { createContext, useState } from "react";

export const ReadBooksContext = createContext([]);
export const WishlistBooksContext = createContext([]);

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const readBooks = getReadBooks();
    const wishlistBooks = getWishlistBooks();

    
    const handleSortBy = option => {
        readBooks.sort((book)=> book.rating);
        console.log(option);
    }

    return (
        <div className="space-y-10">
            <h1 className="bg-[#1313130D] font-bold text-2xl text-center py-8 rounded-lg">Books</h1>
            {/* SortBy */}
            <div className="flex items-center justify-center">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Sort By</option>
                    <option onClick={() => handleSortBy(1)} >Rating</option>
                    <option onClick={() => handleSortBy(2)} >Number of pages</option>
                    <option onClick={() => handleSortBy(3)} >Publisher year</option>
                </select>
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
            <ReadBooksContext.Provider value={readBooks}>
                <WishlistBooksContext.Provider value={wishlistBooks}>
                    <Outlet></Outlet>
                </WishlistBooksContext.Provider>
            </ReadBooksContext.Provider>
        </div>
    );
};

export default ListedBooks;