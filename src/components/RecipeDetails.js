import React from 'react';

class RecipeDetails extends React.Component {
    render() {
        var ingredients = this.props.ingredients;
        var method = this.props.method;

        return (
            <div>
                <div className="row justify-content-center mt-3">
                    <div className="col-md-3 col-sm-12 text-center">
                        <h3>Ingredients</h3>
                        <ul className="list-unstyled">
                            {Object.keys(ingredients).map((key) => {
                                return (
                                    <li>{ingredients[key].ingredient.displayName} ({ingredients[key].quantity} {ingredients[key].measurement}) </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h3 className="text-center">Method</h3>
                        <ol>
                            {Object.keys(method).map((key) => {
                                return (
                                    <li>{method[key].description} </li>
                                )
                            })}
                        </ol>
                    </div>
                    <div className="col-md-3 col-sm-12 text-center">
                        <h3>Result</h3>
                        <div className="d-flex justify-content-center">
                            <img src={this.props.img} height="200" width="200"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeDetails;