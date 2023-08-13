import Player from "./components/Player";

function App() {
  return (
    <div className="bg-slate-900">
      <div className="absolute w-screen h-screen object-fill">
        {/* Bg filter color */}
      </div>
      <div className="absolute h-screen w-screen flex items-center justify-center">
        <video
          src="./assets/videos/input.mp4"
          className="bg-white absolute h-full w-auto"
        ></video>
      </div>
      <Player />
    </div>
  );
}

export default App;
