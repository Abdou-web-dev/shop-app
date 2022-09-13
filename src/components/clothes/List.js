import * as React from 'react';

const List = ({ res }) => {
    // var obj = { filteredResults };
    // On parcourt les noms des propriétés

    return (
        <div className="orders-container">
            list !
            {console.log(res, "here")
            }

            {
                res?.map((element, index) => {
                    return (
                        <div key={index}>
                            <div>{element.name} </div>
                            <div>{element.id} </div>
                            <div>{element.fit} </div>


                        </div>
                    )
                }

                )
            }

        </div>
    )
}
export default List;

