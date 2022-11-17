import React from "react";

const Person = ({ data }) => {
  // const {show}=props;
  console.log(data);

  return (
    <div className="py-3 mx-3 text-center flex flex-row flex-wrap">
      {data.map(
        (item) =>
          item.person.image && (
            <div
              key={item.person.id}
              className="px-2 bg-red flex-wrap text-center"
            >
              <div className="px-2 text-center bg-red-300  flex flex-wrap  h-80 w-60 m-2 rounded">
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-red-500">
                    {item.person.name}
                  </p>
                  <a href={item.person.url} target="blank">
                    
                    <img
                      className="h-60 w-60 "
                      src={item.person.image.medium}
                      alt={item.person.name}
                    />
                  </a>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Person;
