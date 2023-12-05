import Ping from "@/app/interfaces/Ping";
import Trajectory from "@/app/interfaces/Trajectory";

export default interface APIData {
  message: string;
  bundle: { trajectory?: Trajectory; points?: Ping[]; error: Error };
}
