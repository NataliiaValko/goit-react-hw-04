import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = query.trim();
    if (!inputValue) {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(inputValue);
    setQuery("");
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <header>
        <form className={css.style_form} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
          <button className={css.btn_search} type="submit">
            Search
          </button>
        </form>
      </header>
    </>
  );
};
