import React from 'react'
import { ContentContainer } from '../componentContainer'
import { ItemCard, type ItemCardProps } from './ItemCard'
import { Text } from '../Text/Text'
import styles from './Stock.module.css'

type StockProps = {
    stock: ItemCardProps[]
}

export const StockContainer: React.FC<StockProps> = ({ stock }) => {
    return (
        <ContentContainer>
            <div id={styles['item-container']}>
                {
                    stock && stock.length > 0 && stock.map(product => {
                        return <ItemCard
                        name={product.name}
                        price={product.price}
                        imgLink={product.imgLink}
                        />
                    })
                }
            </div>
        </ContentContainer>
    )
}