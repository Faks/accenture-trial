import * as React from "../_snowpack/pkg/react.js";
import axios from "../_snowpack/pkg/axios.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import _ from "../_snowpack/pkg/lodash.js";
import {DateTime} from "../_snowpack/pkg/luxon.js";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((response) => {
      this.setState({
        data: response.data
      });
    }).catch((errors) => {
      console.log(errors);
      this.setState({
        data: []
      });
    });
  }
  filterBeers() {
    let dataFilter = _.map(this.state.data, "first_brewed");
    dataFilter.map((item) => {
      let normalizedDate = item.replace(/\//g, "-");
      console.log(normalizedDate);
      console.log(DateTime.fromISO(normalizedDate));
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
      className: "btn btn-info mb-3",
      type: "button",
      onClick: () => this.filterBeers()
    }, "Filter: Beers on 2010 or before"), /* @__PURE__ */ React.createElement("div", {
      className: "row row-cols-1 row-cols-md-3 g-4"
    }, this.state.data ? this.state.data.map((beer) => {
      return /* @__PURE__ */ React.createElement(Link, {
        to: {pathname: `/post/${beer.id}`, state: beer},
        key: beer.id,
        "data-bs-toggle": "tooltip",
        "data-bs-placement": "top",
        title: beer.tagline
      }, /* @__PURE__ */ React.createElement("div", {
        className: "col",
        key: beer.id
      }, /* @__PURE__ */ React.createElement("div", {
        className: "card"
      }, /* @__PURE__ */ React.createElement("img", {
        src: beer.image_url,
        className: "card-img-top img-fluid",
        alt: beer.name
      }), /* @__PURE__ */ React.createElement("div", {
        className: "card-body"
      }, /* @__PURE__ */ React.createElement("h5", {
        className: "card-title"
      }, beer.name), /* @__PURE__ */ React.createElement("p", {
        className: "card-text"
      }, beer.description)))));
    }) : null));
  }
}
