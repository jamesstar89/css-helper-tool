import React from 'react';
import classNames from 'classnames';
import BodyClassName from 'react-body-classname';
import R from 'ramda';
import CoreLayout from './CoreLayout';
const mapIndexed = R.addIndex(R.map);

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      elementsArray: [
        {
          id: 1,
          type: 'div',
          nested: 2
        },
        {
          id: 2,
          type: 'p',
          nested: 3
        },
        {
          id: 3,
          type: 'span'
        }
      ]
    }
    this.prepElements = this.prepElements.bind(this);
    this.buildElements = this.buildElements.bind(this);
    this.renderElements = this.renderElements.bind(this);
  }

  prepElements () {
    let output = [];
    let elementsToFilter = [];
    R.map((element) => {
      if (element.nested !== undefined) {
        element.children = R.find(R.propEq('id', element.nested))(this.state.elementsArray);
        elementsToFilter.push(element.nested);
      }
      output.push(element);
    }, this.state.elementsArray);

    R.map((element) => {
      output = R.reject((n) => {return n.id === element}, output);
    }, elementsToFilter);

    return output;
  }

  buildElements (element, index) {
    if (element.type === 'div') {
      return (<div key={index}>{this.buildElements(element.children)}</div>);
    }
    if (element.type === 'p') {
      return (<p key={index}>{this.buildElements(element.children)}</p>);
    }
    if (element.type === 'span') {
      return (<span key={index}>Hi, Im a span</span>);
    }
  }
  renderElements (element, index) {
    return (this.buildElements(element, index));
  }

  render () {
    return (
      <BodyClassName className='css-tool-page-body-class'>
        <CoreLayout>
          <div>{mapIndexed(this.renderElements, this.prepElements())}</div>
        </CoreLayout>
      </BodyClassName>
    );
  }
}

export default Main;
