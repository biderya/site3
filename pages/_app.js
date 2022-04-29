import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gray-800 h-screen'>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
