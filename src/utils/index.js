import toast from 'react-hot-toast'

export const getReadBooks = () => {
    let books = []
    const storedReadBooks = localStorage.getItem('ReadBooks');
    if (storedReadBooks) {
        books = JSON.parse(storedReadBooks);
    }
    return books;
}

export const getWishlistBooks = () => {
    let books = []
    const storedWishlistBooks = localStorage.getItem('WishlistBooks');
    if (storedWishlistBooks) {
        books = JSON.parse(storedWishlistBooks);
    }
    return books;
}

export const saveReadbook = book => {
    let books = getReadBooks()
    const isExist = books.find(b => b.bookId === book.bookId)
    if (isExist) {
        return toast.error('Already Read This Book!')
    }
    books.push(book)
    localStorage.setItem('ReadBooks', JSON.stringify(books));
    toast.success('Book Added to Read Book List Successfully!');
}

export const saveWishlistBook = book => {
    let books = getWishlistBooks();
    let readBooks = getReadBooks();
    const isWishlistExist = books.find(b => b.bookId === book.bookId)
    const isReadBookExist = readBooks.find(b => b.bookId === book.bookId)

    if (isReadBookExist) {
        return toast.error('You Already Read This Book!');
    }
    else if(isWishlistExist){
        return toast.error('You Already Added This Book to Your Wishlist!');
    }

    books.push(book);
    localStorage.setItem('WishlistBooks', JSON.stringify(books));
    toast.success('Book Added to the Wishlist Successfully!');
}


// export const deletebook = id => {
//     let books = getBooks()
//     const remaining = books.filter(b => b.id !== id)
//     localStorage.setItem('books', JSON.stringify(remaining))
//     toast.success('Blog Removed from Bookmark!')
// }
