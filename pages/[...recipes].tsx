import { useRouter } from "next/router";

const Recipes = () => {
    const router = useRouter()
    const { recipes } = router.query
    return (
        <div>
            {Array.isArray(recipes) && recipes.map((recipe: string, index: number) => {
                return <div key={index}><b>{recipe}</b></div>
            })}
        </div>
    )
}

export default Recipes