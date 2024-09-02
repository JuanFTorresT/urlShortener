import IllustrationWorking from './IllustrationWorking'

export default function HeroBanner (){
    return(
        <>
            <div className="w-full overflow-hidden">
                <IllustrationWorking />
            </div>
            <div className="banner p-4 flex flex-col gap-8 text-center items-center">
                <h1 className='text-neutral-800 text-5xl font-black'>More than just shorter links</h1>
                <p className='text-neutral-400 text-2xl font-semibold'>build your brand's recognition and get detailed insights on how your links are performing</p>
                <button className='bg-cyan-400 text-white rounded-full py-3 w-3/4 font-bold text-xl '>Get Started</button>
            </div>
      </>
    );
}