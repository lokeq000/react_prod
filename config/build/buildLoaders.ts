import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import  webpack from 'webpack';
import { BuildOptions } from './types/config';
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules:  {
              auto: (resPath: string) => resPath.includes('.module.'),
              localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            },
          }
        },
        "sass-loader",
      ],
  }
  const typeScripLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const babelLoader = {
    test: /\.m?(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ["i18next-extract", {
            locales: ['ru', 'en'],
            keyAsDefaulttValue: true
          }],
        ]
      }
    }
  }
  return [
    babelLoader,
    typeScripLoader,
    cssLoader,
    svgLoader,
    fileLoader
  ]
}