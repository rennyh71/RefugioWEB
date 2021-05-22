import React from "react";
import * as style from "../componentes/card.module.css";

class card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "flex",
      flexDirection: "row",
      margin: "0px 0px 17px 0px",
      backgroundColor: "blanchedalmond",
      boxShadow: "3px 3px 3px rgb(0, 0, 0, 0.5 )",
    };
  }
  componentDidMount() {
    if (this.props.reverse) {
      this.setState({
        flexDirection: "row-reverse",
      });
    }
  }

  render() {
    return (
      <div style={this.state}>
        <div className={style.cardImg}>
          <img alt="imagen"></img>
        </div>
        <div className={style.cardContent}>
          <h3> Clases de discipulado </h3>
          <h1> h1</h1>
          <h4> h4 </h4>
        </div>
      </div>
    );
  }
}

export default card;
