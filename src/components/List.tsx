import React from 'react'

interface IProps {
    people: {
        name: string
        age: number
        img: string
        note?: string
    }[]
}

const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => (
            <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.img} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} year old</p>
                <p className="List-note">{person.note}</p>
            </li>
        ))
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
