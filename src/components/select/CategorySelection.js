import React from 'react'
import categoriesData from './categoriesData'

export default function CategorySelection({category, selectCategory}) {
    return(
        <div className="category-selection">
            <h4> Select Category</h4>
            <select value={category} onChange={e => selectCategory(e.target.value)}>
                {categoriesData.map((category, index) => (
                    <option
                        key={index}
                        value={category.id}
                        dangerouslySetInnerHTML={{__html:category.name}}
                    />
                ))}
            </select>
        </div>
    )
}