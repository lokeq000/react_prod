import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config?.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');
  const imageRule = config.module?.rules?.find((rule) => {
    const { test } = (rule as { test: RegExp });

    if (!test) {
      return false;
    }

    return test.test('.svg');
  }) as { [key: string]: any };

  imageRule.exclude = /\.svg$/;
  config.module?.rules?.push(buildCssLoader(true));
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  return config;
};
