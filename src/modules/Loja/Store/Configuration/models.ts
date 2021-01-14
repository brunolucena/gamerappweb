export interface ConfigurationModel {
  count: number;
  id: string;
  title: string;
  type: 'Banner' | 'Game';
}

export interface ConfigurationModelWithUrl extends ConfigurationModel {
  url: string;
}

export interface LoadConfigurationResponse {
  sessions: ConfigurationModel[];
}
