import React from 'react';

function function1(props) {
    const {lat, lon, handleSubmit, onChange, results } = props;
    return (
        
<form onSubmit ={handleSubmit} className ="mt-4 mb-4 center-form">
  <div className="form-row align-items-center">
    <div className="col-auto">
        <div className="input-group mb-2">
            <div className="input-group-prepend">
            <div className="input-group-text">lat</div>
            </div>
        <input type="text"  value={lat} onChange={onChange} name="lat" className="form-control" id="inlineFormInput" />
        </div>
    </div>
    
    <div className="col-auto">
      
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">lon</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroup"  value={lon} onChange={onChange} name="lon" />
      </div>
    </div>
    <div className="col-auto">
      <div className="input-group mb-2">
        <select name="results" value={results} onChange={onChange} className="custom-select  form-control mr-sm-2" id="inlineFormCustomSelect">
            <option defaultValue=''>Display results</option>
            <option value="all">All</option>
            <option value="shortest">Shortest distance</option>
            
        </select>
        </div>
      
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form> 
       
    )
}

export default function1;
