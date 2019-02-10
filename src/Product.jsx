import React from "react";

export default class Product extends React.Component{
    constructor(){
        super();
        this.state = {
            ready: false,
            currentProduct: {},
            link: "None",
            name: "None",
            price: "None",
            imageLink: "None",
        }
    }
    componentDidMount(){
        if(this.props.metaProduct.product){
            this.setState({
                currentProduct: this.props.product,
                link: this.props.metaProduct.link,
                name: this.props.metaProduct.name,
                price: this.props.product.price,
                imageLink: this.props.product.product_image,
                ready: true
            })
        }
    }

    render(){
        return(
            <div>
               <p>Name: {this.state.name}</p>
               <p>Price: {this.state.price}</p>
               <img src={this.state.imageLink}/>
            </div>
        )
    }
}