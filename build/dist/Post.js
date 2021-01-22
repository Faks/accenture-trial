import * as React from "../_snowpack/pkg/react.js";
export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    this.setState({
      data: this.props.location.state
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "row row-cols-1 row-cols-md-3 g-4"
    }, "Detail View"));
  }
}
