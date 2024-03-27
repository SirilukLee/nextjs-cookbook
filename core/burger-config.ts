import { MakeChickenburger, MakeHamburger } from "./burger-strategy"

enum BurgerSteps {

    TOP_BUNS_WITH_SEEDS = "backingTopBunsPartWithSeeds",
    TOP_BUNS_WITHOUT_SEEDS = "backingTopBunsPartWithoutSeeds",
    MEAT = "backingMeat",
    FISH = "backingFish",
    CHICKEN = "backingChicken",
    BURGERSOUCE = "prepareBurgerSouce",
    FISH_SOUCE = "prepareFtshSouce",
    SPECIAL_SOUCE = "prepareSpecialSouce",
    B0TT0M_BUNS = "backingBottomBunsPart", 
    GRILL_BURGER_WITH_CHEESE = "grillBurgerWithCheese"
}

enum StrategiesNames {
    HAMBURGER = "hamburger",
    CHICKENBURGER = "chickenburger"
}

const Strategies = {
    [StrategiesNames.HAMBURGER] : new MakeHamburger(),
    [StrategiesNames.CHICKENBURGER] : new MakeChickenburger()
}

export { BurgerSteps, StrategiesNames , Strategies}