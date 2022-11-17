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
              className="px-2 py-2 flex-wrap rounded-full justify-items-center"
            >
              <div className="bg-[#5E17F4] rounded shadow-lg max-w-sm overflow-scroll h-80 m-2 w-80 max-width-sm">
                <div className="flex flex-col">
                  
                  <a href={item.show.url} target="blank">
                    <img
                      className="text-center h-60 w-full rounded"
                      src={item.show.image.medium}
                      alt={item.show.name}
                    />
                  </a>
                  <p className="text-lg m-3 font-bold  text-left text-white ">
                    {item.show.name}
                  </p>
                  <div className="text-white text-base text-left  font-bold font-normal m-2">{item.show.summary}</div>

                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Show;
