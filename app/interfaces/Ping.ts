export default interface Ping {
  id: number;
  point_id: number;
  trj_id: number;
  driving_mode: string;
  osname: string;
  pingtimestamp: number;
  rawlat: number;
  rawlng: number;
  speed: number;
  bearing: number;
  accuracy: number;
}
