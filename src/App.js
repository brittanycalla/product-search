import { useEffect, useState } from 'react'
import { createWorker } from 'tesseract.js'
import Textarea from './components/Textarea'
import Results from './components/Results'

function App() {
  const [products, setProducts] = useState('')
  const [results, setResults] = useState('')
  const [copyMessage, setCopyMessage] = useState('')
  const [isShowingMessage, setIsShowingMessage] = useState(false)
  const [imagePath, setImagePath] = useState('')

  const handleImageUpload = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]))
    console.log(event.target.files)
  }

  // create query string
  useEffect(() => {
    setCopyMessage('')
    setIsShowingMessage(false)
    function createQuery() {
      let results = ''
      if(products) {
        results = `"${products.split('\n')
                              .map(e => e.trim())
                              .filter(e => !['',' '].includes(e))
                              .join('" OR "')
                            }"`
      }
      results !== "\"\"" && setResults(`${results}`)
    }

    createQuery()
  },[products])

  // convert image to text on image upload
  useEffect(() => {
    const convertImageToText = async() => {
      const worker = await createWorker({
        logger: m => console.log(m)
      })
      await worker.loadLanguage('eng')
      await worker.initialize('eng')
      const { data: { text } } = await worker.recognize(imagePath)
      await worker.terminate()
      setProducts(text)
    }
    
    imagePath && convertImageToText()
  }, [imagePath])

  // copy results to clipboard
  const copyResults = () => {
    results && navigator.clipboard.writeText(`${results}`)
    setIsShowingMessage(true)
    if (results) {
      setCopyMessage(`Query copied`)
    } else {
      setCopyMessage(`No query to copy`)
    }
  }

  // clear products textarea
  const clearProducts = () => {
    setProducts('')
    // needs to hold previous results and prevent loss when cleared
  }

  return (
    <main className='animate-fade-in'>
      <div className='flex flex-col lg:max-h-[100vh] max-w-[100vw] divide-y-[1px] divide-gray-100 lg:divide-y-0 lg:flex-row'>
        <div className='flex flex-col space-y-10 lg:h-[100vh] lg:max-w-[400px] lg:w-[400px] lg:border-r-[1px] border-gray-100 px-8 lg:space-y-6'>
          <div className='flex gap-2 mt-8'>
              <span className='text-2xl'>🔎</span><h1 className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Webdam Multi-Search</h1>
          </div>
          <Textarea id='products' label='Enter your products below' value={products} onImageUpload={handleImageUpload} onProductChange={e => setProducts(e.target.value)} />
        </div>
        <Results results={results} copyMessage={copyMessage} isShowingMessage={isShowingMessage} onClear={clearProducts} onCopy={copyResults} />
      </div>
    </main>
  )
}

export default App;
