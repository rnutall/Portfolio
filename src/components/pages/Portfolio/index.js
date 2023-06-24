import React, { useState } from "react";
import weatherz from  '../../../assets/weatherz.png'
import "./portfolio.css";

export default function PortfolioContainer() {
  return (
    <div className="projectContainer">
      <div className="card">
        <div>
          <img className="Project-1 portfolioImg" src={weatherz} alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/rnutall/Weatherz">Weatherz</a></button>
          <button type="button"><a href=" https://rnutall.github.io/Weatherz/">Deployed Site</a></button>
        </div>
      </div>

      <div className="card">
        <div>
          <img className="project-2 portfolioImg" src='https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg'  alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/xybai0103/babyNameApp">Baby Name App</a></button>
          <button type="button"><a href="https://xybai0103.github.io/babyNameApp/">deployed site</a></button>
        </div>
      </div>

      <div className="card">
        <div>
          <img className="project-3 portfolioImg" src='https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg'  alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/rnutall/Book_Search_Engine-MERN">Book_Search_Engine-MERN</a></button>
          <button type="button"><a href="#">deployed site</a></button>
        </div>
      </div>

      <div className="card">
        <div>
          <img className="project-4 portfolioImg" src='https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg'  alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/rnutall/back-end_E-Commerce">back-end_E-Commerce</a></button>
          <button type="button"><a href="#">deployed site</a></button>
        </div>
      </div>

      <div className="card">
        <div>
          <img className="project-5 portfolioImg" src='https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg'  alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/stephen-castillo/Project2">Quickdecks</a></button>
          <button type="button"><a href="https://quickdecks.herokuapp.com/">deployed site</a></button>
        </div>
      </div>

      <div className="card">
        <div>
          <img className="project-6 portfolioImg" src='https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg'  alt=""/>
        </div>
        <div className="buttonContainer">
          <button type="button"><a href="https://github.com/rnutall/Security-Lock">Security-lock</a></button>
          <button type="button"><a href="https://rnutall.github.io/Security-Lock/">deployed site</a></button>
        </div>
      </div>
    </div>
  );
}
// function kitchenSink() {
//     return (
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//         <Card.Body>
//           <Card.Title>Text Editor</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//         <ListGroup className="list-group-flush">
//           <ListGroup.Item>Cras justo odio</ListGroup.Item>
//           <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//           <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//         </ListGroup>
//         <Card.Body>
//           <Card.Link href="https://secure-taiga-48154.herokuapp.com/">Card Link</Card.Link>
//           <Card.Link href="#">Another Link</Card.Link>
//         </Card.Body>
//       </Card>

//     )
//     };
//   };

// export default kitchenSink;
