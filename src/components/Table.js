import React from 'react';



const Table = ({data, perPage, currentPage}) =>{
    const firstIndex = (currentPage-1)*perPage;
    return(<table className="table table-dark table-responsive-sm">
    <thead>
      <tr >
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">ASN</th>
        <th scope="col">COUNTRYCODE</th>
        <th scope="col">DISTANCE</th>
        <th scope="col">ACTIVE</th>
      </tr>
    </thead>
    <tbody>
        {data.map((val, index)=>{
            return  <tr key={val.id}>
            <th scope="row">{index+firstIndex+1 || index+1}</th>
            <td>{val.id}</td>
            <td>{val.asn}</td>
            <td>{val.countrycode}</td>
            <td>{val.distance}</td>
            <td>{val.active}</td>
          </tr>

        })}
      
    
    </tbody>
  </table>)
}

export default Table;