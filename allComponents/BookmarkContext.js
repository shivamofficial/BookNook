
import React, { createContext, useContext, useState, useMemo } from 'react';

const BookmarkContext = createContext();



export const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarkContext must be used within a BookmarkProvider');
  }
  return context;
};



export const BookmarkProvider = ({ children }) => {
  const [bookmarkedLibraries, setBookmarkedLibraries] = useState([]);

  const value = useMemo(() => ({ bookmarkedLibraries, setBookmarkedLibraries }), [
    bookmarkedLibraries,
  ]);

  return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>;
};
