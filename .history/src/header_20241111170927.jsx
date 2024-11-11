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
        <div className='bg-[#FCFCFC] w-full rounded-[20px] px-[1.667vw] py-[2.882vw]'>
        <div className='w-full h-full flex items-center justify-between'>
          <div className=''><span>Gideon</span><span className=''> oladimeji</span></div>
          <div className='flex items-center gap-[1.667vw]'>
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