import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/state";
import { fetchWeather } from "../../state/weatherDataSlice/weatherDataSlice";
import { ISearchProps } from "./Search.props";
import "./Search.scss";

const Search: React.FunctionComponent<ISearchProps> = ({
  query,
  setQuery,
}: ISearchProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} role="search">
      <div className="searchInput">
        <input
          type="text"
          value={query}
          placeholder="Another location"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <button
        onClick={() => {
          dispatch(fetchWeather(query));
        }}
      >
        <img src={`../src/assets/search-icon.svg`} alt="search icon" />
      </button>
    </form>
  );
};

export default Search;
