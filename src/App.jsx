import './App.css'
import { pokemonInstance } from './helper/pokemon-instance'
import useAxios from './hook/use-axios'

function App() {
  const [pokemonData, loading, error] = useAxios({
    axiosInstance: pokemonInstance,
    method: 'GET',
    url: 'pokemon',
  })

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='App'>
      Front Beginners
      <div>
        {pokemonData?.results?.map((pokemon, index) => (
          <div key={index}>{pokemon.name}</div>
        ))}
      </div>
      <div>{error && 'Desculpe, não conseguimos carregar no momento'}</div>
    </div>
  )
}

export default App
