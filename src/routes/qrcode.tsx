import React from "react";

const QrCode = () => {
  return (
    <main className="w-full font-outfit min-h-screen bg-light-gray flex items-center justify-center">
      <article className="bg-white p-5 rounded-xl max-w-[300px] md:max-w-[400px] text-center">
        <img
          src="./image-qr-code.png"
          alt="QR code to frontendmentor.io"
          className="rounded-xl w-full"
        />
        <div className="w-full text-grayish-blue">
          <h1 className="text-dark-blue text-xl md:text-3xl font-bold my-3 md:my-5">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-xs md:text-base my-3 md:my-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </article>
    </main>
  );
};

export default QrCode;
