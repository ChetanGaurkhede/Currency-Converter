import useCorrencyInfo from "./Hooks/useCorrencyInfo";
import InputBox from "./components/InputBox";
import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(); // to store the amount form input
  const [from, setFrom] = useState("usd"); // store the option that user selects for convertion
  const [to, setTo] = useState("inr"); // store the option that user selects To convertion
  const [convertedAmount, setConvertedAmount] = useState(0); // here is the converted amount stored

  const currencyInfo = useCorrencyInfo(from); // currencyInfo stores the data that bring by the custom hook useCorrencyInfo

  const options = Object.keys(currencyInfo); //stores the options from objects

  const swap = () => {
    //swap method swaps the input section acording to user
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => setConvertedAmount(amount * currencyInfo[to]); // convert the amount

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable // by refault its true
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {typeof from === "string" ? from.toUpperCase() : ""} to {typeof to === "string" ? to.toUpperCase() : ""}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  f;
}

export default App;
