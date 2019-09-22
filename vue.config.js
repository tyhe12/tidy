require('dotenv').config()

const isProd = process.env.NODE_ENV === 'production'

const s3Deploy = {
    registry: undefined,
    awsProfile: 'default',
    region: isProd ? process.env.REGION_NAME : process.env.REGION_NAME_DEV,
    bucket: isProd ? process.env.BUCKET_NAME : process.env.BUCKET_NAME_DEV,
    createBucket: false,
    staticHosting: true,
    staticIndexPage: 'index.html',
    staticErrorPage: 'index.html',
    assetPath: 'dist',
    assetMatch: '**',
    deployPath: '/',
    acl: 'public-read',
    pwa: false,
    uploadConcurrency: 5,
    pluginVersion: '3.0.0',
    enableCloudfront: isProd,
    cloudfrontId: isProd ? process.env.CLOUDFRONT_ID : process.env.CLOUDFRONT_ID_DEV,
    cloudfrontMatchers: '/*'
}

module.exports = {
    pluginOptions: {
        s3Deploy
    }
}
