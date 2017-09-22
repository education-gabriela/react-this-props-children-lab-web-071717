import React from "react";

class ThemedDecorations extends React.Component {
  render () {
    const children = this.props.children.map(element => <p className={this.props.theme}>{element.props.children}</p>)
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ThemedDecorations;
