import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export const Home = () => {
  const [search, setSearch] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:4444/api2/foodKaData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    //    console.log(response);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    console.log(response[0], response[1]);
  }

  useEffect(() => {
    loadData()
  }, [])



  return (
    <>
      <div><NavBar /></div>
      <div><br></br><div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{objectFit:'contain'}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{"zIndex":"10"}}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                            <button className="btn btn-outline-info text-white" type="submit">Search</button>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/300×300/?burger" className="d-block w-100" style={{filter:"brightness(30%)"}}   alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300/?FastFood" className="d-block w-100" style={{filter:"brightness(30%)"}}  alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300/?Cake" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div></div><br></br><br></br>
      <div className='container' style={{ backgroundColor: '#F5EDE0' }}>
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr />
                  { foodItem !== []
                    ?
                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleString()))) 
                      .map(filterItem => {
                        return (
                          <div key={filterItem._id} className='col-12  col-md-6  col-lg-4'>
                            <Card food = {filterItem}
                            options={filterItem.options[0]}
                            ></Card>
                             {/*foodName={filterItem.name}
                            imgsrc={filterItem.img}
                             des={filterItem.description}*/}
                          </div>
                        )
                      }
                      ) : <div>No Such Data Found</div>}
                </div>
              )
            }) : ""
        }




      </div>

      <div><Footer /></div>
    </>
  )
}

export default Home;



