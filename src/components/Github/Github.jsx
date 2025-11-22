// import React, { useEffect, useState } from "react";


// function Github() {
  
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch("https://api.github.com/users/Priyanshu1119")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

//   return (
//     <div className="text-center m-5 bg-black text-white p-5 text-3xl">
//       Github Followers: {data.followers} <br />
//       Github Repositories: {data.public_repos} <br />

//       <img src={data.avatar_url} alt="Git picture" width={200} />
//       <button></button>
//     </div>
//   );
// }

// export default Github;


import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/Priyanshu1119")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-5 bg-black text-white p-5 text-3xl">
      Github Followers: {data.followers} <br />
      Github Repositories: {data.public_repos} <br />

      <img src={data.avatar_url} alt="Git picture" width={200} className="mx-auto my-4" />

      {/* GitHub Button */}
      <a
        href="https://github.com/Priyanshu1119"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white text-xl rounded-lg transition"
      >
        Visit GitHub Profile
      </a>
    </div>
  );
}

export default Github;

