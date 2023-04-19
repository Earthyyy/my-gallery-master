import { Gallery, ProfileCard } from "./components"


function App() {

  return (
    <div className="App grid place-content-center min-h-screen">
      <main>
        <ProfileCard/>
        <Gallery/>
      </main>
      <footer>
        <p>Created by <a href="https://github.com/Earthyyy?tab=repositories">Earthyy</a> - devChallenges.io</p>
      </footer>
    </div>
  )
}

export default App
