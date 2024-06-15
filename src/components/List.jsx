// import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function List({ artList = [], show, toggleModal = () => {}, handleDelete = () => {} }) {
  return (
    <>
      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title><b>Selected Art</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="list">
            <ul>
            {artList.map((art, index) => (
              <div className="listItem" key={index}>
                <li>{art.title}</li>
                <div className="deleteContainer">
                  <button className="deleteButton" onClick={() => handleDelete(index)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
            </ul>
          </div>
        </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={toggleModal}>
        Close
      </Button>
      <Button variant="primary" onClick={toggleModal}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
    </>
  );
}

List.propTypes = {
  artList: PropTypes.array,
  show: PropTypes.bool,
  toggleModal: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default List;
