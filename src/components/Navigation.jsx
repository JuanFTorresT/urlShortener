import BurgerMenu from './BurgerMenu';


export default function Navigations() {
    return(
        <>
            <nav className="flex items-center justify-between p-4">
                <h1 className='text-neutral-800 text-4xl font-black'>Shortly</h1>
                <BurgerMenu/>
            </nav>
        </>
    )
}