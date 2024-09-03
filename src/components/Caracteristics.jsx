import CharacteristicElement from "./CharacteristicElement";

export default function Caracteristics(){
    return(
        <>
            <section className="bg-slate-100 p-8 flex flex-col  text-center gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-neutral-800 text-3xl font-extrabold">Advanced Statistics</h1>
                    <p className='text-neutral-400 text-lg font-semibold'>Track how your links are performing across the web whit our advanced statitistics dashboard.</p>
                </div>
                <div className="elements relative mt-16 flex flex-col items-center gap-32">
                    <div className="verticalLine w-3 h-full bg-cyan-400 absolute " ></div>
                <CharacteristicElement/>
                <CharacteristicElement/>
                <CharacteristicElement/>
                </div>
                
            </section>
        </>
    )
}