
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Button from './components/ui/Button'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <h1>Aventura 360</h1>
        <p>Equipamiento para tus próximas aventuras.</p>

        <Button onClick={() => alert('Próximamente: Catálogo')}>
          Explorar productos
        </Button>
      </main>

      <Footer />
    </div>
  )
}

export default App
