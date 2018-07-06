export interface GenericResponse {
  name: string;
}
export interface OnContextResponse extends GenericResponse {
  mode: string;
  bitrate: number;
  bufferSize: number;
  displayResolution: string;
  game: string;
  hlsLatencyBroadcaster: number;
  isFullScreen: boolean;
  isPaused: boolean;
  isTheatreMode: boolean;
  language: string;
  playbackMode: string;
  theme: string;
  videoResolution: string;
}

export interface OnAuthorizedResponse extends GenericResponse{
  channelId: string;
  clientId: string;
  token: string;
  userId: string;
}

export interface OnErrorResponse extends GenericResponse{ }

export interface RunList {
  onContext: OnContextResponse[];
  onAuthorized: OnAuthorizedResponse[];
  onError: OnErrorResponse[];
  [key: string]: GenericResponse[];
}
