import { Gallery, ProfileCard } from "./components"


function App() {

  return (
    <div className="App flex flex-col items-center min-h-screen">
      <main className="flex flex-col items-center gap-[3.25rem] desktop:gap-[5.1875rem] mt-[1.875rem] desktop:mt-[3.75rem]">
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
