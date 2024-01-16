import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import  webpack from 'webpack';
import { BuildOptions } from './types/config';
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules:  {
              auto: (resPath: string) => resPath.includes('.module.'),
              localIndetName: isDev ?  '[path][name]__[local]': '[hash:base64:8]',
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
  return [
    typeScripLoader,
    cssLoader
  ]
}