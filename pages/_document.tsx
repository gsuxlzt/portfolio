import React from 'react'
import Document, { Html, Head, Main, NextScript} from 'next/document'
import next from 'next'

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Jan Miguel Carangan - Portfolio</title>
                    <meta name="description" content="Web developer portfolio of Jan Miguel Carangan" />
                    <link rel="icon" href="/favicon.ico " />
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}