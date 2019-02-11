import React from "react";

export default class Product extends React.Component{
    constructor(){
        super();
        this.state = {
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
                imageLink: this.props.product.product_image
            })
        }
    }

    render(){
        return(
            <div className="text-center">
                <a href={this.state.link} target="_blank">
                    <img src={this.state.imageLink} height="350px" alt={this.state.name + "_pic"}/>
                <div><strong>{this.state.name}</strong></div>
                <div><i>${this.state.price}</i></div>
                </a>
                <br/>
            </div>
        )
    }
}