//Chapter Two
//Singleton pattern

import { getMock } from "../mocks"
import { BurgerSteps } from "./burger-config"

class BurgerDataService {
    private static instance: BurgerDataService;
    private steps!: { key: BurgerSteps, value: string }[]
    private constructor() {
        this.steps = []
    }

    public static getInstance(): BurgerDataService {
        if (!BurgerDataService.instance) {
            console.log('BurgurDataService new instance')
            BurgerDataService.instance = new BurgerDataService();
        }
        return BurgerDataService.instance;
    }

    getStep(key: BurgerSteps) {
        let currentStep = this.steps.find((step: { key: BurgerSteps, value: string }) => step.key === key)
        if (!currentStep) {
            currentStep = {
                key,
                value: getMock.baking[key]

            }
            this.steps.push(currentStep)

        }
        return currentStep
    }
}

export { BurgerDataService }

// interface ICategory {
//     title: string
//     url: string
// }

// interface IArticle {
//     id: number
//     title: string
//     author: string
//     content: string
//     category: ICategory
//     image: string
//     createdAt: string
//     allowComments: boolean
//     status: 'public' | 'draft'
// }

// class ArticleDataService {
//     private static instance: ArticleDataService;
//     private constructor() { }
//     private articles: { [key: string]: IArticle } = {}
//     private navigation: Array<number> = []

//     public static getInstance(): ArticleDataService {
//         if (!ArticleDataService.instance) {
//             console.log('ArticleDataService new instance')
//             ArticleDataService.instance = new ArticleDataService();
//         }
//         return ArticleDataService.instance;

//     }

//     getNavigation() {
//         if (Array.isArray(this.navigation) && this.navigation.length === 0) {
//             this.navigation = getMock.articles.map(article => article.id)
//         }

//         return this.navigation
//     }

//     getArticle(id: number) {
//         if (!this.articles[id]) {
//             this.articles[id] = getMock.articles.find((article) => article.id === id) as
//                 IArticle
//         }
//         console.log(this.articles[id])
//         return this.articles[id]
//     }

// }