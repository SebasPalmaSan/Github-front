import SunIcons from '@/components/icons/SunIcons';
const Navbar = () => {
  return (
    <header className='flex items-center space-x-2 mb-10'>
        <h1 className=' flex-grow text-3xl font-bold text-white'>devfinder</h1>
        
            <span className="uppercase text-white">Light</span>
            <button>
                <SunIcons 
                className='fill-white'
                width={25}
                />
            </button>
        
    </header>
  )
}

export default Navbar