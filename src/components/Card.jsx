import React, { useState } from 'react';
import Data from '../Data';

const Card = () => {
  const [callData, setCallData] = useState(Data.products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchData, setsearchData] = useState('')

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filterData = () => {
    const updatedData = Data.products.filter((product) => {
      return selectedCategories.includes(product.category);
    });
    setCallData(updatedData);
  };

  const filtergetData = callData.filter((item) =>
    item.title.toLowerCase().includes(searchData.toLowerCase())
  )

  return (
    <>
      <div className="container mt-4 mb-4">
        <input type="text" className='form-control my-4' placeholder='Search...' onChange={(e) => setsearchData(e.target.value)} />


        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="smartphones"
            id="flexCheckSmartphones"
            onChange={() => handleCategoryChange('smartphones')}
            checked={selectedCategories.includes('smartphones')}
          />
          <label className="form-check-label" htmlFor="flexCheckSmartphones">
            Smartphones
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="laptops"
            id="flexCheckLaptops"
            onChange={() => handleCategoryChange('laptops')}
            checked={selectedCategories.includes('laptops')}
          />
          <label className="form-check-label" htmlFor="flexCheckLaptops">
            Laptops
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="fragrances"
            id="flexCheckFragrances"
            onChange={() => handleCategoryChange('fragrances')}
            checked={selectedCategories.includes('fragrances')}
          />
          <label className="form-check-label" htmlFor="flexCheckFragrances">
            Fragrances
          </label>
        </div>


        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="skincare"
            id="skincare"
            onChange={() => handleCategoryChange('skincare')}
            checked={selectedCategories.includes('skincare')}
          />
          <label className="form-check-label" htmlFor="flexCheckFragrances">
            skincare
          </label>
        </div>


        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="groceries"
            id="groceries"
            onChange={() => handleCategoryChange('groceries')}
            checked={selectedCategories.includes('groceries')}
          />
          <label className="form-check-label" htmlFor="flexCheckFragrances">
            groceries
          </label>
        </div>


        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="home-decoration"
            id="home-decoration"
            onChange={() => handleCategoryChange('home-decoration')}
            checked={selectedCategories.includes('home-decoration')}
          />
          <label className="form-check-label" htmlFor="flexCheckFragrances">
            home-decoration
          </label>
        </div>


        {/* Add more checkboxes for other categories here */}

        <button className="btn btn-primary mt-3" onClick={filterData}>
          Apply Filters
        </button>

        <div className="row">
          {filtergetData.map((item, index) => {
            return (
              <div className="col-lg-3 mt-3" key={index}>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={item.thumbnail} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-warning">${item.price}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
