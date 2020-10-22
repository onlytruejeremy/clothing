import React from 'react'
import './shopdata'
import SHOP_DATA from './shopdata';
import CollectionPreview from "../../components/preview-collections/collection-preview"
class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render () {
        const {collections} = this.state;
        return (
           <div className="shop-page">
               {
                   collections.map(({id, ...collectionProps}) => (
                   <CollectionPreview key={id} {...collectionProps}/>
               ))
               }
           </div>
        )
    }
}

export default ShopPage