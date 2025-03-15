import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div class="bg-zinc-100">
        <div class="bg-zinc-50 border-zinc-200 text-zinc-800">
          This is a hardcoded dark text on a light background, it needs double
          the amount of class names to support dark mode.
        </div>
      </div>
    </>
  );
}

export default App;
