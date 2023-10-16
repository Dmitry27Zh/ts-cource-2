import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'
import App from './view/app'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
