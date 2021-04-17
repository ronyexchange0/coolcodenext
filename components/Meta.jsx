import Head from "next/head"

const Meta = ({title = "CoolCafe digital marketing agency for coffee shops", keywords= "digital marketing agency, get more customers, cool cafe, coffee shop, web design, social media marketing, seo, digital marketin", description = "With Cool Cafe you can create a cool website that's seo friendly so you can rank higher on google and get insights on other coffee shops which leads you to getting more customers for your coffee shop."}) => {
    return (
        <Head>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

export default Meta
