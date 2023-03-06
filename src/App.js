import React, {Component} from 'react';
import Image from "./components/Image";
import './App.css';

const imageList = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src:''
    }
  }
  changeImage=(src)=>{
      this.setState({src : this.state.src ? '' : src})
  }
  renderNorm(){
    return (
      <div className="imageList">
        {imageList.map((item,index)=>
          <Image src={item} key={index} changeImage={this.changeImage} className="image"/>
        )}

      </div>
    );
  }
  renderLarge(){
      return(
          <Image src={this.state.src} changeImage={this.changeImage} className="imageBig"/>
      )
  }
  render() {
    if (this.state.src ===''){
      return this.renderNorm();
    } else {
      return this.renderLarge();
    }
  }
}

export default App;