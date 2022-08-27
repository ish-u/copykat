import React, { useState } from "react";

const FAQAccordion = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { Q, A } = data;

  return (
    <div className="w-[52.5%] mb-2 border bg-[#303030] border-[#303030] hover:cursor-pointer">
      <div className="flex items-center py-2 px-7">
        <span className="text-2xl grow">{Q}</span>
        <span
          onClick={() => {
            setOpen(!open);
          }}
          className="material-icons text-4xl"
        >
          {!open ? "add" : "close"}
        </span>
      </div>
      {open && (
        <div className="text-2xl border-t-2 border-black mt-2 py-4 px-7">
          {A.map((a, idx) => {
            return (
              <div key={idx} className="mb-4">
                {a}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;
