export interface ConfigurationModel {
  title: string;
  id: string;
  type: string;
  count: number;
}

export interface ConfigurationModelWithUrl extends ConfigurationModel {
  url: string;
}

export interface LoadConfigurationRequest { }

export interface LoadConfigurationResponse {
  sessions: ConfigurationModel[];
}
