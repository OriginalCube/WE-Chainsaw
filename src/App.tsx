import Main from "./components/MainContent/Main";

function App() {
  return (
    <div className="bg-slate-900">
      <div className="absolute w-screen h-screen object-fill bg-slate-900">
        {/* Bg filter color */}
      </div>
      <div className="absolute h-screen w-screen flex items-center justify-center">
        <div className="h-full w-1/6"></div>
        <div className="h-full w-4/6 flex items-center justify-center">
          <Main />
        </div>
        <div className="h-full w-1/6"></div>
      </div>
    </div>
  );
}

export default App;
