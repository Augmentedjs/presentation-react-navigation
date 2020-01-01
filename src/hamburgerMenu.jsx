import React from "react";

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "menu": "menu menu--off",
      "wrapper": "material-design-hamburger"
    };
    this.navigate = this.navigate.bind(this);
    this.toggle = this.toggle.bind(this);
    this._renderItems = this._renderItems.bind(this);
  };

  navigate(fn) {
    if (fn) {
      fn();
    }
    this.toggle();
  };

  toggle() {
    if (this.state.menu === "menu menu--off menu--on") {
      this.setState({ "menu": "menu menu--off" });
      this.setState({ "wrapper": "material-design-hamburger" });
    } else {
      this.setState({ "menu": "menu menu--off menu--on" });
      this.setState({ "wrapper": "material-design-hamburger model" });
    }
  };

  _renderItems() {
    if (this.props.items) {
      return this.props.items.map( (data, index) => {
        if (data.spacer) {
          return (
            <div className="spacer"></div>
          );
        } else {
          return(
            <div key={ data.id } id={ data.id } onClick={ () => this.navigate(data.click) } title={ (data.title) ? data.title : "" }>
              <a href={ (this.props.hash ? `#/${data.id}` : `/${data.id}`) } className="scroll">
                {( (data.icon) ? <i className="material-icons md-dark">{ data.icon }</i> : "" )}{ (data.title) ? data.title : "" }
              </a>
            </div>
          );
        }
      });
    }
    return <span></span>
  };

  render() {
    return (
      <nav className="wrapper">
        <section className={ this.state.wrapper }>
          <div className="material-design-hamburger__icon" onClick={ this.toggle }>
            <i className="material-icons md-light">menu</i>
          </div>
        </section>
        <section className={ this.state.menu }>
          <div>{ this.props.title }</div>
          { this._renderItems() }
        </section>
      </nav>
    );
  };
};

export default HamburgerMenu;
