import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ArticleDataService, IArticle } from './core/articles-data.service'
import { BurgerDirector } from './core/burger-director'
import { BurgerBuilder} from './core/burger-builder'



const Recipe = ({initialData} : Partial<any>) => {
    const router = useRouter()
    const [content, setContent] = useState<IArticle>({} as IArticle);
    const { recipes, comment_page } = router.query
    // const { pid } = router.query
   
    // console.log(comment_page)
    // let default_comment_pages_value =  Number(comment_page) ?? 10   //comment_page !== undefined ? Number(comment_page) : 10

    // let label = "Next Recipe"
    // let link = "/recipes/breakfast/HealthyBreakfast"
    // if (recipes && recipes[2] === "HealthyBreakfast") {
    //     label = "Previous Recipes"
    //     link = "/recipes/breakfast/AnotherHealthyBreakfast"
    // }
    const burgerBuilder = new BurgerBuilder()
    const burgerDirector = new BurgerDirector() 
    burgerDirector.setBuilder(burgerBuilder)
    useEffect(()=> {
        console.log(recipes)
        
            setContent({
                ...ArticleDataService.getInstance().getArticle(recipes[1])}
            ) 
            burgerDirector.buildHamburger()
        console.log("getting the recipe", burgerBuilder.getRecipe())
    },[recipes, burgerDirector])

    // useEffect(() => {
    //     router.push(link + '?comment_page=' + default_comment_pages_value, undefined, { shallow: true })
    // }, [])

    // useEffect(() => {
    //     console.log(comment_page, initialData)

    // }, [comment_page, initialData])


    // const burgerBuilder = new BurgerBuilder() 
    // const burgerDirector = new BurgerDirector(burgerBuilder)

    const nextPageNumber = (page: string | string[] | undefined): number => {
        return Number(page) + 1
    }

    return (
        <></>
        // <div>
        //     Recipe: in
        //     {Array.isArray(recipes) && recipes.map((recipe: string, index: number) => (
        //         <div key={index}><b>{recipe}</b></div>
        //     ))}
        //     <button onClick={() => router.push(link)}>{label}</button>
        //     <button onClick={() => router.push(link + '?comment_page=' + nextPageNumber(comment_page), undefined, { shallow: true })}>
        //         Change comment page
        //     </button>
        // </div>

    )
}

Recipe.getInitialProps = () => {
    const initialData = 'data on load' + Math.random()
    return {initialData}
}

export default Recipe