import qrcode from './assets/image-qr-code.png'
import './App.css'

function App() {

  return (
    <div className='app'>
      <div className="qrcode-container">

        <img src={qrcode} alt="qrcode" className="qrcode-image" />

        <div className="qrcode-text-container">
          <div className="qrcode-text box-1">
            Improve your front-end <br />
            skills by building projects
          </div>
          <div className="qrcode-text box-2">
            Scan the QR code to visit Frontend <br />
            Mentor and take your coding skills to <br />
            the next level
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
