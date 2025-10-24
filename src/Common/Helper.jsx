export const Navlist = [{
  name:"HOME",
url:"/"
},
 {name:"About",
  url:"/about"

 }, {name:"Services",
  url:"#services"

 },{ name:"Blog",
  url:"/Blog"
 },
 { name:"FAQs",
  url:"/FAQs"
 }];


export const Heading = ({head ,subhead}) => {
  return (
    <div className="max-w-[898px] m-auto">
      <p className="text-center text-[1.9rem] lg:text-[3rem]">{head}</p>
      <p className="md:leading-7 text-center text-sm lg:text-[18px] md:mt-[18px]">{subhead}</p>
    </div>
  );
};

export const Button =({text})=>{
  return (
    <div className="max-w-[1249px] m-auto flex justify-center pt-[20px]">
      <button className="cursor-pointer bg-orange-500 py-[10px] px-[20px] lg:py-[17px] lg:px-[50px] rounded-xl max-w-fit text-white m-auto font-semibold">
        {text}
      </button>
    </div>
  );
}






