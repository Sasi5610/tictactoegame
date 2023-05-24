import "./App.css";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Col, Card, Row, Container, CardBody } from "reactstrap";
import Icon from "./Icon";
function App() {
  const [isXTurn, setIsXTurn] = useState(true);
  const [cells, setCells] = useState(Array(9).fill(null));
  const [winMessage, setWinMessage] = useState("");

  function fillCell(index) {
    if (winMessage) {
      toast.error("Game is already Won, start a new Game");
      return;
    }

    const cellsCopy = [...cells];

    if (cellsCopy[index] !== null) {
      toast.error("Cell is alredy filled. Click on an empty Cell");
      return;
    }
    cellsCopy[index] = isXTurn ? "X" : "O";
    setCells(cellsCopy);
    setIsXTurn(!isXTurn);
  }

  useEffect(checkWinner, [cells]);
  // Checking the Winner
  function checkWinner() {
    if (winMessage) {
      toast.success("Game is already Won, start a new Game");
      return;
    }
    if (cells[0] !== null && cells[0] === cells[1] && cells[1] === cells[2]) {
      setWinMessage(`${cells[0]} Won`);
    } else if (
      cells[3] !== null &&
      cells[3] === cells[4] &&
      cells[4] === cells[5]
    ) {
      setWinMessage(`${cells[3]} Won`);
    } else if (
      cells[6] !== null &&
      cells[6] === cells[7] &&
      cells[7] === cells[8]
    ) {
      setWinMessage(`${cells[6]} Won`);
    } else if (
      cells[0] !== null &&
      cells[0] === cells[3] &&
      cells[3] === cells[6]
    ) {
      setWinMessage(`${cells[0]} Won`);
    } else if (
      cells[1] !== null &&
      cells[1] === cells[4] &&
      cells[4] === cells[7]
    ) {
      setWinMessage(`${cells[1]} Won`);
    } else if (
      cells[2] !== null &&
      cells[2] === cells[5] &&
      cells[5] === cells[8]
    ) {
      setWinMessage(`${cells[2]} Won`);
    } else if (
      cells[0] !== null &&
      cells[0] === cells[4] &&
      cells[4] === cells[8]
    ) {
      setWinMessage(`${cells[0]} Won`);
    } else if (
      cells[2] !== null &&
      cells[2] === cells[4] &&
      cells[6] === cells[6]
    ) {
      setWinMessage(`${cells[2]} Won`);
    } else if (checkDrawn()) {
      setWinMessage("Gmae Drawn");
    }
  }

  function checkDrawn() {
    return cells.every((cell) => cell !== null);
  }
  // retrun
  return (
    <Container className="p-5 container">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
      ></ToastContainer>
      <Row>
        <Col>
          {winMessage ? (
            <div className="mb-3 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isXTurn ? "X" : "O"} Turn
            </h1>
          )}

          <button
            className="reload "
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Restart the Game
          </button>
        </Col>
        <div className="grid">
          <Card color="warning">
            <CardBody className="box1" onClick={() => fillCell(0)}>
              <Icon content={cells[0]} />
            </CardBody>
          </Card>

          <Card color="warning">
            <CardBody className="box2" onClick={() => fillCell(1)}>
              <Icon content={cells[1]} />
            </CardBody>
          </Card>
          <Card color="warning">
            <CardBody className="box3" onClick={() => fillCell(2)}>
              <Icon content={cells[2]} />
            </CardBody>
          </Card>
          <Card color="warning">
            <CardBody className="box4" onClick={() => fillCell(3)}>
              <Icon content={cells[3]} />
            </CardBody>
          </Card>
          <Card color="warning">
            <CardBody className="box5" onClick={() => fillCell(4)}>
              <Icon content={cells[4]} />
            </CardBody>
          </Card>
          <Card color="warning">
            <CardBody className="box6" onClick={() => fillCell(5)}>
              <Icon content={cells[5]} />
            </CardBody>
          </Card>
          <Card color="warning">
            <CardBody className="box7" onClick={() => fillCell(6)}>
              <Icon content={cells[6]} />
            </CardBody>
          </Card>
          <Card color="warning">
            <CardBody className="box8" onClick={() => fillCell(7)}>
              <Icon content={cells[7]} />
            </CardBody>
          </Card>
          <Card color="warning" onClick={() => fillCell(8)}>
            <CardBody className="box9">
              <Icon content={cells[8]} />
            </CardBody>
          </Card>
        </div>
      </Row>
    </Container>
  );
}

export default App;
