import React, { useState } from "react";
import data from "../helper/data";
import "../styles/style.css";

const itemsPerPage = 5; // Her sayfada gösterilecek öğe sayısı

const List = () => {
  const [currentPage, setCurrentPage] = useState(1); // Şu anki sayfa numarası

  // Şu anki sayfada görünen verileri hesapla
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Sayfa numarasını artırmak veya azaltmak için işlevler
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="list-card">
        <h3>Employee List</h3>
        <h4>
          {" "}
          (Employees {indexOfFirstItem } to {indexOfLastItem})
        </h4>
        {currentItems.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <div className="desc">
              <h2>{item.name}</h2>
              <span>{item.email}</span>
              <p>{item.age}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btn">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Geri
        </button>
        <button onClick={nextPage} disabled={indexOfLastItem >= data.length}>
          İleri
        </button>
      </div>
    </div>
  );
};

export default List;
