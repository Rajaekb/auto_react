import React, { useState } from 'react';

const TestRadio = () => {
    
    const [selectedOption,setselectedOption] = useState("option1");
  

  
    const  handleFormSubmit = (event) =>{
        event.preventDefault();
  
      console.log("You have submitted:", selectedOption);
    };
  
   
      return (
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col-sm-12">
              <form onSubmit={handleFormSubmit}>
                <div className="form-check">
                  <label>
                    <input
                      type="radio"
                      name="react-tips"
                      value="option1"
                      onChange={(e)=>setselectedOption(e.target.value)}
                      //checked={this.state.selectedOption === "option1"}
                      className="form-check-input"
                    />
                    Option 1
                  </label>
                </div>
                <div className="form-check">
                  <label>
                    <input
                      type="radio"
                      name="react-tips"
                      value="option2"
                      //checked={this.state.selectedOption === "option2"}
                      onChange={(e)=>setselectedOption(e.target.value)}
                      className="form-check-input"
                    />
                    Option 2
                  </label>
                </div>
                <div className="form-check">
                  <label>
                    <input
                      type="radio"
                      name="react-tips"
                      value="option3"
                     // checked={this.state.selectedOption === "option3"}
                      onChange={(e)=>setselectedOption(e.target.value)}
                      className="form-check-input"
                    />
                    Option 3
                  </label>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary mt-2" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  
  
  export default TestRadio;