import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Welcome to our store</h1>
        <p>Check out our latest products:</p>
        <div className="product-list">
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <p>Price: $19.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <p>Price: $29.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Product 3</h3>
            <p>Description of Product 3</p>
            <p>Price: $39.99</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; My E-commerce Store 2023</p>
      </footer>
    </div>
  );
}

export default App;
