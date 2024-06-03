export default interface Ping {
  point_id: number;
  trj_id: number;
  driving_mode: string;
  os_name: string;
  pingtimestamp: number;
  lat: number;
  lon: number;
  speed: number;
  bearing: number;
  accuracy: number;
}
