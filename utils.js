export const getArticles = async (limit = 4, category = null, slug = null) => {

    const res = await fetch(`${process.env.STRAPI_URL}/articles?status=published${limit ? `&_limit=${limit}` : "" }${category ? `&category.slug=${category}&slug_ne=${slug}` : ""}`)

    const posts = await res.json()
    
    return posts
}

export const getArticle = async (slug) => {
    const res = await fetch(`${process.env.STRAPI_URL}/articles?slug=${slug}&status=published`)
    const post = await res.json()
    return post[0]
}

export const getProjects = async () => {

    const res = await fetch(`${process.env.STRAPI_URL}/projects?status=published`)

    const projects = await res.json()
    
    return projects
}

export const getProject = async (slug) => {

    const res = await fetch(`${process.env.STRAPI_URL}/projects?slug=${slug}&status=published`)

    const project = await res.json()

    return project[0]
}

export const getServices = async () => {

    const res = await fetch(`${process.env.STRAPI_URL}/services?status=published`)

    const services = await res.json()
    
    return services
}

export const getService = async (slug) => {

    const res = await fetch(`${process.env.STRAPI_URL}/services?slug=${slug}&status=published`)

    const service = await res.json()

    return service[0]
}