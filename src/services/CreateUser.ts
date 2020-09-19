interface CreateUserData {
    name?: String;
    email: String;
    password: String;
    techs: String[];
}

export default function createUser({
    name,
    email,
    password,
    techs,
}: CreateUserData) {
    const user = {
        name,
        email,
        password,
        techs,
    };
    return user;
}
