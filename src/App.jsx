import { Gallery, ProfileCard } from "./components"


function App() {

  return (
    <div className="App flex flex-col gap-[1.875rem] desktop:gap-[6.625rem] items-center min-h-screen">
      <main className="flex flex-col items-center gap-[3.25rem] desktop:gap-[5.1875rem] mt-[1.875rem] desktop:mt-[3.75rem]">
        <ProfileCard/>
        <Gallery/>
      </main>
      <footer className="">
        <p className="text-footer font-medium">Created by <a className="font-bold underline underline-offset-2 mb-6" href="https://github.com/Earthyyy" target="_blank">Earthyy</a> - devChallenges.io</p>
      </footer>
    </div>
  )
}

export default App
