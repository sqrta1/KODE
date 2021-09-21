import { useEffect, useState } from 'react';

import axios from 'axios';
import ReactPaginate from 'react-paginate';

import NavBar from '../NavBar/NavBar';
import CardList from '../CardList/CardList';
import SortBar from '../SortBar/SortBar';
import BigCard from '../BigCard/BigCard';
import Modal from '../Modal/Modal';

import './Main.css';

function Main() {
  const [result, setResult] = useState([]);
  const [type, setType] = useState('Type');
  const [subtype, setSubtype] = useState('Subtype');
  const [page, setPage] = useState(1);
  const [pickedItem, setPickedItem] = useState('');
  const [modalActive, setModalActive] = useState(false);

  const OFFSET_SIZE = 4;

  useEffect(() => {
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${OFFSET_SIZE}&q=${
          type === 'Type' ? '' : 'types:' + type
        } ${subtype === 'Subtype' ? '' : 'subtypes:' + subtype}`,
      )
      .then((data) => {
        setResult(data.data);
      });
  }, [type, subtype, page]);
  function handleType(e) {
    setType(e.target.value);
  }

  function handleSubType(e) {
    setSubtype(e.target.value);
  }

  function handleBigCard(e) {
    e.preventDefault(e);
    const cardElement = document.getElementsByClassName('smallcard');
    let cardElements = Array.from(cardElement);
    let item = e.currentTarget;
    setPickedItem(cardElements.indexOf(item));
  }

  function handlePreviousPage(e) {
    e.preventDefault();
    setPickedItem('');
  }

  function handleLogout() {
    localStorage.removeItem('otpPass');
    window.location.reload();
  }

  function changePage({ selected }) {
    setPage(selected + 1);
  }

  const pageCount = Math.ceil(result.totalCount / OFFSET_SIZE);
  return (
    <div className="App">
      <NavBar onClick={handlePreviousPage} onLogout={handleLogout} pickedItem={pickedItem} />
      {pickedItem || pickedItem === 0 ? (
        <BigCard result={result.data[pickedItem]} />
      ) : (
        <div>
          <div className="main">
            <SortBar
              handleType={handleType}
              handleSubType={handleSubType}
              mainType={'Type'}
              mainSubType={'Subtype'}
            />
            <CardList onClick={handleBigCard} result={result.data} />
          </div>
          <div>
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginationBttns'}
              previousLinkClassName={'previousLink'}
              nextLinkClassName={'nextLink'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
            />
          </div>
          <div>{<Modal active={modalActive} setActive={setModalActive} />}</div>
        </div>
      )}
    </div>
  );
}

export default Main;
