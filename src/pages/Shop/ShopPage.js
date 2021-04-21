/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import Collection_Preview from '../../components/preview-collection/Collection_Preview'
import shopData from  "./ShopData"

export default function ShopPage() {
    const [collection, setCollection] = useState(shopData)
    return (
        <div>
          {collection.map(({id,items,title,routeName})=><Collection_Preview key={id} items={items} title={title}   />)}
        </div>
    )
}
