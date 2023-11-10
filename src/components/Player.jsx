import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Player = () => {
  const songInStore = useSelector((state) => state.selectedSong.song);
  const isSelected = useSelector((state) => state.selectedSong.isSelected);
  console.log("isSelected???!?!", isSelected);
  console.log("redux store song", songInStore);

  return (
    <div className="container-fluid fixed-bottom player-bg mx-auto">
      <div className="row align-items-center">
        <div className="col-12 col-md-3">
          {isSelected && (
            <Card style={{ backgroundColor: "transparent", border: "none" }}>
              <Row className="align-items-center">
                <Col xs={4}>
                  <Card.Img
                    variant="top"
                    src={songInStore?.album.cover}
                    className="img-fluid rounded"
                  />
                </Col>
                <Col xs={8} className="p-0">
                  <Card.Body className="p-0 h-100">
                    <p className="m-0 fw-bold text-light">
                      {songInStore.title}
                    </p>
                    <small className="m-0 text-light">
                      {songInStore.artist.name}
                    </small>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          )}
        </div>
        <div className="col-12 col-md-9">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3 playerControls mt-1">
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ flexWrap: "nowrap" }}
              >
                <Link>
                  <img
                    src="/img/Shuffle.png"
                    alt="shuffle"
                    className="mx-0"
                    style={{ width: "50px" }}
                  />
                </Link>
                <Link>
                  <img
                    src="/img/Previous.png"
                    alt="previous"
                    className="mx-0"
                    style={{ width: "50px" }}
                  />
                </Link>
                <Link>
                  <img
                    src="/img/Play.png"
                    alt="play"
                    id="playBtn"
                    className="mx-0"
                    style={{ width: "50px" }}
                  />
                </Link>
                <Link>
                  <img
                    src="/img/Next.png"
                    alt="next"
                    className="mx-0"
                    style={{ width: "50px" }}
                  />
                </Link>
                <Link>
                  <img
                    src="/img/Repeat.png"
                    alt="repeat"
                    className="mx-0"
                    style={{ width: "50px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-12 col-md-8">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
