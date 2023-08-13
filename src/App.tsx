import Player from "./components/Player";

function App() {
  return (
    <div className="bg-slate-900">
      <div className="absolute w-screen h-screen object-fill bg-slate-900">
        {/* Bg filter color */}
      </div>
      <div className="absolute h-screen w-screen flex items-center justify-center"></div>
      <Player />
    </div>
  );
}

export default App;
