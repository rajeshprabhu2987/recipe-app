import React from 'react'
import './RecipeList.scss'
import { Link } from 'react-router-dom'

function RecipeList({recipes = []}) {
  return (
    <div className='recipeList'>
        <h3 className='title'>Check out these recipes</h3>
        <div className='list'>
            {recipes.map(recipe => (
                <Link
                to={`/recipe/${recipe.id}`}
                className='linkItem'
                key={recipe.id}>
                <div   className='cardContainer'> 
                    <div className='cardHead'> 
                        {recipe.title}
                    </div>
                    <div className='recipeInfo'>
                        <span className='tag level'>{recipe.level}</span>
                        <span className='tag time'>{recipe.time}</span>
                        <span className='tag veg'>{recipe.isVeg ? "Veg" : "Non-veg"}</span>
                    </div>
                    <img
                    src= {recipe.image}
                    alt= {recipe.title}
                    className='image'
                    
                    />
                </div>
                </Link>
            ))}
 
        </div>
    </div>
  )
}

export default RecipeList