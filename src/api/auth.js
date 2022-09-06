import fetching from "./index";

class AuthApi {

    static Login = (data) => {
        return fetching.post(`users/login`, data);
    };

    // don't forget to add the register and logout methods
}

export default AuthApi