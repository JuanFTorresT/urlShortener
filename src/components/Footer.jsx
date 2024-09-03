import LowerMenu from "./LowerMenu";
import SocialMedia from "./SocialMedia";

export default function Footer(){
    return(
        <>
            <section className="flex flex-col gap-8 p-8 text-center bg-indigo-950 text-white items-center">
                <h1 className='text-4xl font-bold'>Shortly</h1>
                <LowerMenu/>
                <LowerMenu/>
                <LowerMenu/>
                <SocialMedia/>
            </section>



        </>
    )
}