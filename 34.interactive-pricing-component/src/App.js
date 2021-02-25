import "./App.scss";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div>
          <h3 className="m--b">Simple, traffic-based pricing</h3>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </div>
      </div>
      <Card />
    </div>
  );
}

export default App;
