import React from "react";

const Show = ({ data }) => {
  // const {show}=props;
  console.log(data);

  return (
    <div className="py-3 mx-3 text-center flex flex-row flex-wrap">
      {data.map(
        (item) =>
          item.show.image && (
            <div
              key={item.show.id}
              className="px-2 bg-red flex-wrap text-center"
            >
              <div className="bg-red-300 h-80 m-2 w-60 ">
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-red-500">
                    {item.show.name}
                  </p>
                  <a href={item.show.url} target="blank">
                    <img
                      className="mx-3 text-center h-60 w-40 rounded"
                      src={item.show.image.medium}
                      alt={item.show.name}
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

export default Show;
