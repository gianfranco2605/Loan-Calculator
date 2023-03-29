import { useState, useEffect } from "react"
import Header from "./components/Header"
import Button from "./components/Buttons"
import { formatMoney, calcolareTotaleDaPagare } from "./helpers/index"

function App() {

  // DESTRUCTORING OF ARRAY

  const [ quantita, setQuantita ] = useState(10000);
  const [ mesi, setMesi] = useState(6); 
  const [ totale, setTotale] = useState(0);
  const [pagamento, setPagamento ] = useState(0)

  useEffect(() => {
    const risultatoTotalePagare = calcolareTotaleDaPagare(quantita, mesi);
    setTotale(risultatoTotalePagare);

  },[quantita, mesi]);

  useEffect(() => {
    
    // calcolare pagamenti mensili
    setPagamento(totale / mesi);

  },[totale]);

  function handleChange(e) {
    setQuantita(+e.target.value);

  }

  const MIN = 1000
  const MAX = 20000
  const STEP = 100

  function handleClickDecrecenter() {
    const valor = quantita - STEP;

    if(valor < MIN) {
      alert("Quantita non valida")
      return;
    }

    setQuantita(valor)
  }

  function handleClickCrecente() {
    const valor = quantita + STEP;

    if(valor > MAX) {
      alert("Quantita non valida")
      return;
    }

    setQuantita(valor)
  }
   
  return (
    

    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      
      <Header /> 
      
      <div className="flex justify-between my-6">
        
        <Button
           operatore = '-'
           fn={handleClickDecrecenter}
        />
        <Button
            operatore = '+'
            fn={handleClickCrecente}
         />
        

      </div>

      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600" 
        onChange={ handleChange}
        min= {MIN}
        max={MAX}
        step={STEP}
        value={quantita}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{formatMoney(quantita)}</p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Scegliere <span className="text-indigo-600">Numero</span> di rate da pagare
      </h2>

      <select 
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
          value={mesi}
          onChange={ e => setMesi(+e.target.value)}
          >
          <option value="6">6 Mesi</option>
          <option value="12">12 Mesi</option>
          <option value="24">24 Mesi</option>
        </select>

        <div className="my-5 space-y-3 bg-gray-50 p-5">
          <h2 className="text-2xl font-extrabold text-gray-500 text-center">
            Riepilogo <span className="text-indigo-600">pagamenti</span>
          </h2>

          <p className="text-xl text-gray-500 text-center font-bold">{mesi} Mesi</p>
          <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(totale)}Totale a pagare </p>
          <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(pagamento)}Mensilita</p>

        </div>
    </div>   
  )
}

export default App
