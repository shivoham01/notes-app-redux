import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-blue-900 px-4 py-2">
            <Link to='/'>
                <h2 className='text-xl font-bold'>Notes - App</h2>
            </Link>
            <div className="flex gap-5 text-xl">
                <Link to='/pinned-notes' 
                className='text-lg active:scale-95 px-4 py-1 rounded text-gray'>Pinned Notes</Link>
                <Link to='/about' 
                className='text-lg active:scale-95 px-4 py-1 rounded text-gray'>About Us</Link>
            </div>
        </div>
    )
}

export default Navbar