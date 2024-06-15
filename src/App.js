import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import Plant from "./components/Plant";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";

function App() {
  return (
    <div>
      <div className="App">
        <TopNav />
        <Featured />
        <Delivery />
        <TopPicks />
        <Plant />
        <Categories />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
