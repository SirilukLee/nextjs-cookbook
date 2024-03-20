import { BurgerBuilder } from "./burger-builder";
import { BurgerDataService } from "./burger-data.service";
import { BurgerDirector } from "./burger-director";

export interface IStrategy {
    bakeMeAburger(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector): Array<string>
}

class MakeHamburger implements IStrategy {
    public bakeMeAburger(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector): string[] {
        burgerDirector.buildHamburger()
        return burgerBuilder.getRecipe()
    }
}

class MakeChickenburger implements IStrategy {
    public bakeMeAburger(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector): string[] {
        burgerDirector.buildChickenburger()
        return burgerBuilder.getRecipe()
    }
}



class Kitchen {
    private strategy!: IStrategy;

    constructor(strategy: IStrategy) {
        console.log('strategy class is ', strategy)
        this.strategy = strategy
    }

    public setStrategy(strategy: IStrategy) {
        console.log('strategy', strategy)
        this.strategy = strategy
    }

    public bakeSomething(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector) :void {
        console.log('Now Kitchen in on fire')
        const result = this.strategy.bakeMeAburger(burgerBuilder, burgerDirector)
        console.log('we baked', result)
    }
}

export {Kitchen, MakeChickenburger, MakeHamburger}

