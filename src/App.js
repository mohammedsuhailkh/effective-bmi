import React, { useState, useSyncExternalStore } from 'react'
import Form from './components/Form'
import Bmiscore from './components/Bmiscore';
import Bmilist from './components/Bmilist';
import "./App.css"


function App() {
  const [changeWeight, setchangeWeight] = useState({weight : "", type : ""});
  const [bmi, setbmi] = useState("00.0");
  const [bmiName, setbmiName] = useState("Not Calculated");
  const [bmiRange, setbmiRange] = useState({
    underWeight: {low : ""},
    normal : {low : "", high : ""},
    overWeight : {low : "", high : ""},
    obesityOne : {low : "", high : ""},
    obesityTwo : {low : "", high : ""},
    obesityThree : {high : ""}

  });
  const onFormSub = (w, h) =>{
    
    let b = calBmi(w, h);
    setbmi(b);


    let bType = bmiTypeValue(b)
    setbmiName(bType)

    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    setbmiRange(range)
    setchangeWeight(weightChange(b ,w ,range))
  }
  
  const bmiTypeValue = (bmi)=>{
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
    
  }
  




  const calBmi = (w, h) => {
    return ( w / (h * h)).toFixed(2);
  }

  const calWeight = (b, h) => {
    return ( b * h * h).toFixed(2);
  }



  const weightChange = (b, w, range) => {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        wight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        wight: (range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    } else {
      changeObj = { wight: 0, type: "normal" };
      return changeObj;
    }
  };


  return (
<div className='container'>
  <div className='row justify-content-center mt-5 mx-2'>
    <Form onFormSub={onFormSub}/>
  </div>
  <div className='row justify-content-center mt-5 mx-5'>
    <div className='col-12 col-sm-6 mb-5'>
      <Bmiscore bmiNo={bmi} bmiType={bmiName} changeWeight={changeWeight}/>
    </div>
    <div className='col-12 col-sm-6'>
      <div className='row justify-content-start'>
        <div className='col-12'>
        </div>
        <div className='col-12'>
          <Bmilist range={bmiRange} bmi={bmi}/>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}



export default App;