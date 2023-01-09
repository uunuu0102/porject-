export default function Profile() {
  return (
    <>
      <div className="h-screen w-screen bg-indigo-900 flex items-center justify-center gap-8 relative">
        {/* <img
          className="absolute w-screen h-screen -z-10 object-cover bg-orange-300 left-0 top-0"
          src="background.jpg"
        /> */}
        <div className="absolute z-0 w-24 h-24 rounded-full bg-gradient-to-tr from-orange-600 to-orange-300 top-[30%] left-[45%]"></div>
        <div className="absolute z-0 w-24 h-24 rounded-full bg-gradient-to-tr from-lime-300 to-cyan-300 top-[50%] left-[50%]"></div>
        <svg
          className="absolute left-[4%] top-[50%] w-28 h-28"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="50%" stop-color="darkorange" />
              <stop offset="95%" stop-color="red" />
            </linearGradient>
          </defs>
          <polygon fill="url(#gradient)" points="0 0 10 0 0 10" />
        </svg>

        {/* First profile cart */}
        <div className="z-10 w-56 h-72 bg-slate-50 bg-opacity-20 backdrop-blur-md rounded-lg flex flex-col items-center border border-slate-50/40">
          <div className="border-slate-50/40 border-2 bg-slate-50 bg-opacity-50 backdrop-blur-md w-20 h-20 rounded-full mt-4 items-center justify-center flex">
            <img src="women.jfif" className=" w-16 h-16 rounded-full" />
          </div>
          <h1 className=" font-bold text-slate-50">Uguumur O.</h1>
          <div className=" text-sm text-slate-50">Teacher</div>
          <div className="w-full flex justify-center gap-1 mt-6">
            <div className="w-8 h-8 rounded-full bg-slate-20 bg-opacity-50 backdrop-blur-md border-slate-50 border flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-slate-50"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0zm.75-10.5a.75.75 0 000 1.5h1.599l-2.223 3.334A.75.75 0 0010.5 13.5h3a.75.75 0 000-1.5h-1.599l2.223-3.334A.75.75 0 0013.5 7.5h-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-20 bg-opacity-50 backdrop-blur-md flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-slate-50"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-20 bg-opacity-50 backdrop-blur-md flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-slate-50"
              >
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-20 bg-opacity-50 backdrop-blur-md flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-slate-50"
              >
                <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                <path
                  fillRule="evenodd"
                  d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-20 bg-opacity-50 backdrop-blur-md flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-slate-50"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-full flex justify-center gap-1 mt-8">
            <button className="bg-slate-50 bg-opacity-20 backdrop-blur-md rounded text-slate-50 w-[40%] py-1">
              Message
            </button>
            <button className="bg-slate-50 bg-opacity-20 backdrop-blur-md rounded text-slate-50 w-[40%] py-1">
              Subscribe
            </button>
          </div>
        </div>

        {/* Second profile cart */}
        <div className="z-10 w-56 h-72 bg-slate-50 bg-opacity-20 backdrop-blur-md rounded-lg flex flex-col items-center border border-slate-50/40">
          <div className="border-slate-50/40 border-2 bg-slate-50 bg-opacity-50 backdrop-blur-md w-20 h-20 rounded-full mt-4 items-center justify-center flex">
            <img src="women.jfif" className=" w-16 h-16 rounded-full" />
          </div>
          <h1 className=" font-bold text-slate-50">Uguumur O.</h1>
          <div className=" text-sm text-slate-50">Teacher</div>

          <button className="text-slate-50 text-sm backdrop-blur-md border border-slate-50/20 mt-8 w-40 h-12 rounded">
            View Profile
          </button>
          <div className=" relative w-full h-full flex justify-center mt-12">
            <button className="  bg-slate-50 text-sm bg-opacity-20 backdrop-blur-md  text-slate-50 w-1/2 py-1">
              95% <div> Rating</div>
            </button>
            <button className="bg-slate-50 text-sm bg-opacity-20 backdrop-blur-md  text-slate-50 w-1/2 py-1">
              92%<div> Activity</div>
            </button>
            <div className=" absolute z-30 w-[1px] h-10 bg-slate-50  rounded-full top-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
