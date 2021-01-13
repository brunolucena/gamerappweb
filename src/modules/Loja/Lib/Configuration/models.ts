export interface ConfigurationModel {
  count: number;
  id: string;
  title: string;
  type: string;
}

export interface ConfigurationModelWithUrl extends ConfigurationModel {
  url: string;
}

export interface LoadConfigurationRequest { }

export interface LoadConfigurationResponse {
  sessions: ConfigurationModel[];
}
