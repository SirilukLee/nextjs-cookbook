import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Recipe = ({initialData}) => {
    const router = useRouter()
    const { recipes, comment_page } = router.query
    console.log(comment_page)
    let default_comment_pages_value =  Number(comment_page) ?? 10   //comment_page !== undefined ? Number(comment_page) : 10
    // console.log(recipes)
    let label = "Next Recipe"
    let link = "/recipes/breakfast/HealthyBreakfast"
    if (recipes && recipes[2] === "HealthyBreakfast") {
        label = "Previous Recipes"
        link = "/recipes/breakfast/AnotherHealthyBreakfast"
    }

    useEffect(() => {
        router.push(link + '?comment_page=' + default_comment_pages_value, undefined, { shallow: true })
    }, [])

    useEffect(() => {
        console.log(comment_page, initialData)

    }, [comment_page, initialData])

    const nextPageNumber = (page: string | string[] | undefined): number => {
        return Number(page) + 1
    }

    return (
        <div>
            Recipe: in
            {Array.isArray(recipes) && recipes.map((recipe: string, index: number) => (
                <div key={index}><b>{recipe}</b></div>
            ))}
            <button onClick={() => router.push(link)}>{label}</button>
            <button onClick={() => router.push(link + '?comment_page=' + nextPageNumber(comment_page), undefined, { shallow: true })}>
                Change comment page
            </button>
        </div>

    )
}

Recipe.getInitialProps = (): any => {
    const initialData = 'data on load' + Math.random()
    return {initialData}
}

export default Recipe