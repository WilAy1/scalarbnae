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
        title: "MEDIUM",
        link: ""
    }
]

const Header = ()=>{
    return (
        <div className='bg-[#FCFCFC] w-full rounded-[20px] px-[1.667vw] py-[2.882vw] font-satoshi'>
        <div className='w-full h-full flex items-center justify-between'>
          <div className='uppercase text-[1.736vw]'><span className="italic font-[300]">Gideon</span><span className='font-medium'> oladimeji</span></div>
          <div className='flex items-center gap-[1.667vw] uppercase'>
            {
                HEADER_LINKS.map((header, key)=>{
                    return (
                        <div className="" key={key}>{header.title}</div>
                    );
                })
            }
          </div>
        </div>
      </div>
    );
}


export default Header;
