/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
        
      },
      typescript: {
        ignoreBuildErrors: true,
      },
    images:{
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
        
    },
    webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
        config.module.rules.push({
          test: /\.tsx?$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        });
        config.resolve.alias['console'] = 'console-browserify';
      }
      return config;
    },
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.js$/,
        include: [path.resolve(__dirname, 'node_modules/undici')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      });
  
      return config;
    },
    compiler: {
      // removeConsole: process.env.NODE_ENV === "production",
    },
    // webpack: (config, { dev }) => {
    //   if (!dev) {
    //     config.plugins.push(
    //       new webpack.DefinePlugin({
    //         'console.log': '() => {}',
    //         'console.warn': '() => {}',
    //         'console.error': '() => {}',
    //       })
    //     );
    //   }
    //   return config;
    // },
    
        
}

module.exports = nextConfig
