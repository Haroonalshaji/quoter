import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ApiFetch() {
  // modal code
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ***********************************

  const [Quotes, setQuotes] = useState([])

  const base_url = "https://dummyjson.com/quotes";

  const fetchQuote = async () => {
    const response = await fetch(base_url)
      .then(response => response.json())
      .then(data => setQuotes(data.quotes[Math.floor(Math.random() * data.quotes.length)]))
  }

  console.log(Quotes);


  useEffect(() => {
    fetchQuote()
  }, []);

  // function randomselection() {
  //   fetchQuote();
  // }


  return (
    <div style={{margin:'150px',marginLeft:'350px', width:'650px', height:'450px', padding:'100px', paddingTop:'120px' , textAlign:'center' , background:"url(https://img.freepik.com/free-vector/beautiful-frame-design-with-dragonfly_53876-115833.jpg)"}}>
      <h2>Click here and see what u got for today ! </h2>
      <Button variant="primary m-5" onClick={()=>{handleShow(); fetchQuote()} }>
        Get Your Quote
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Quote fo You is....</Modal.Title>
        </Modal.Header>
        <Modal.Body><i><h1>"{Quotes.quote}"</h1></i></Modal.Body>
        <Modal.Body><center><h4>~{Quotes.author}</h4></center></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Thank me Later !
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ApiFetch
