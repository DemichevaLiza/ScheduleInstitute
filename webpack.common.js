const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // Подключаем плагин для копирования файлов

const webpack = require('webpack');
const path = require('path');

// Добавляем переменную для режима (production или development)
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs')
        // clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['postcss-preset-env']]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                resourceQuery: /raw/,
                type: 'asset/source'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.(ttf|otf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isProduction ? '[name].[contenthash].css' : '[name].css',
            chunkFilename: isProduction ? '[id].[contenthash].css' : '[id].css',
        }),

        // Плагин для копирования статических файлов, таких как PDF
        new CopyPlugin({
            patterns: [{ from: 'src/share', to: 'share' }] // Копирует файлы из src/share в папку 'share' в сборке
        }),

        new HtmlWebpackPlugin({
            hash: true,
            scriptLoading: 'blocking',
            template: './src/index.html',
            filename: './index.html',
            chunks: ['index']
        }),

        new HtmlWebpackPartialsPlugin([
            {
                path: path.join(__dirname, './src/partials/analytics.html'),
                location: 'analytics',
                template_filename: '*',
                priority: 'replace'
            }
        ])
    ],
    optimization: {
        minimize: isProduction,
        minimizer: [new CssMinimizerPlugin()] // Минимизация CSS в production
    }
};
