const Textarea = ({ id, label, value, onImageUpload, onProductChange, imagePath }) => {
  return (
    <div className='flex flex-col h-full pb-10 space-y-4'>
      <div className='flex flex-wrap gap-1'>
      <label className='text-sm text-gray-800' htmlFor={id}>{label}</label>
        <label className='text-sm font-semibold underline hover:cursor-pointer' htmlFor='files' onClick={e => (e.target.value = null)}>or upload a screenshot</label>
        <input 
          type='file'
          accept='image/*'
          id='files' 
          className='hidden' 
          onChange={onImageUpload}
          onClick={e => (e.target.value = null)} // clears file
        />
      </div>
      <textarea
        className='w-full h-full py-2 pl-3 font-mono text-base text-gray-700 placeholder-gray-400 border-2 border-gray-100 rounded-xl focus:border-gray-300 focus:outline-none focus:ring-0'
        id={id}
        placeholder={'2437-Black\n20252R-ClassicNavy\n50239R-Lunar'}
        value={value}
        onChange={onProductChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
