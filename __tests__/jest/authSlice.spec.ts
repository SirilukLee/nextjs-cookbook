import authSlice, { changeAuthState, INITIAL_STATE, AuthState, Auth
} from "../../store/authSlice";


describe("Auth Slice", ()=> {
    describe("My First Function", ()=> {
        it("should auth the user in the store", ()=> {
            const auth: Auth = {
                state:true,
                token: null, 
                userProperties: []
            };
            const action = changeAuthState(auth);
            const expectedResult: AuthState = {
                auth
            };
            const actualResult = authSlice(INITIAL_STATE,action);
            expect(actualResult).toEqual(expectedResult)
        })
    })
})