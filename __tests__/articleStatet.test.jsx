import articleReducer, { changeArticleState, INITIAL_STATE, ArticleState } from "../pages/store/articleSlice";

describe("Article Slice", () => {
    describe("Article check function", () => {
        it("should change article in store", () => {
            const state = {
                isNew: true
            };
            const action = changeArticleState(state);
            const expectedResult = state;
            const actualResult = articleReducer(INITIAL_STATE, action);
            expect(actualResult).toEqual(expectedResult);
        });
    });
})