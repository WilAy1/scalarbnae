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
        <div className='bg-[#FCFCFC] w-full md:rounded-[20px] md:px-[24px] md:py-[23.5px] lg:rounded-[1.389vw] lg:px-[1.667vw] lg:py-[1.632vw] font-satoshi'>
        <div className='w-full h-full flex items-center justify-between'>
          <div className='uppercase text-[1.736vw]'><span className="italic font-[300]">Gideon</span><span className='font-medium'> oladimeji</span></div>
          <div className='flex items-center gap-[1.667vw] uppercase text-[1.042vw] font-[300]'>
            {
                HEADER_LINKS.map((header, key)=>{
                    return (
                        <a href={header.link} key={key} target="_blank" rel="noreferrer">{header.title}</a>
                    );
                })
            }
          </div>
        </div>
      </div>
    );
}


export default Header;
