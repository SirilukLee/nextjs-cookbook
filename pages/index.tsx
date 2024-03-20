import { useRouter } from 'next/router'
import { useEffect, useState, useMemo } from 'react'
import { ArticleDataService, IArticle } from './core/articles-data.service'
import { BurgerDirector } from './core/burger-director'
import { BurgerBuilder} from './core/burger-builder'
import { IStrategy, Kitchen } from './core/burger-strategy'
import { StrategiesNames, Strategies } from './core/burger-config'

const Recipe = ({ initialData }: { initialData: Partial<any> }) => {
    const router = useRouter()
    const [content, setContent] = useState<IArticle>({} as IArticle);
    const { recipes, comment_page } = router.query
    const { pid } = router.query
    const links = ArticleDataService.getInstance().getNavigation()
    
    let burgerType = null
    let context : Kitchen
    let currentBurgerType : StrategiesNames
    const changeBurgerType = () => {
      const newStrategy = currentBurgerType === StrategiesNames.HAMBURGER? StrategiesNames.CHICKENBURGER : StrategiesNames.HAMBURGER
      console.log("current burger type", currentBurgerType)
      context.setStrategy(Strategies[currentBurgerType])
      context.bakeSomething(burgerBuilder,burgerDirector)
    }
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
        // console.log(recipes)
        // if (pid) {

        // }
            setContent({ 
                ...ArticleDataService.getInstance().getArticle("1")
              }
            ) 
            burgerDirector.buildHamburger()
        console.log("getting the recipe", burgerBuilder.getRecipe())
    },[])

    // useMemo(() => { 
    //   if(Object.keys(content).length > 0) {
    //   console.log("content.burger", content.burger)

    //   burgerType = Strategies[content.burger as StrategiesNames]
     
    //   context = new Kitchen(burgerType)
    //   context.bakeSomething(burgerBuilder, burgerDirector)
    //   }
    //   }, [content])
      

    // useEffect(() => {
    //     router.push(link + '?comment_page=' + default_comment_pages_value, undefined, { shallow: true })
    // }, [])
    
    // useEffect(() => {
    //     console.log(comment_page, initialData)

    // }, [comment_page, initialData])


    // const burgerBuilder = new BurgerBuilder() 
    // const burgerDirector = new BurgerDirector(burgerBuilder)


    return (
        <>
        {/* <div>hi</div> */}
        </>
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