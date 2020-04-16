import React, {Component} from 'react';
import data from './data/data.json';
import geo from './data/geo.json';
import './App.css';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layouts/layout';
import Pagination from './components/Pagination';
import Function from './components/Forms/function'
class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      lat : 0,
      lon:0,
      results:'',
      distances : [], 
      perPage:15,
      currentPage:1, 
      currentPageResults:[],
      totalResults:data.length
    
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changePage = this.changePage.bind(this);
  }
  onChange = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
     
      this.setState({
        [name]:value
      })
    }
      handleSubmit = (event)=>{
        event.preventDefault();
        const lat = parseFloat(this.state.lat);
        const lon = parseFloat(this.state.lon);
      
    var dist = geo.map((val, index)=>
    {
      var latlon = val.geo.split(',');
      var x = Math.pow(parseFloat(latlon[0]) -lat, 2);
      var y = Math.pow(parseFloat(latlon[1]) - lon, 2);
      var ans = Math.sqrt(x+y);
      return {...data[index], distance:ans};
    })
      dist.sort((a,b) => a.distance-b.distance);
    this.setState({
      distances:[...dist],
      lat:0,
      lon:0,
      currentPageResults:[...dist.slice(0, this.state.perPage)]
    })
  
  }
  changePage = (pageNum) =>{
    const perPage = this.state.perPage;
    const firstVal = (pageNum-1)*perPage;
      this.setState({
          currentPageResults:[...this.state.distances.slice(firstVal, firstVal+perPage)],
          currentPage: pageNum
      })
  }
  render(){
    return (
      <Layout>
       <Function handleSubmit={this.handleSubmit} lat={this.state.lat} lon ={this.state.lon} onChange={this.onChange} />
      {this.state.results ==='shortest'? 
     
        <Table data={this.state.distances.slice(0,1)} />
           
       :
       <div>
         
          <Table data={this.state.currentPageResults} perPage={this.state.perPage} currentPage={this.state.currentPage}/>
          {this.state.currentPageResults.length > 0 ?
            <Pagination changePage={this.changePage} currentPage={this.state.currentPage} totalResults={this.state.totalResults} perPage={this.state.perPage} />
            :''
        }
          
       </div>
     
      
    }
      
      </Layout>
    );
  }
  
}

export default App;

