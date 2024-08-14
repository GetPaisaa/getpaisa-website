import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
      <div className="h-32 w-32 animate-bounce">
      <img src="/images1/logo/logo.svg"/>
      </div>
    </div>
  );
};

export default PreLoader;