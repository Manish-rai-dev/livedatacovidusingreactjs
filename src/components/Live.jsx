import React from 'react'
import { useEffect,useState } from 'react'
import "./Live.css";
const Live = () => {
    const [data,setData]=useState([]);

    const getCovidData= async ()=>{
        try{
            const res = await fetch('https://corona.lmao.ninja/v2/countries?sort=country.json');
          const acutalData = await res.json();
            // console.log(acutalData[93]);
            setData(acutalData);
            // setData(acutalData[93]);
            // setDataa(acutalData[212]);
        }
        catch(err){
            console.log(err);
        }
     
    
    }
    
    
        useEffect(() => {
         getCovidData();
        }, []);
  return (
    <>
   
    <div className="container-fluid container-fluidity  mt-5 ">
      
        <div className="main-heading">  <h1 className='mb-5 text-center'><span className='font-weight-bold'>WORLD</span> COVID-19 DASHBOARD</h1></div>
    
    <div className="table-responsive">
        <table className='table table-hover'>

            <thead className='table-dark'>
                <tr>
                    <th>
                        Country
                    </th>
                    <td>
                        Confirmed
                    </td>
                    <td>
                        Recovered
                    </td>
                    <td>
                        Active
                    </td>
                    <td>
                        Deaths
                    </td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((curElement, ind)=>{

                        return (
                            <tr key={ind} >
                            <th>
                                {curElement.country}
                            </th>
                            <td>
                            {curElement.cases}
                            </td>
                            <td>
                           {curElement.recovered}
                            </td>
                            <td>
                                {curElement.active}
                            </td>
                            <td>
                            {curElement.deaths}
                            </td>
                        </tr>

                        )
                    })
                }


           
            </tbody>
        </table>
    </div>
    </div>
    
    </>
  )
}

export default Live