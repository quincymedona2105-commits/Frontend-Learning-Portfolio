
import Student from "./Components/Student";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import ProductCard from "./Components/ProductCard";


const App = () => {
  return (
    <div>
    <div>
        <Student/>
    </div>
    <Header/>
    <Content/>
    <Footer/>

    <div>
      <h1>Product Cards</h1>
      <ProductCard name="Laptop" price={50000} Category="Electronics" Availability="Available"/>
      <ProductCard name="Mobile" price={20000} Category="Electronics" Availability="Available"/>
      <ProductCard name="Keyboard" price={1500} Category="Accessories" Availability="Out of Stock"/>
    </div>
    
    </div>
    
  );
};

export default App;
