import { IBuilder } from "./burger-builder";
import { BurgerSteps } from "./burger-config"

class BurgerDirector {
    private builder!: IBuilder

    // constructor(builder: IBuilder) {
    //     this.setBuilder(builder)
    // }

    public setBuilder(builder: IBuilder): void {
        this.builder = builder
    }

    public buildHamburger(): void {
        this.builder[BurgerSteps.TOP_BUNS_WITH_SEEDS]()
        this.builder[BurgerSteps.MEAT]()
        this.builder[BurgerSteps.GRILL_BURGER_WITH_CHEESE]()
        this.builder[BurgerSteps.BURGERSOUCE]()
        this.builder[BurgerSteps.B0TT0M_BUNS]()
    }

    public buildChickenburger(): void {
        this.builder[BurgerSteps.TOP_BUNS_WITH_SEEDS]()
        this.builder[BurgerSteps.CHICKEN]()
        this.builder[BurgerSteps.GRILL_BURGER_WITH_CHEESE]()
        this.builder[BurgerSteps.BURGERSOUCE]()
        this.builder[BurgerSteps.B0TT0M_BUNS]()
    }
}

export {BurgerDirector}

