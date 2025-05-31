import VistroLogo from "./assets/VistroLogo";
import CreateAccount from "./pages/CreateAccount";


function App() {
  return (
    <div className="p-4">
      <VistroLogo className='w-1' />

      <CreateAccount />
    </div>
  );
}

export default App;
