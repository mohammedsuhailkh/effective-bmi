import { useState } from "react";

function Form({onFormSub}) {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");

  const changeHeight = (e) => {
    setheight(e.target.value);
  };

  const changeWeight = (e) => {
    setweight(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSub(weight,height)
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-center">BMI Calculator</h3>
                <form onSubmit={onSubmit}>
                  <div className="form-group mb-4">
                    <label htmlFor="height" className="h5">
                      Height (in m)
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="height"
                        name="height"
                        placeholder="eg: 1.8"
                        value={height}
                        onChange={changeHeight}
                        required
                      />
                      <div className="input-group-append"></div>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="weight" className="h5">
                      Weight (in kg)
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="weight"
                        name="weight"
                        placeholder="eg: 94"      
                        value={weight}
                        onChange={changeWeight}
                        required
                      />
                      <div className="input-group-append"></div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Calculate
                  </button>
                  <br/><br/>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
