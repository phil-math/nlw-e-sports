import './styles/main.css'
import logoImg from './assets/Logo.svg'

import {MagnifyingGlassPlus} from 'phosphor-react'

function App () {
  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt=""/>


      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui
      </h1>

    <div className='grid grid-cols-6 gap-6 mt-16 self-stretch'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/g1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white  block'>G0</strong>
            <span className='text-zinc-300 text-sm block'>publi0</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/g2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white  block'>G1</strong>
            <span className='text-zinc-300 text-sm block'>PUBLI1</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/g3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white  block'>G2</strong>
            <span className='text-zinc-300 text-sm block'>PUBL2</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/g4.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white  block'>G3</strong>
            <span className='text-zinc-300 text-sm block'>3publi</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/g5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white  block'>G4</strong>
            <span className='text-zinc-300 text-sm block'>4publi</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/g6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white  block'>G5</strong>
            <span className='text-zinc-300 text-sm block'>5publki</span>
          </div>
        </a>
      </div>
      <div className='bg-nlw-gradient pt-1 self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não enccontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Public um anúncio para encontrar novos players!</span>
          </div>
          <button className=' px-4 py-3 flex items-center gap-3 bg-violet-500 text-white rounded hover:bg-violet-400'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio!
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
