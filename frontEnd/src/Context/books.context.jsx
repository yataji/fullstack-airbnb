import { createContext, useContext, useState } from "react";

// const defaultContext = {
//     bookName: '',
//     setBookName: () => {},
//     authorName: '',
//     setAuthorName: () => {},
//     loading:  "false"
// };

const bookContext = createContext();

export const BookUseContext = ({ children }) => {
    const [listBook, setBookList] = useState([]);
    // const [authorName, setAuthorName] = useState('');
    // const [loading, setLoading] = useState(false);

    return (
        <bookContext.Provider value={{ 
            listBook,
            setBookList
        }}>
            {children}
        </bookContext.Provider>
    );
};

export const UseBookContext = () => {
    const context = useContext(bookContext);
    if (!context) {
        throw new Error('useBookContext must be used within a BookUseContext provider');
    }
    return context;
};