export interface ConfigurationModel {
  title: string;
  id: string;
  type: string;
  count: number;
}

export interface LoadConfigurationRequest {}

export interface LoadConfigurationResponse {
  sessions: ConfigurationModel[];
}
