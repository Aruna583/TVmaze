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
              className="px-2 py-2 flex-wrap rounded-full justify-items-center"
            >
              <div className="bg-[#5E17F4] rounded shadow-lg max-w-sm overflow-scroll h-80 m-2 w-80 max-width-sm">
                <div className="flex flex-col">
                 
                  <a href={item.person.url} target="blank">
                    
                    <img
                      className="text-center h-60 w-full rounded"
                      src={item.person.image.medium}
                      alt={item.person.name}
                    />
                  </a>
                  <p className="text-lg px-2 py-2 text-left font-bold text-white">
                    {item.person.name}
                  </p>
                  {/* <p className="text-lg px-2 py-2 text-left font-bold text-white">
                    Birthday: {item.person.birthday}
                  </p> */}
                  <p className="text-lg px-2 py-2 text-left font-bold text-white">
                    Gender: {item.person.gender}
                  </p>
                  <p className="text-sm px-2 py-2 text-left font-bold text-white">
                    url: <a href={item.person.url} target="blank">{item.person.url}</a>
                  </p>
                 
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Person;
