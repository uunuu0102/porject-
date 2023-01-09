export default function Profile() {
  const profile = {
    fullname: "C.Өнөрмаа",
    title: "Програмист",
    title2: "Мэдээлэл технологийн төв",
  };

  const profile2 = [
    { name: "HTML", img: "OIP (2).jfif" },
    { name: "SQL", img: "oracle_sql.png" },
    { name: "Office 365", img: "R.png" },
  ];

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center gap-8 bg-[url(/subtle-prism.svg)]">
        <div className="cart">
          <div className="w-1/2 h-full flex flex-col items-end justify-center">
            <div className="flex flex-col items-center w-80">
              <div className="border-slate-50/40 border-2 hover:shadow-lg hover:shadow-pink-400 bg-slate-50 bg-opacity-100 backdrop-blur-md  mt-5  w-40 h-40 rounded-full items-center justify-center flex">
                <img
                  src="dribbble_girl.gif"
                  className=" w-32 h-32  rounded-full hover:scale-125 hover:cursor-pointer animate-pulse "
                />
                {/* <div className=" w-32 h-32  rounded-full bg-slate-400 animate-pulse"></div> */}
              </div>
              <div className="text-sm text-slate-300 dark:text-gray-400">
                {profile.fullname}
              </div>
              <div className="text-sm text-slate-300 dark:text-gray-400">
                {profile.title}
              </div>
              <div className="text-sm  text-slate-300 dark:text-gray-400">
                {profile.title2}
              </div>

              <a
                href="http://localhost:3000/page"
                className="w-full h-өглл flex justify-center gap-1 mt-10"
              >
                <button className="bg-slate-50 bg-opacity-20 backdrop-blur-md rounded text-slate-50 w-[40%] py-1 hover:bg-sky-800 ">
                  Дэлгэрэнгүй
                </button>
              </a>
            </div>
          </div>

          <div className="w-1/2 h-full flex items-end pr-10 justify-center gap-2 flex-col">
            {profile2.map((row, i) => (
              <div className="relative " key={i}>
                <div className=" absolute h-[1px] w-20 -left-20 top-10 bg-slate-50  rounded-full ">
                  <div className=" text-sm text-slate-50">{row.name}</div>
                </div>

                <img
                  className=" w-28 h-20 rounded-xl hover:scale-125 hover:cursor-pointer"
                  src={row.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className=" absolute z-30 w-[1px] h-10 bg-slate-50  rounded-full top-2"></div> */
}
