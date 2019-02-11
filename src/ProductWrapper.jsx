import React from "react";
import { Query } from "react-apollo";
import { Container, Row, Col } from "reactstrap";

import Product from "./Product";
import gqlQuery from "./GQLquery";
import FakeNav from "./FakeNav";


export default class ProductWrapper extends React.Component{
    render(){
        return(
            <div>
                <FakeNav/>
                <Container>
                    <Row>
                        <Query query={gqlQuery}>
                            {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error :(</p>;
                                
                            const filteredProducts = data.catalogue.children.filter(child => child.product);
                            return filteredProducts.map((productObject) => (
                                <Col lg="4" key={productObject.name}>
                                    <Product metaProduct={productObject} product={productObject.product}/>
                                </Col>
                            ))}}
                        </Query>
                    </Row>
                </Container>
            </div>
        )
    }
}