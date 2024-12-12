import Header from "../src/Components/Header";
import Form from "../src/Components/Form";
import Aside from "../src/Components/Aside";

function App() {
  return (
    <>
      <div className="min-h-screen bg-zinc-50 px-4 py-3 md:px-8">
        <Header />
        <main className="grid grid-cols-8">
          <div className="col-span-2 hidden md:block">
            <Aside />
          </div>
          <div className="col-span-full bg-sky-300 p-5 md:col-span-6">
            <Form />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
