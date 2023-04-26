import Button from './Button'

const Results = ({ results, copyMessage, onCopy, onClear, isShowingMessage }) => {

  return (
    <div className='flex flex-col flex-1 px-8 pt-8 pb-10 space-y-4 lg:pt-8'>
        <div className='flex items-center justify-end space-x-4'>
          <span className={`text-sm ${isShowingMessage ? 'transition-all ease-linear' : 'opacity-0 transition-all ease-linear'}`}>{copyMessage}</span>
          <Button text='Copy' handleClick={onCopy}/>
          <Button bgColor='bg-gray-100' textColor='gray-800' text='Clear' handleClick={onClear}/>
        </div>
        <span className='text-sm text-gray-800 md:pt-6'>Use the search query below to pull up results for multiple search terms in DAM</span>
    <div className='w-full h-full min-h-[68px] px-3 py-2 mt-10 bg-white border-2 border-gray-100 rounded-xl'>{results}</div>
    </div>
  )
}

export default Results