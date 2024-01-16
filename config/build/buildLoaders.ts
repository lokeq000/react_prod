import  webpack from 'webpack';
export function buildLoaders(): webpack.RuleSetRule[] {
  const typeScripLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  return [
    typeScripLoader,
  ]
}