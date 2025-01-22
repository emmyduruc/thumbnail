import "./App.css";
import { Thumbnail } from "../src/components/Thumbnail";

function App() {
  return (
    <div className="w-full bg-white p-2 gap-4 rounded-lg">
      <Thumbnail
        buttonVisible={true}
        size="m"
        fileType="Kyz.jpeg"
        date="23.04.2025, 11:23 Uhr"
        filename="filename.jpg"
        src="https://plus.unsplash.com/premium_photo-1737360252159-12c3e8bc7e63?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default App;
