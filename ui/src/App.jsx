import { DataProvider } from "./context/DataContext"
import Home from "./pages/Home"

const App = () => {
  return (
    <div className="min-h-screen pt-10 relative bg-slate-50">
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  )
}

export default App