export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/irfankhansajid')
    return response.json()
}