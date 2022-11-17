import React from "react";
import { useState } from "react";
import axios from "axios";
import Show from "./Show";
import Person from "./Person";

const Tvmaze = () => {
  const [values, setInputValues] = useState("typing");
  const [dataValues, setDataValues] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    // if (values === "shows") {
    //   const url = `https://api.tvmaze.com/search/shows?q=${searchInput}`;
    //   const { data } = await axios.get(url);
    //   console.log(data);
    //   //  console.log(typeof(data))
    //   setDataValues(data);
    // } else if (values === "people") {
    //   const url = `https://api.tvmaze.com/search/people?q=${searchInput}`;
    //   const { data } = await axios.get(url);
    //   console.log(data);
    //   setDataValues(data);
    //   // console.log(typeof(dataValues))
    // }

    const url = `https://api.tvmaze.com/search/${values}?q=${searchInput}`;
    const { data } = await axios.get(url);
    setDataValues(data);
    console.log(data);
    console.log(typeof data);
  };

  // let holder = "";

  // if (values === "shows") {
  //   holder = "Search by Show name";
  // } else if (values === "people") {
  //   holder = "Search by Actor name";
  // }

  return (
    <div className="text-center">
      <div className="bg-gray-500  to-indigo-400 h-30">
        <h1 className="text-3xl font-bold text-white py-2">Tvmaze</h1>
      </div>
      <form onSubmit={onSubmitForm}>
        <div className="bg-gray-500 h-28 flex flex-row justify-center">
          <div className="mr-3 mt-3">
            <input
              type="radio"
              name="radioButton"
              htmlFor="actor"
              onChange={() => {
                setDataValues("");
                setInputValues("people");
              }}
            />
            <span>
              <label id="actor" className="text-white font-bold ">
                byActors
              </label>
            </span>
          </div>
          <div className="mr-3 mt-3">
            <input
              type="radio"
              name="radioButton"
              htmlFor="show"
              onChange={() => {
                setDataValues("");
                setInputValues("shows");
              }}
            />
            <span>
              <label id="show" className="text-white font-bold ">
                byShows
              </label>
            </span>
          </div>
        </div>

        <div>
          {values && (
            <div className="bg-gray-500 py-2">
              <input
                className="h-10 shadow-xl border-3 border-solid border-black rounded"
                type="search"
                placeholder={`Search by ${values}`}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          )}
        </div>
      </form>
      
      {values === "shows" && dataValues.length > 0 && (
        <Show data={dataValues} />
      )}

      {values === "people" && dataValues.length > 0 && (
        <Person data={dataValues} />
      )}
     

    </div>
  );
};

export default Tvmaze;
