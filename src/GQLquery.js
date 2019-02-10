import gql from "graphql-tag";

const gqlQuery = gql`
{
    catalogue
        (url: "/illustrations", tenantID: "demo") {
            name
            id
        link
        content_fields
        children {
            link
            name
            product {
                id
                product_image
                price
                price_from
                link
                name
            }
        }
    }
}
`

export default gqlQuery;