import { useEffect, useState } from "react";
import {  fetchRecipes } from "./utils/api";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {

  const [ recipes,setRecipes] = useState([])
const [loading,setLoading] = useState(true)
  
  useEffect( () => {
    const fetchRecipesData = async() => {
      try {
        const data = await fetchRecipes()
        console.log( 'data is :',data)
       setRecipes(data)
       setLoading(false)
      } catch { 
        setLoading(false)
      }

    }
    fetchRecipesData()
  }, []) 

  /*
  useEffect( () => {
    const fetchRecipesDataId = async() => {
      const data = await fetchRecipesById('7')
      console.log( 'data2 is :',data)
     setRecipes(data)
    }
    fetchRecipesDataId()
  }, [])  */

   return (
    <div className="App">
     <Header title={'Recipe App'}/>
     

{loading ? <Loader name={'Data is in-Progress Hold on ..........'}/> : <RecipeList recipes= {recipes}/>  } 

   {/*loading ? <Loader name={'Data is in-Progress Hold on ..........'}/> :recipes.map((obj,index)=> <div key={index}> {obj.title}</div>)  */} 
    {/*recipes.title */}
    </div>
  );
}

export default App;
