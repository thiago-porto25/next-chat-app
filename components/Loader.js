import React from 'react';

export default function Loader() {
  return (
    <>
      <div className="loader-container">
        <div className="loader" />
      </div>
      <style jsx>
        {`
          .loader-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .loader {
            border: 2px solid #f3f3f3; /* Light grey */
            border-top: 2px solid #333; /* Blue */
            border-radius: 50%;
            width: 12px;
            height: 12px;
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
}
