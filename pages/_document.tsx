import Document, { Html, Head, Main, NextScript } from 'next/document'
import Layout from '../src/components/Layout';

class MyDocument extends Document {
    static async getInitialProps(ctx : any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="theme-color" content='#525FFB' />

                    <link rel="preload" href="/pfaith_logo_light.png" as="image" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument