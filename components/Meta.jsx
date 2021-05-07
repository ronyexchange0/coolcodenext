import Head from "next/head"

const Meta = ({
    title = "CoolCode - digital marketing agency", 
    keywords= "digital marketing agency, get more customers,coolcode, web design, social media marketing, seo, digital marketing", 
    description = "Digital marketing agency helping businesses to be visible online, so they get new customers fast with no effort",
    image="/assets/logo.svg",
    link="/"

    }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta name='robots' content='index, follow' />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={`coolcodeweb.com${link}`} />
            <meta property="og:site_name" content="CoolCode" />
            <meta name="twitter:card" content="summary" />
            <link rel='icon' href='/favicon.ico' />
            
        </Head>
    )
}

export default Meta
