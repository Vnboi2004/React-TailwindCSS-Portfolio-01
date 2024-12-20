import React from 'react';

const Navbar = ({ setOpenPage, setConfirmPage, confirmPage }) => {
    const NavLinks = [
        {
            id: 1,
            name: "Home",
            link: "/#",
        },
        {
            id: 2,
            name: "About",
            link: "/#",
        },
        {
            id: 3,
            name: "Application",
            link: "/#",
        },
        {
            id: 4,
            name: "History",
            link: "/#",
        },
    ];

    const handleNavLinkClick = () => {
        // Đóng popup khi người dùng nhấn vào bất kỳ liên kết nào
        setOpenPage(false);
    };

    return (
        <div className='absolute px-6 py-8 w-full'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    {/* Logo section */}
                    <div className='text-3xl font-bold cursor-pointer'>
                        E-<a href="#" className='text-primary'>sheba</a> 
                    </div>
                    {/* Nav links section */}
                    <div className='flex items-center'>
                        <ul className='flex gap-4'>
                            {NavLinks.map((item) => (
                                <li key={item.id} className='inline-block p-3'>
                                    <a 
                                        href={item.link} 
                                        className='text-xl hover:text-primary pb-1 border-b-2 border-transparent hover:border-primary'
                                        onClick={handleNavLinkClick} // Đóng popup khi nhấn vào liên kết
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Login section */}
                    <div className='flex items-center gap-3 text-xl text-primary font-medium'>
                        <button 
                            className={`max-w-[122px] px-6 py-1 border-2 border-primary/50 rounded-full ${confirmPage === 'login' ? 'bg-primary text-white' : ''}`} 
                            onClick={() => {
                                setOpenPage(true);
                                setConfirmPage('login');
                            }}
                        >
                            Log in
                        </button>
                        <button 
                            className={`max-w-[122px] px-6 py-1 border-2 border-primary/50 rounded-full ${confirmPage === 'signup' ? 'bg-primary text-white' : ''}`} 
                            onClick={() => {
                                setOpenPage(true);
                                setConfirmPage('signup');
                            }}
                        >
                            Sign up
                        </button>
                    </div>
                    {/* Menu section */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
