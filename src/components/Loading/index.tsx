import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="container pt-5 pb-5 d-flex align-center justify-content-center">
      <Image src="/image/loading.gif" alt="Loader" width="150" height="100" />
    </div>
  );
};

export default Loading;
