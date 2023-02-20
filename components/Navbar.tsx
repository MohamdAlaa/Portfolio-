import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

const Navbar = () => {

    const [activeItem, setactiveItem] = useState('');
    const {pathname} = useRouter();

    useEffect(()=> {
        if (pathname === '/') setactiveItem('About')
        if (pathname === '/projects') setactiveItem('Projects')
        if (pathname === '/reusme') setactiveItem('Reusme')

    },[])

    return(
        <div className='flex items-center justify-between px-5 py-3 my-3'>
            <span className='text-xl font-bold border-b-4 md:text-2xl border-green'>{activeItem}</span>
            <div className='text-base font-normal md:text-xl'>
                {activeItem !== 'About' && (
                    <Link href="/">
                        <span  className='mx-2 cursor-pointer hover:border-b-4 hover:text-green' onClick={()=> setactiveItem('About')}>About</span>
                    </Link>
                )}

                {activeItem !== 'Projects' && (
                    <Link href="/projects">
                        <span  className='mx-2 cursor-pointer hover:border-b-4 hover:text-green' onClick={()=> setactiveItem('Projects')}>Projects</span>
                    </Link>
                )}

                {activeItem !== 'Reusme' && (
                    <Link href="/reusme">
                        <span  className='mx-2 cursor-pointer hover:border-b-4 hover:text-green' onClick={()=> setactiveItem('Reusme')}>Reusme</span>
                      </Link>
                )}
                
            </div>
        
        </div>
    )
}

export default Navbar