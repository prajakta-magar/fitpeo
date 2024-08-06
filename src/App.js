import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div class="h-screen grid grid-cols-12">
      <div class="hidden lg:block lg:col-span-1 bg-gray-800">
        <Sidebar />
      </div>
                                      
      <div class="col-span-12 lg:col-span-11 bg-black">
        <Navbar/>
        <div className="h-[87.3vh] overflow-auto">
        <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
