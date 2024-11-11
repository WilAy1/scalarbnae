import { useState } from "react";

const HEADER_LINKS = [
    {
        title: "Linkedin",
        link: ""
    },
    {
        title: "Youtube",
        link: ""
    },
    {
        title: "Soundcloud",
        link: ""
    },
    {
        title: "Instagram",
        link: ""
    },
    {
        title: "Medium",
        link: ""
    }
]

const Header = ()=>{
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className='bg-[#FCFCFC] w-full rounded-[20px] px-[24px] py-[23.5px] lg:rounded-[1.389vw] lg:px-[1.667vw] lg:py-[1.632vw] font-satoshi'>
        <div className='w-full h-full flex items-center justify-between'>
          <div className='uppercase text-[18px] md:text-[22px] lg:text-[1.736vw]'><span className="italic font-[300]">Gideon</span><span className='font-medium'> oladimeji</span></div>
          <div className='hidden md:flex items-center md:gap-[16px] lg:gap-[1.667vw] uppercase md:text-[15px] lg:text-[1.042vw] font-[300]'>
            {
                HEADER_LINKS.map((header, key)=>{
                    return (
                        <a href={header.link} key={key} target="_blank" rel="noreferrer">{header.title}</a>
                    );
                })
            }
          </div>
          <div className="md:hidden block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3H4C3.44772 3 3 3.44772 3 4V11C3 11.5523 3.44772 12 4 12H9C9.55228 12 10 11.5523 10 11V4C10 3.44772 9.55228 3 9 3Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 3H15C14.4477 3 14 3.44772 14 4V7C14 7.55228 14.4477 8 15 8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 12H15C14.4477 12 14 12.4477 14 13V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V13C21 12.4477 20.5523 12 20 12Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V17C10 16.4477 9.55228 16 9 16Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        {showMenu && <Menu menuController={setShowMenu} />}
      </div>
    );
}

const Menu = ({menuController}) => {
    return (
        <div className="md:hidden fixed h-full w-full z-10 left-0 top-0 bg-[#2B50AA]">
            <div className="p-[24px] h-full flex flex-col gap-[58px]">
                <div className='bg-[#FCFCFC] w-full rounded-[20px] px-[24px] py-[23.5px] font-satoshi'>
                    <div className="flex items-center justify-between">
                        <div className="uppercase text-[18px]">Menu</div>
                        <div className="p-1" onClick={()=>menuController(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                    </div>
                </div>
                <div className='h-full flex items-center flex-col text-[24px] text-white font-[400] gap-[58px]'>
                    {
                        HEADER_LINKS.map((header, key)=>{
                            return (
                                <a href={header.link} key={key} target="_blank" rel="noreferrer" className="capitalize">{header.title}</a>
                            );
                        })
                    }
                </div>
             </div>
        </div>
    );
}

export default Header;
