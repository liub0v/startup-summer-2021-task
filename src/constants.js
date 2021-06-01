const PER_PAGE = 4;
const THOUSAND = 1e3;
const MILLION = 1e6;
const GITHUB_API_URL = 'https://api.github.com/users';

const INIT_PROFILE = {
    avatar_url: "",
    name: "",
    html_url: "",
    login: "",
    followers: 0,
    following: 0,
    public_repos: 0,
}
const INIT_REPOSITORIES = [{
    html_url: "",
    name: "",
    description: "",
}]
export {
    PER_PAGE,
    THOUSAND,
    MILLION,
    GITHUB_API_URL,
    INIT_PROFILE,
    INIT_REPOSITORIES
}
