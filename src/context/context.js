import React, { useEffect, useState } from "react";
// import { getDataFromApi } from "../utils/api";
const Context = React.createContext();
export const ContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    "Abdur Razzak Bin Yousuf"
  );
  const [toggleMenu, setToggleMenu] = useState(true);
  useEffect(() => {
    getSelectedCategory(selectedCategory);
  }, [selectedCategory]);
  const getSelectedCategory = (category) => {
    // getDataFromApi(`search/?q=${category}`).then(({ contents }) => {
    //   console.log(contents);
    // });
  };
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        toggleMenu,
        setToggleMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Context;
