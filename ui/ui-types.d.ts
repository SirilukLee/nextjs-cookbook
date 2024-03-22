export interface IArticle {
    id: number
    title:string
    description : string
    text: string
    publishingDate: string
    isNew : boolean
}

export interface IAddArticleButton {
    openModal: () => void
}

export interface IDate {
    date?: string
}

export interface IArticleActions {
    saveArticle?: () => void
    deleteArticle?: () => void
    editArticle?: () => void
}

export interface INavigationParams {
    navigation: Array<INavigation>
}

export interface INavigation {
    link: string
    title: string
}

export interface IArticleEdit {
    article: IArticle
    isEdit: boolean
    editArticle: any
}

export  interface IListPage {
    notFound?: boolean
    data?: IArticle[]
}