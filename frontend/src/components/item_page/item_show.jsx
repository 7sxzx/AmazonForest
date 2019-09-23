import React from 'react';
import Cart from '../../assets/images/cart.png';
import CommentSectionContainer from './comment_section_container';
import ReactImageMagnify from 'react-image-magnify';
import { withRouter, Link } from 'react-router-dom';

class ItemShow extends React.Component {
  componentDidMount(){
    this.props.fetchItem(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchItem(this.props.match.params.id)
    }

    if (!this.props.item){
      this.props.fetchItem(this.props.match.params.id)
    }

  }

  EditButton(incoming){
    if(incoming.props.currentUser.id === incoming.props.item.sellerId){
      return (
        <div className="edit-item-button">
          <div className="item-edit">edit</div>
          <Link to={`/edit_item/${incoming.props.item._id}`}><div className="atc-div"><input type="button" className="edit-item" value="Edit Your Product" /></div></Link>
        </div>
      )
    }
    return(
      <div></div>
    )
  }


  render() {
    if(!this.props.item){
      return(
        <div></div>
      )
    }
    const item = this.props.item;
    const reviews = this.props.reviews;
    return (
      <div>
        <div className="item-show-top">
          <div className="item-left-col">
            <ReactImageMagnify {...{
              smallImage: {
                isFluidWidth: true,
                src: this.props.item.image_url,
                srcSet: this.srcSet,
                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
              },
              largeImage: {
                src: this.props.item.image_url,
                width: 3500,
                height: 2000
              },
              enlargedImageContainerDimensions: {
                width: '125%',
                height: '125%'
              }
            }} />
          </div>
          <div className="item-center-col">
            <h1 className="item-title">{item.title}</h1>
            <h4>Price: 
              <span className="item-price"> ${item.price}</span>
            </h4>
            <p>{item.description}</p>
            <CommentSectionContainer item={this.props.item} />
          </div>
          <div className="item-right-col">
            <span className="item-price"> ${item.price}</span>
            <p>Want it by Friday? Too late. How about next month? Buy AmazonForest Prime and get it never.</p>
            <h3>In Stock.</h3>
            <div className="add-to-cart-button">
              <img src={Cart} className="item-cart-image" alt="cart" />
              <div className="atc-div"><input type="button" className="add-to-cart" value="Add to Cart" /></div>
            </div>
            <div className="add-to-wl-button">
              <div className="item-wl-plus">+</div>
              <div className="atc-div"><input type="button" className="add-to-wl" value="Add to Wish List" /></div>
            </div>
            <this.EditButton props={this.props}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ItemShow);