import React from "react";
import { Query } from "react-apollo";

import Product from "./Product";
import gqlQuery from "./GQLquery";


export default class ProductWrapper extends React.Component{
    render(){
        return(
            <div>
                <Query query={gqlQuery}>
                    {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                        
                    const filteredProducts = data.catalogue.children.filter(child => child.product);
                    return filteredProducts.map((productObject) => (
                        <Product key={productObject.name} metaProduct={productObject} product={productObject.product}/>
                    ))}}
                </Query>
            </div>
        )
    }
}