interface IBuilder {
    backingTopBunsPartWithSeeds(): void;
    backingTopBunsPartWithoutSeeds(): void;
    backingMeat(): void;
    backingFish(): void;
    backingChicken(): void;
    prepareBurgerSouce(): void;
    prepareFishSouce(): void;
    prepareSpecialSouce(): void;
    backingBottomBunsPart(): void;
    grillBurgerWithCheese(): void;
}

class BurgerBuilder implements IBuilder {
    backingTopBunsPartWithSeeds(): void {
        console.log('Top bun with seeds is builded')
    }
    backingTopBunsPartWithoutSeeds(): void {
        console.log('Top bun without seeds is builded')
    }
    backingMeat(): void {
        console.log('Meat is builded')
    }
    backingFish(): void {
        console.log('Fish is builded')
    }
    backingChicken(): void {
        console.log('Chicken is builded')
    }
    prepareBurgerSouce(): void {
        console.log('Burger souce is builded')
    }
    prepareFishSouce(): void {
        console.log('Fish souce is builded')
    }
    prepareSpecialSouce(): void {
        console.log('Special souce is builded')
    }
    backingBottomBunsPart(): void {
        console.log('Bottom bun is builded')
    }
    grillBurgerWithCheese(): void {
        console.log('Grill with cheese is builded')
    }
}

class BurgerDirector {
    private builder!: IBuilder

    constructor(builder: IBuilder) {
        this.setBuilder(builder)
    }

    public setBuilder(builder: IBuilder): void {
        this.builder = builder
    }

    public buildHamburger(): void {
        this.builder.backingTopBunsPartWithSeeds()
        this.builder.backingMeat()
        this.builder.grillBurgerWithCheese()
        this.builder.prepareBurgerSouce()
        this.builder.backingBottomBunsPart()
    }
}