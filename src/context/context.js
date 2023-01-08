import React, { useEffect, useState } from "react";
import { getDataFromApi } from "../utils/api";
const Context = React.createContext();
export const ContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    "Abdur Razzak Bin Yousuf"
  );
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    getSelectedCategory(selectedCategory);
  }, [selectedCategory]);
  const getSelectedCategory = (category) => {
    getDataFromApi(`search/?q=${category}`).then(({ contents }) => {
      console.log(contents);
    });
  };
  return (
    <Context.Provider
      value={
        (loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu)
      }
    >
      {props.children}
    </Context.Provider>
  );
};
export default Context;
