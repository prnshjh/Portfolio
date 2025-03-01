import React from "react";
import GitHubCalendar from "react-github-calendar";

const Contributions = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>Contributions</h2>
        <div className="flex justify-center">
        <GitHubCalendar
          username="prnshjh"
          className="max-w-full mb-3"
        />
      </div>
    </div>
  );
};

export default Contributions;
