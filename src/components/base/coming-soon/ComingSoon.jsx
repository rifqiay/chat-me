import React, { useState } from "react";

const ComingSoon = ({ children, header, className }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>{children}</button>
      {show && (
        <div className="fixed inset-0  flex justify-center h-screen items-center">
          <div className={className}>
            <p
              className="bg-red-600 text-white absolute px-1 rounded-full -top-3 -right-3 text-xs cursor-pointer transition-all"
              onClick={() => setShow(false)}
            >
              x
            </p>
            <div>
              <p>{header}</p>
            </div>
            <div>
              <p>Coming soon :)</p>
            </div>
            {/* <div>footer</div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ComingSoon;
